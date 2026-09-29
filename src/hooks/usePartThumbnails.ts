import { useEffect, useState } from 'react'
import {
  DirectionalLight,
  HemisphereLight,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three'
import type { STLPart } from '@/types'
import { getFitDistance, getPartColor, loadStl } from '@/utils'

const THUMB_SIZE = 192
const FOV = 35
const thumbnailCache = new Map<string, string>()

/**
 * Gera uma imagem estática de cada peça usando um único renderer fora da tela, evitando
 * abrir um contexto WebGL por item da lista.
 */
export function usePartThumbnails(parts: STLPart[]): Record<string, string> {
  const [thumbs, setThumbs] = useState<Record<string, string>>({})

  useEffect(() => {
    let cancelled = false
    const pending = parts.filter(part => !thumbnailCache.has(part.file))

    const publish = () => {
      if (cancelled) return
      setThumbs(Object.fromEntries(parts.map(p => [p.id, thumbnailCache.get(p.file) ?? ''])))
    }
    publish()
    if (pending.length === 0) return

    const renderer = new WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(THUMB_SIZE, THUMB_SIZE)
    renderer.setPixelRatio(1)

    const scene = new Scene()
    scene.add(new HemisphereLight(0xffffff, 0x5a5f66, 1.1))
    const lights: [number, number, number, number][] = [
      [3, 5, 4, 2.2],
      [-5, 2, 3, 1.0],
      [-2, 3, -5, 1.4],
    ]
    lights.forEach(([x, y, z, intensity]) => {
      const light = new DirectionalLight(0xffffff, intensity)
      light.position.set(x, y, z)
      scene.add(light)
    })
    const camera = new PerspectiveCamera(FOV, 1)

    const run = async () => {
      for (const part of pending) {
        try {
          const geometry = await loadStl(part.file)
          if (cancelled) break
          const material = new MeshPhongMaterial({
            color: getPartColor(part.name),
            specular: '#777777',
            shininess: 60,
          })
          const mesh = new Mesh(geometry, material)
          scene.add(mesh)
          const distance = getFitDistance(geometry, FOV)
          camera.position.set(distance * 0.6, distance * 0.55, distance * 0.6)
          camera.lookAt(0, 0, 0)
          renderer.render(scene, camera)
          thumbnailCache.set(part.file, renderer.domElement.toDataURL('image/png'))
          scene.remove(mesh)
          material.dispose()
          publish()
        } catch {
          // Peça sem miniatura: o card mostra apenas o número.
        }
      }
      renderer.dispose()
    }
    void run()

    return () => {
      cancelled = true
    }
  }, [parts])

  return thumbs
}
