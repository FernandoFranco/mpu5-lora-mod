import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import type { SectionTitleProps } from '@/types'

export const SectionTitle: FC<SectionTitleProps> = ({
  label,
  title,
  description = '',
  maxWidth = '100%',
}) => {
  return (
    <Box sx={{ mb: 6, maxWidth }}>
      {label && (
        <Typography
          sx={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '13px',
            letterSpacing: '0.12em',
            color: 'primary.main',
            mb: 2,
            textTransform: 'uppercase',
          }}
        >
          {label}
        </Typography>
      )}
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'Chakra Petch, sans-serif',
          fontWeight: 700,
          fontSize: { xs: '32px', md: '44px' },
          lineHeight: 1.2,
          mb: 2,
        }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          sx={{
            fontSize: '17px',
            lineHeight: 1.7,
            color: 'text.secondary',
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  )
}
