import { Card, CardContent, Box, Typography, useTheme } from '@mui/material'

export default function FeatureCard({ icon: IconComponent, title, description }) {
  const theme = useTheme()
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.paper,
        height: '100%',
        border: `1px solid ${theme.palette.mode === 'dark' ? '#333333' : '#EEEEEE'}`,
      }}
    >
      <CardContent>
        <Box
          sx={{
            color: theme.palette.primary.main,
            mb: 3,
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <IconComponent size="xl" />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
