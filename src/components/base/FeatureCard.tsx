import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material'
import type { FeatureCardProps } from '@/types'

export const FeatureCard: FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        padding: 3.5, // 28px
        backgroundColor: 'background.paper',
        border: `1px solid ${theme.palette.mode === 'dark' ? '#1F241C' : '#e0e0e0'}`,
        borderRadius: '16px',
        height: '100%',
      }}
    >
      {Icon && (
        <Box
          sx={{
            width: 44,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            backgroundColor:
              theme.palette.mode === 'dark'
                ? 'rgba(255, 140, 66, 0.15)' // #2A1B0E dark
                : 'rgba(255, 140, 66, 0.1)',
            mb: 2,
          }}
        >
          <Icon />
        </Box>
      )}

      <Typography
        sx={{
          fontFamily: 'Chakra Petch, sans-serif',
          fontWeight: 600,
          fontSize: '21px',
          mb: 1,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: '15px',
          color: 'text.secondary',
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>
    </Box>
  )
}
