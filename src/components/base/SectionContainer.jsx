import { Container, Box } from '@mui/material'
import { useTheme } from '@mui/material'

export function SectionContainer({
  children,
  id,
  alt = false,
  borderTop = false,
  borderBottom = false,
  py = 6,
}) {
  const theme = useTheme()

  return (
    <Box
      id={id}
      sx={{
        backgroundColor: alt ? '#121510' : 'background.default',
        borderTop: borderTop
          ? `1px solid ${theme.palette.mode === 'dark' ? '#1F241C' : '#e0e0e0'}`
          : 'none',
        borderBottom: borderBottom
          ? `1px solid ${theme.palette.mode === 'dark' ? '#1F241C' : '#e0e0e0'}`
          : 'none',
        py: py,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>
        {children}
      </Container>
    </Box>
  )
}
