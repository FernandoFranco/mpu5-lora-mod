import { FC } from 'react'
import { Grid, Box } from '@mui/material'
import type { TwoColumnSectionProps } from '@/types'

export const TwoColumnSection: FC<TwoColumnSectionProps> = ({
  left,
  right,
  leftSpan = 5,
  rightSpan = 6,
  gap = 3,
  reverseOnMobile = false,
}) => {
  return (
    <Grid
      container
      spacing={gap}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(12, 1fr)' },
        gap: gap * 8,
      }}
    >
      <Box
        sx={{
          gridColumn: { xs: 'span 12', md: `span ${leftSpan}` },
          order: reverseOnMobile ? { xs: 2, md: 1 } : 1,
        }}
      >
        {left}
      </Box>
      <Box
        sx={{
          gridColumn: { xs: 'span 12', md: `span ${rightSpan}` },
          order: reverseOnMobile ? { xs: 1, md: 2 } : 2,
        }}
      >
        {right}
      </Box>
    </Grid>
  )
}
