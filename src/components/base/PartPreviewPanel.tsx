import { FC, useState } from 'react'
import { Box, Button, ButtonBase, Typography } from '@mui/material'
import { DownloadIcon, PlayPauseIcon, RotateLeft, RotateRight } from '@/icons'
import type { PartPreviewPanelProps, RotationNudge } from '@/types'
import { fileName, getPartColor, PREVIEW_BACKGROUND, resolveAsset } from '@/utils'
import { STLGroupViewer } from './STLGroupViewer'

const NUDGE_DEGREES = 45

const monoSx = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: '11px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'text.secondary',
} as const

const controlSx = {
  width: 40,
  height: 40,
  borderRadius: '10px',
  color: 'text.primary',
  '&:hover': { color: 'primary.main' },
} as const

export const PartPreviewPanel: FC<PartPreviewPanelProps> = ({ part, index, total }) => {
  const [rotating, setRotating] = useState(true)
  const [angle, setAngle] = useState(0)
  const [nudge, setNudge] = useState<RotationNudge | null>(null)

  const rotate = (delta: number) => setNudge(prev => ({ id: (prev?.id ?? 0) + 1, delta }))

  const specs = [
    { label: 'Preench.', value: part.infill },
    { label: 'Paredes', value: part.walls },
    { label: 'Suporte', value: part.support },
    { label: 'Qtd.', value: String(part.qty) },
  ]

  return (
    <Box
      sx={{
        borderRadius: '20px',
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
        overflow: 'hidden',
      }}
    >
      {/* Viewer */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 320, md: 400 },
          borderBottom: '1px solid',
          borderColor: 'divider',
          backgroundColor: PREVIEW_BACKGROUND,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0 }}>
          <STLGroupViewer
            file={part.file}
            color={getPartColor(part.name)}
            autoRotate={rotating}
            nudge={nudge}
            onAngleChange={setAngle}
          />
        </Box>

        <Typography
          sx={{
            ...monoSx,
            color: '#f1f2f4',
            position: 'absolute',
            top: 20,
            left: 24,
            display: 'flex',
            gap: 1,
          }}
        >
          <Box component="span" sx={{ color: 'primary.main' }}>
            ●
          </Box>
          Prévia 3D · {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </Typography>
        <Typography sx={{ ...monoSx, color: '#f1f2f4', position: 'absolute', top: 20, right: 24 }}>
          Rot {angle}°
        </Typography>

        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            p: 0.75,
            borderRadius: '14px',
            border: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'background.paper',
          }}
        >
          <ButtonBase
            aria-label="Girar para a esquerda"
            onClick={() => rotate(-NUDGE_DEGREES)}
            sx={controlSx}
          >
            <RotateLeft size="sm" />
          </ButtonBase>
          <ButtonBase
            aria-label={rotating ? 'Pausar giro' : 'Retomar giro'}
            onClick={() => setRotating(r => !r)}
            sx={{
              ...controlSx,
              width: 'auto',
              px: 2,
              gap: 1,
              color: 'primary.main',
              backgroundColor: 'rgba(255,138,51,0.12)',
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            <PlayPauseIcon size="xs" state={rotating ? 'pause' : 'play'} />
            {rotating ? 'Pausar giro' : 'Retomar giro'}
          </ButtonBase>
          <ButtonBase
            aria-label="Girar para a direita"
            onClick={() => rotate(NUDGE_DEGREES)}
            sx={controlSx}
          >
            <RotateRight size="sm" />
          </ButtonBase>
        </Box>
      </Box>

      {/* Detalhes */}
      <Box sx={{ p: { xs: 2.5, md: 4 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { sm: 'flex-start' },
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="h4" sx={{ fontSize: { xs: '22px', md: '28px' }, lineHeight: 1.2 }}>
              {part.name}
            </Typography>
            <Typography
              sx={{
                mt: 0.5,
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '13px',
                color: 'text.secondary',
                wordBreak: 'break-all',
              }}
            >
              {fileName(part.file)}
            </Typography>
          </Box>
          <Button
            component="a"
            href={resolveAsset(part.file)}
            download={fileName(part.file)}
            variant="outlined"
            startIcon={<DownloadIcon size="sm" />}
            sx={{
              flexShrink: 0,
              borderRadius: '10px',
              fontWeight: 600,
              textTransform: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Baixar .STL
          </Button>
        </Box>

        <Typography sx={{ mt: 3, color: 'text.secondary', lineHeight: 1.6 }}>
          {part.description}
        </Typography>

        <Box
          sx={{
            mt: 3,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          {specs.map(spec => (
            <Box
              key={spec.label}
              sx={{
                p: 2,
                outline: '1px solid',
                outlineColor: 'divider',
              }}
            >
              <Typography sx={monoSx}>{spec.label}</Typography>
              <Typography sx={{ fontWeight: 700, mt: 0.5 }}>{spec.value}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
