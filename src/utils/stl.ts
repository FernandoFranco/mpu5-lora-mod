import { BufferGeometry } from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

const stlCache = new Map<string, Promise<BufferGeometry>>()

/** Resolve um caminho absoluto de `public/` respeitando o `base` do Vite. */
export const resolveAsset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

/**
 * Carrega o STL uma única vez. A geometria vem centralizada na origem e com o eixo Z do
 * modelo apontando para cima, pronta para ser enquadrada por qualquer câmera.
 */
export const loadStl = (file: string): Promise<BufferGeometry> => {
  const cached = stlCache.get(file)
  if (cached) return cached

  const promise = new Promise<BufferGeometry>((resolve, reject) => {
    new STLLoader().load(
      resolveAsset(file),
      raw => {
        if (!raw.getAttribute('position')?.count) {
          reject(new Error(`STL vazio: ${file}`))
          return
        }
        // Suaviza as curvas (normais por vértice) preservando as arestas vivas.
        const geometry = toCreasedNormals(raw, Math.PI / 6)
        geometry.rotateX(-Math.PI / 2)
        geometry.center()
        geometry.computeBoundingSphere()
        resolve(geometry)
      },
      undefined,
      reject
    )
  })
  promise.catch(() => stlCache.delete(file))
  stlCache.set(file, promise)
  return promise
}

/** Distância da câmera para a peça caber inteira no campo de visão. */
export const getFitDistance = (geometry: BufferGeometry, fovDeg: number): number => {
  const radius = geometry.boundingSphere?.radius ?? 1
  return (radius / Math.sin((fovDeg * Math.PI) / 360)) * 1.1
}

/** Cinza médio: contrasta com as peças pretas e com as prateadas, em qualquer tema. */
export const PREVIEW_BACKGROUND = '#6a6e74'

const COLOR_BLACK = '#34373b'
const COLOR_SILVER = '#b9bdc4'

/** Peças "Latch" aparecem em prata; todas as demais em preto. */
export const getPartColor = (partName: string): string =>
  /latch/i.test(partName) ? COLOR_SILVER : COLOR_BLACK

export const fileName = (path: string): string => path.split('/').pop() ?? path
