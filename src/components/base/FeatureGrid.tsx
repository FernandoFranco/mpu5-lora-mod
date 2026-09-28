import { FC } from 'react'
import { Grid, Box } from '@mui/material'
import type { FeatureGridProps } from '@/types'
import { FeatureCard } from './FeatureCard'

export const FeatureGrid: FC<FeatureGridProps> = ({ features, columns = 3 }) => {
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
