import { Box, Container, Typography, Grid, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import StepAccordion from './StepAccordion'
import FileDownloadIcon from '@mui/icons-material/FileDownload'

const steps = [
  { id: 'cortes', title: 'Cortes', content: 'Como preparar as peças para impressão e cortes' },
  {
    id: 'montagem',
    title: 'Montagem',
    content: 'Ordem correta para montar todas as peças do projeto.',
  },
  {
    id: 'config',
    title: 'Configuração',
    content: 'Instalação do Healtec v4, Meshtastic e testes de funcionamento.',
  },
]

export default function InstructionsSection() {
  const theme = useTheme()
  return (
    <Box id="assembly" sx={{ py: 12, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Instruções de Montagem
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 6, color: theme.palette.text.secondary, maxWidth: 600 }}
        >
          Passo a passo completo com imagens, cortes, medidas e dicas para facilitar sua montagem.
          As instruções são divididas em:
        </Typography>

        <Box sx={{ mb: 8 }}>
          <StepAccordion steps={steps} />
        </Box>

        <Button
          variant="outlined"
          color="primary"
          startIcon={<FileDownloadIcon />}
          sx={{ textTransform: 'none', fontWeight: 600 }}
        >
          ⬇ Ver instruções completas
        </Button>
      </Container>
    </Box>
  )
}
