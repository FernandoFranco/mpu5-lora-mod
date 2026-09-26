import { Box, Container, Typography, Grid, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import STLCard from './STLCard'
import BoxIcon from '../icons/Box'
import FileDownloadIcon from '@mui/icons-material/FileDownload'

const stlFiles = [
  { id: 'case', name: 'Case Principal', image: '/images/stl/case-principal.jpg', downloadUrl: '/stl/case-principal.stl' },
  { id: 'latch', name: 'Tampa Traseira', image: '/images/stl/tampa-traseira.jpg', downloadUrl: '/stl/tampa-traseira.stl' },
  { id: 'support-heltec', name: 'Suporte Healtec v4', image: '/images/stl/support-heltec.jpg', downloadUrl: '/stl/support-heltec.stl' },
  { id: 'support-battery', name: 'Suporte Bateria', image: '/images/stl/support-battery.jpg', downloadUrl: '/stl/support-battery.stl' },
  { id: 'antenna-mount', name: 'Antenna Mount', image: '/images/stl/antenna-mount.jpg', downloadUrl: '/stl/antenna-mount.stl' },
  { id: 'clip', name: 'Clip de Fixação', image: '/images/stl/clip.jpg', downloadUrl: '/stl/clip.stl' },
  { id: 'details', name: 'Botões e Detalhes', image: '/images/stl/details.jpg', downloadUrl: '/stl/details.stl' },
  { id: 'vista-explodida', name: 'Vista Explodida', image: '/images/stl/vista-explodida.jpg', downloadUrl: '/stl/vista-explodida.stl' },
]

export default function STLGrid() {
  const theme = useTheme()
  return (
    <Box id="stl" sx={{ py: 12, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box sx={{ color: theme.palette.primary.main, display: 'flex' }}>
            <BoxIcon />
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            Arquivos STL
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mb: 6, color: theme.palette.text.secondary, maxWidth: 600 }}>
          Aqui você encontra todos os arquivos para impressão 3D das peças do projeto. Os arquivos estão otimizados por partes e já incluem pré-visualizações em 3D para facilitar a sua montagem.
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {stlFiles.map((stl) => (
            <Grid item xs={12} sm={6} md={3} key={stl.id}>
              <STLCard {...stl} />
            </Grid>
          ))}
        </Grid>

        <Button
          variant="contained"
          color="primary"
          startIcon={<FileDownloadIcon />}
          sx={{ textTransform: 'none', fontWeight: 600 }}
        >
          ⬇ Baixar todos os STL
        </Button>
      </Container>
    </Box>
  )
}
