import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material'
import { SectionContainer } from './base/SectionContainer'
import { SectionTitle } from './base/SectionTitle'

export function HowItWorksSection() {
  const theme = useTheme()

  // Diagrama SVG simples
  const diagram = (
    <svg width="100%" height="200" viewBox="0 0 600 200" style={{ marginBottom: '40px' }}>
      {/* Conexões */}
      <line
        x1="80"
        y1="100"
        x2="140"
        y2="100"
        stroke={theme.palette.text.primary}
        strokeWidth="2"
      />
      <line
        x1="220"
        y1="100"
        x2="280"
        y2="100"
        stroke={theme.palette.text.primary}
        strokeWidth="2"
      />
      <line
        x1="360"
        y1="100"
        x2="420"
        y2="100"
        stroke={theme.palette.text.primary}
        strokeWidth="2"
      />
      <line
        x1="500"
        y1="100"
        x2="540"
        y2="100"
        stroke={theme.palette.text.primary}
        strokeWidth="2"
      />

      {/* Caixas */}
      {/* Celular */}
      <rect
        x="20"
        y="70"
        width="60"
        height="60"
        fill="transparent"
        stroke={theme.palette.primary.main}
        strokeWidth="2"
        rx="4"
      />
      <text x="50" y="105" textAnchor="middle" fill={theme.palette.text.primary} fontSize="12">
        Celular
      </text>

      {/* Bluetooth */}
      <rect
        x="150"
        y="70"
        width="60"
        height="60"
        fill="transparent"
        stroke={theme.palette.primary.main}
        strokeWidth="2"
        rx="4"
      />
      <text x="180" y="105" textAnchor="middle" fill={theme.palette.text.primary} fontSize="12">
        Bluetooth
      </text>

      {/* MPU5 */}
      <rect
        x="290"
        y="70"
        width="60"
        height="60"
        fill="transparent"
        stroke={theme.palette.primary.main}
        strokeWidth="2"
        rx="4"
      />
      <text x="320" y="105" textAnchor="middle" fill={theme.palette.text.primary} fontSize="12">
        MPU5
      </text>

      {/* LoRa Mesh */}
      <rect
        x="430"
        y="70"
        width="60"
        height="60"
        fill="transparent"
        stroke={theme.palette.primary.main}
        strokeWidth="2"
        rx="4"
      />
      <text x="460" y="105" textAnchor="middle" fill={theme.palette.text.primary} fontSize="12">
        LoRa Mesh
      </text>

      {/* Time */}
      <rect
        x="540"
        y="70"
        width="50"
        height="60"
        fill="transparent"
        stroke={theme.palette.primary.main}
        strokeWidth="2"
        rx="4"
      />
      <text x="565" y="105" textAnchor="middle" fill={theme.palette.text.primary} fontSize="12">
        Time
      </text>
    </svg>
  )

  const steps = [
    {
      title: 'Dispositivo Local',
      description: 'Jogador usa celular com app Meshtastic para enviar mensagens.',
    },
    {
      title: 'Conexão Mesh',
      description: 'MPU5 relê a mensagem via LoRa para outros dispositivos na rede.',
    },
    {
      title: 'Comunicação Descentralizada',
      description: 'Cada nó amplia o alcance sem dependência de servidor central.',
    },
  ]

  return (
    <SectionContainer id="como-funciona">
      <SectionTitle
        label="COMO FUNCIONA"
        title="Fluxo de Comunicação"
        description="Entenda a arquitetura da rede mesh LoRa"
      />

      {/* Diagrama */}
      <Box sx={{ my: 4 }}>{diagram}</Box>

      {/* Grid 3 colunas */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        {steps.map((step, idx) => (
          <Box key={idx}>
            <Typography
              sx={{
                fontFamily: 'Chakra Petch, sans-serif',
                fontWeight: 600,
                fontSize: '18px',
                mb: 1,
              }}
            >
              {step.title}
            </Typography>
            <Typography sx={{ fontSize: '15px', color: 'text.secondary' }}>
              {step.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </SectionContainer>
  )
}
