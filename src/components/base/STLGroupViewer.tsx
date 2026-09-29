import { FC, useEffect, useRef, useState } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { BufferGeometry, Group, MathUtils, type PerspectiveCamera as ThreeCamera } from 'three'
import type { STLGroupViewerProps } from '@/types'
import { getFitDistance, loadStl } from '@/utils'

const FOV = 35
const AUTO_ROTATE_DEG_PER_SEC = 30

const RotatingPart: FC<STLGroupViewerProps & { geometry: BufferGeometry }> = ({
  geometry,
  color,
  autoRotate = true,
  nudge,
  onAngleChange,
}) => {
  const group = useRef<Group>(null)
  const target = useRef(0)
  const lastReported = useRef(-1)

  useEffect(() => {
    if (nudge) target.current += MathUtils.degToRad(nudge.delta)
  }, [nudge])

  useFrame((_, delta) => {
    const node = group.current
    if (!node) return
    if (autoRotate) target.current += MathUtils.degToRad(AUTO_ROTATE_DEG_PER_SEC) * delta
    node.rotation.y = MathUtils.damp(node.rotation.y, target.current, 8, delta)

    const degrees = Math.round(MathUtils.radToDeg(node.rotation.y) % 360)
    const normalized = (degrees + 360) % 360
    if (normalized !== lastReported.current) {
      lastReported.current = normalized
      onAngleChange?.(normalized)
    }
  })

  return (
    <group ref={group}>
      <mesh geometry={geometry}>
        <meshPhongMaterial color={color} specular="#777777" shininess={60} />
      </mesh>
    </group>
  )
}

export const STLGroupViewer: FC<STLGroupViewerProps> = props => {
  const { file } = props
  const [loaded, setLoaded] = useState<{ file: string; geometry: BufferGeometry } | null>(null)

  useEffect(() => {
    let cancelled = false
    loadStl(file)
      .then(geometry => {
        if (!cancelled) setLoaded({ file, geometry })
      })
      .catch(() => {
        if (!cancelled) setLoaded(null)
      })
    return () => {
      cancelled = true
    }
  }, [file])

  const geometry = loaded?.file === file ? loaded.geometry : null
  const distance = geometry ? getFitDistance(geometry, FOV) * 1.3 : 100

  return (
    <Canvas style={{ width: '100%', height: '100%' }} dpr={[1, 2]}>
      <PerspectiveCamera
        makeDefault
        fov={FOV}
        position={[distance * 0.6, distance * 0.55, distance * 0.6]}
        near={0.1}
        far={distance * 10}
        onUpdate={(cam: ThreeCamera) => cam.lookAt(0, 0, 0)}
      />
      <hemisphereLight args={['#ffffff', '#5a5f66', 1.1]} />
      <directionalLight position={[3, 5, 4]} intensity={2.2} />
      <directionalLight position={[-5, 2, 3]} intensity={1.0} />
      <directionalLight position={[-2, 3, -5]} intensity={1.4} />
      {geometry && <RotatingPart {...props} geometry={geometry} />}
    </Canvas>
  )
}
