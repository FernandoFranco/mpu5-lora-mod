import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material'

export function StepList({ steps }) {
  const theme = useTheme()

  return (
    <Box>
      {steps.map((step, idx) => (
        <Box
          key={idx}
          sx={{
            display: 'flex',
            mb: 4,
            position: 'relative',
          }}
        >
          {/* Número círculo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              borderRadius: '50%',
              backgroundColor: step.highlight ? 'primary.main' : 'transparent',
              border: step.highlight
                ? 'none'
                : `2px solid ${theme.palette.mode === 'dark' ? '#333' : '#ddd'}`,
              color: step.highlight ? 'primary.contrastText' : 'text.primary',
              fontWeight: 700,
              flexShrink: 0,
              mr: 3,
            }}
          >
            {step.number}
          </Box>

          {/* Linha vertical (se não é último) */}
          {idx < steps.length - 1 && (
            <Box
              sx={{
                position: 'absolute',
                left: 21,
                top: 44,
                width: 2,
                height: 'calc(100% + 16px)',
                backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#ddd',
              }}
            />
          )}

          {/* Conteúdo */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: 'Chakra Petch, sans-serif',
                fontWeight: 600,
                fontSize: '18px',
                mb: 1,
              }}
            >
              {step.title}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2 }}>{step.description}</Typography>
            {step.content && <Box sx={{ mt: 2 }}>{step.content}</Box>}
          </Box>
        </Box>
      ))}
    </Box>
  )
}
