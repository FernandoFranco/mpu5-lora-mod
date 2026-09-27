import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

const stlCache = new Map()

function STLPart({ file, highlightPartId, partId }) {
  const [geometry, setGeometry] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!file) return

    if (stlCache.has(file)) {
      setGeometry(stlCache.get(file))
      return
    }

    const loader = new STLLoader()
    loader.load(
      file,
      geometry => {
        stlCache.set(file, geometry)
        setGeometry(geometry)
      },
      undefined,
      () => setError(true)
    )
  }, [file])

  if (error) return null
  if (!geometry) return null

  const isHighlighted = !highlightPartId || highlightPartId === partId

  return (
    <mesh geometry={geometry}>
      <meshPhongMaterial
        color={isHighlighted ? '#ff8c42' : '#666'}
        opacity={isHighlighted ? 1 : 0.3}
        transparent
      />
    </mesh>
  )
}

export function STLGroupViewer({ parts, highlightPartId = null }) {
  const theme = useTheme()
  const bgColor = theme.palette.mode === 'dark' ? '#0a0a0a' : '#f5f5f5'

  return (
    <Box
      sx={{
        width: '100%',
        height: 500,
        backgroundColor: bgColor,
        borderRadius: 2,
        overflow: 'hidden',
        border: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#ddd'}`,
      }}
    >
      <Canvas style={{ width: '100%', height: '100%' }}>
        <PerspectiveCamera position={[0, 0, 100]} fov={50} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls autoRotate autoRotateSpeed={2} />

        {parts.map(part => (
          <STLPart
            key={part.id}
            file={part.file}
            partId={part.id}
            highlightPartId={highlightPartId}
          />
        ))}
      </Canvas>
    </Box>
  )
}
