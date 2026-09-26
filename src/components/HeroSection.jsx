import { Box, Button, Container, Typography, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import LoRaIcon from '../icons/LoRa'
import MeshtasticIcon from '../icons/Meshtastic'
import ShieldIcon from '../icons/Shield'
import BoxIcon from '../icons/Box'

const badges = [
  { icon: LoRaIcon, label: 'Comunicação LoRa' },
  { icon: MeshtasticIcon, label: 'Meshtastic' },
  { icon: ShieldIcon, label: 'Design robusto' },
  { icon: BoxIcon, label: 'Arquivos STL' },
]

export default function HeroSection() {
  const theme = useTheme()

  return (
    <Box
      id="hero"
      sx={{
        py: 12,
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated mesh background SVG */}
      <Box sx={{ position: 'absolute', inset: 0, opacity: 0.15 }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          fill="none"
          style={{ position: 'absolute' }}
        >
          <defs>
            <style>{`
              @keyframes flow { to { stroke-dashoffset: -40; } }
              @keyframes ping { 0% { transform: scale(0.4); opacity: 0.9; } 100% { transform: scale(2.4); opacity: 0; } }
              .flow { animation: flow 1.6s linear infinite; }
              .ping { transform-box: fill-box; transform-origin: center; animation: ping 2.4s ease-out infinite; }
              .ping2 { animation: ping 2.4s ease-out 1.2s infinite; }
            `}</style>
          </defs>
          <g stroke="#FF8C00" strokeWidth="1.5" strokeDasharray="6 8" className="flow">
            <line x1="600" y1="300" x2="200" y2="150" />
            <line x1="600" y1="300" x2="1000" y2="120" />
            <line x1="600" y1="300" x2="1000" y2="480" />
            <line x1="200" y1="150" x2="1000" y2="120" />
            <line x1="1000" y1="480" x2="1000" y2="120" />
          </g>
          <g>
            <circle cx="200" cy="150" r="22" fill="#FF8C00" opacity="0.25" className="ping" />
            <circle cx="200" cy="150" r="7" fill="#FF8C00" />
            <circle cx="1000" cy="120" r="22" fill="#FF8C00" opacity="0.25" className="ping2" />
            <circle cx="1000" cy="120" r="7" fill="#FF8C00" />
            <circle cx="1000" cy="480" r="22" fill="#FF8C00" opacity="0.25" className="ping" />
            <circle cx="1000" cy="480" r="7" fill="#FF8C00" />
          </g>
        </svg>
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  border: `2px solid ${theme.palette.primary.main}`,
                  borderRadius: 1,
                  px: 2,
                  py: 1,
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    color: theme.palette.primary.main,
                  }}
                >
                  ▼
                </span>
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}
                >
                  PROJETO OPEN SOURCE
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="h2"
              sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}
            >
              MPU5 <span style={{ color: '#FF8C00' }}>Real</span>
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: theme.palette.text.secondary, mb: 4, fontSize: '1rem', fontWeight: 400 }}
            >
              Transforme seu MPU5 Fake em um dispositivo de comunicação real para Airsoft.
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.secondary, mb: 4, lineHeight: 1.6 }}
            >
              Este projeto oferece os arquivos de impressão 3D e o passo a passo para converter uma
              MPU5 Fake em um dispositivo funcional, utilizando o Healtec V4 e a comunicação LoRa
              via Meshtastic.
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 6 }}>
              {badges.map((badge, idx) => {
                const IconComponent = badge.icon
                return (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{ color: theme.palette.primary.main, display: 'flex' }}>
                      <IconComponent />
                    </Box>
                    <Typography variant="body2">{badge.label}</Typography>
                  </Box>
                )
              })}
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="primary"
                href="#stl"
                sx={{ fontWeight: 600, textTransform: 'none', fontSize: '0.95rem' }}
              >
                ⬇ Ver arquivos STL
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href="#assembly"
                sx={{ fontWeight: 600, textTransform: 'none', fontSize: '0.95rem' }}
              >
                Como funciona
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/hero.jpg"
              alt="MPU5 LoRa Mod"
              sx={{ width: '100%', borderRadius: 2, maxHeight: 450, objectFit: 'cover' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
