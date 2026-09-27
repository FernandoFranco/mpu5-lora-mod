import { Grid, Box } from '@mui/material'
import { FeatureCard } from './FeatureCard'

export function FeatureGrid({ features, columns = 3 }) {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: `repeat(${columns}, 1fr)` },
        gap: 3,
      }}
    >
      {features.map((feature, idx) => (
        <Box key={idx}>
          <FeatureCard {...feature} />
        </Box>
      ))}
    </Grid>
  )
}
