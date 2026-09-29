import { FC } from 'react'
import { Box, ButtonBase, Stack, Typography } from '@mui/material'
import { usePartThumbnails } from '@/hooks'
import { ChevronRight } from '@/icons'
import type { PartsListProps } from '@/types'
import { fileName, PREVIEW_BACKGROUND } from '@/utils'

export const PartsList: FC<PartsListProps> = ({ parts, selectedId, onSelect }) => {
  const thumbnails = usePartThumbnails(parts)

  return (
    <Stack spacing={1.5}>
      {parts.map((part, idx) => {
        const active = selectedId === part.id
        const thumb = thumbnails[part.id]

        return (
          <ButtonBase
            key={part.id}
            onClick={() => onSelect(part.id)}
            aria-pressed={active}
            sx={{
              width: '100%',
              justifyContent: 'flex-start',
              textAlign: 'left',
              gap: 2,
              p: 1.5,
              borderRadius: '14px',
              border: '1px solid',
              borderColor: active ? 'primary.main' : 'divider',
              backgroundColor: active ? 'rgba(255,138,51,0.08)' : 'background.paper',
              transition: 'border-color 0.2s, background-color 0.2s',
              '&:hover': { borderColor: 'primary.main' },
            }}
          >
            <Box
              sx={{
                width: 72,
                height: 72,
                flexShrink: 0,
                borderRadius: '10px',
                backgroundColor: PREVIEW_BACKGROUND,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {thumb && (
                <img src={thumb} alt="" width={64} height={64} style={{ objectFit: 'contain' }} />
              )}
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                sx={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '12px',
                  color: active ? 'primary.main' : 'text.secondary',
                }}
              >
                {String(idx + 1).padStart(2, '0')}
              </Typography>
              <Typography
                sx={{ fontFamily: 'Chakra Petch, sans-serif', fontWeight: 700, fontSize: '16px' }}
              >
                {part.name}
              </Typography>
              <Typography
                noWrap
                sx={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '12px',
                  color: 'text.secondary',
                }}
              >
                {fileName(part.file)}
              </Typography>
            </Box>
            <Box sx={{ color: active ? 'primary.main' : 'text.secondary', display: 'flex' }}>
              <ChevronRight size="sm" />
            </Box>
          </ButtonBase>
        )
      })}
    </Stack>
  )
}
