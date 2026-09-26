import { Typography, Box, useTheme } from '@mui/material'

export default function StepAccordion({ steps }) {
  const theme = useTheme()

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
      {steps.map((step, idx) => (
        <Box key={step.id} sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.palette.mode === 'dark' ? '#0A0A0A' : '#FFFFFF',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              mx: 'auto',
              mb: 2
            }}
          >
            {idx + 1}
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>{step.title}</Typography>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>{step.content}</Typography>
          {step.images?.map((img, i) => (
            <Box key={i} component="img" src={img} alt={`Passo ${idx + 1}`} sx={{ width: '100%', borderRadius: 1, mt: 2, maxHeight: 200, objectFit: 'cover' }} />
          ))}
        </Box>
      ))}
    </Box>
  )
}
