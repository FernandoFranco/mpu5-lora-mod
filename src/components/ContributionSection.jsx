import { Box, Container, Typography, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ContributionCard from './ContributionCard'
import HandshakeIcon from '../icons/Handshake'
import PixIcon from '../icons/Pix'
import GitHubIconCustom from '../icons/GitHub'

export default function ContributionSection() {
  const theme = useTheme()
  return (
    <Box id="contribute" sx={{ py: 12, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box sx={{ color: theme.palette.primary.main, display: 'flex' }}>
            <HandshakeIcon />
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            Como contribuir?
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ mb: 8, color: theme.palette.text.secondary, maxWidth: 600 }}
        >
          Este projeto é mantido por pessoas como você. Sua contribuição ajuda a manter o projeto
          vivo, com melhorias, novos recursos e suporte para todos.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ContributionCard
              icon={PixIcon}
              title="Pix"
              description="Se preferir, você pode contribuir via Pix. Qualquer valor já ajuda muito!"
              buttonLabel="Ver chave Pix"
              buttonHref="#"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContributionCard
              icon={GitHubIconCustom}
              title="GitHub"
              description="Você também pode contribuir diretamente no repositório:"
              buttonLabel="Acessar repositório"
              buttonHref="https://github.com"
              items={['Reportando bugs', 'Sugerindo melhorias', 'Enviando pull requests']}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
