import { Box, Container, Typography, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FeatureCard from './FeatureCard'
import LocationIcon from '../icons/Location'
import ChatIcon from '../icons/Chat'
import NetworkIcon from '../icons/Network'
import BatteryIcon from '../icons/Battery'

const features = [
  { icon: LocationIcon, title: 'Localização de equipe', description: 'Rastreie a posição do seu time em tempo real sem GPS.' },
  { icon: ChatIcon, title: 'Mensagens de texto', description: 'Comunique-se offline com mensagens de texto.' },
  { icon: NetworkIcon, title: 'Rede mesh offline', description: 'Funciona com comunicação mesh offline.' },
  { icon: BatteryIcon, title: 'Funciona com baterias comuns', description: 'Use baterias padrão, sem dependência de marca.' },
]

export default function AboutSection() {
  const theme = useTheme()
  return (
    <Box id="about" sx={{ py: 12, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
          O que é o MPU5 LoRa Mod?
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 8, color: theme.palette.text.secondary, maxWidth: 600, mx: 'auto' }}>
          Um projeto open source que transforma sua réplica MPU5 fake em um dispositivo funcional de comunicação para airsoft, usando Meshtastic e LoRa.
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>

        <Box component="img" src="/images/about.jpg" alt="MPU5" sx={{ width: '100%', borderRadius: 2, maxHeight: 400, objectFit: 'cover' }} />
      </Container>
    </Box>
  )
}
