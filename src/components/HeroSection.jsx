import { Box, Button, Container, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import LoRaIcon from '../icons/LoRa'
import MeshtasticIcon from '../icons/Meshtastic'
import BoxIcon from '../icons/Box'
import ChipIcon from '../icons/Chip'
import DownloadIcon from '../icons/Download'

export default function HeroSection() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Global animations for SVG */}
      <style>{`
        @keyframes ping { 0% { transform: scale(0.4); opacity: 0.9; } 100% { transform: scale(2.4); opacity: 0; } }
        @keyframes dash { to { stroke-dashoffset: -40; } }
        @keyframes blink { 0%, 60% { opacity: 1; } 61%, 100% { opacity: 0.25; } }
        .ping { transform-box: fill-box; transform-origin: center; animation: ping 2.4s ease-out infinite; }
        .ping2 { transform-box: fill-box; transform-origin: center; animation: ping 2.4s ease-out 1.2s infinite; }
        .flow { animation: dash 1.6s linear infinite; }
        .blink { animation: blink 1.4s steps(1) infinite; }
      `}</style>

      {/* Dotted background grid */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${isDark ? '#252B21' : '#E8E8E8'} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          opacity: isDark ? 0.5 : 0.15,
          zIndex: 0,
        }}
      />

      {/* Hero content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 12 }}>
        <Box
          sx={{
            display: 'flex',
            gap: 6,
            alignItems: 'center',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
          }}
        >
          {/* Left column: text */}
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' }, minWidth: 0 }}>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  padding: '6px 12px',
                  borderRadius: '999px',
                  border: `1px solid ${isDark ? '#343C2E' : '#E0E0E0'}`,
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '12px',
                  letterSpacing: '0.06em',
                  color: isDark ? '#BFC2B2' : '#666666',
                }}
              >
                <Box
                  sx={{
                    display: 'inline-block',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#8FD65A',
                    mr: 0.5,
                  }}
                />
                OPEN SOURCE HARDWARE · v[0.1]
              </Box>
            </Box>

            <Typography
              sx={{
                fontFamily: '"Chakra Petch", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.1,
                mb: 2,
                color: theme.palette.text.primary,
              }}
            >
              Sua réplica MPU5 agora{' '}
              <span style={{ color: theme.palette.primary.main }}>comunica de verdade.</span>
            </Typography>

            <Typography
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.65,
                color: isDark ? '#BFC2B2' : '#666666',
                mb: 4,
                maxWidth: 540,
              }}
            >
              Arquivos 3D e guia completo para transformar a MPU5 fake em um rádio mesh funcional
              para airsoft — com Heltec, LoRa e Meshtastic. Mensagens, posição do time e comunicação
              sem internet e sem mensalidade.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  const element = document.querySelector('#arquivos')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                startIcon={<DownloadIcon size="md" />}
                sx={{
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  backgroundColor: theme.palette.primary.main,
                  color: isDark ? '#140A02' : '#FFFFFF',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: isDark ? '#FF9750' : '#E67E22',
                  },
                }}
              >
                Baixar arquivos STL
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  const element = document.querySelector('#apoie')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                sx={{
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.text.primary,
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: isDark
                      ? 'rgba(255, 138, 51, 0.1)'
                      : 'rgba(255, 138, 51, 0.05)',
                  },
                }}
              >
                Como Contribuir
              </Button>
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '13px',
                color: isDark ? '#A3A796' : '#666666',
              }}
            >
              <span>Licença [LICENÇA]</span>
              <span>·</span>
              <span>Firmware Meshtastic</span>
              <span>·</span>
              <span>PT-BR</span>
            </Box>
          </Box>

          {/* Right column: animated radio SVG */}
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' }, minWidth: 0 }}>
            <Box
              sx={{
                position: 'relative',
                height: 450,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 580 560"
                fill="none"
                style={{ maxHeight: 450 }}
              >
                {/* Mesh network lines */}
                <g
                  stroke={isDark ? '#3A4333' : '#D0D0D0'}
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                  className="flow"
                >
                  <line x1="290" y1="280" x2="80" y2="140" />
                  <line x1="290" y1="280" x2="520" y2="120" />
                  <line x1="290" y1="280" x2="530" y2="460" />
                  <line x1="80" y1="140" x2="520" y2="120" />
                  <line x1="530" y1="460" x2="520" y2="120" />
                </g>

                {/* Network nodes */}
                <g
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="12"
                  fill={isDark ? '#BFC2B2' : '#333333'}
                >
                  <circle cx="80" cy="140" r="22" fill="#8FD65A" opacity="0.25" className="ping" />
                  <circle cx="80" cy="140" r="7" fill="#8FD65A" />
                  <text x="98" y="134">
                    ALFA-1
                  </text>
                  <text x="98" y="150" fill={isDark ? '#6F7565' : '#999999'} fontSize="11">
                    −92 dBm
                  </text>

                  <circle
                    cx="520"
                    cy="120"
                    r="22"
                    fill="#8FD65A"
                    opacity="0.25"
                    className="ping2"
                  />
                  <circle cx="520" cy="120" r="7" fill="#8FD65A" />
                  <text x="448" y="100">
                    ALFA-3
                  </text>

                  <circle cx="530" cy="460" r="22" fill="#8FD65A" opacity="0.25" className="ping" />
                  <circle cx="530" cy="460" r="7" fill="#8FD65A" />
                  <text x="462" y="492">
                    BRAVO-1
                  </text>
                </g>

                {/* Radio body */}
                {/* Antenna */}
                <rect
                  x="318"
                  y="70"
                  width="16"
                  height="130"
                  rx="8"
                  fill={isDark ? '#1C201A' : '#F5F5F5'}
                  stroke={isDark ? '#4A5442' : '#CCCCCC'}
                  strokeWidth="1.5"
                />
                <circle
                  cx="326"
                  cy="76"
                  r="18"
                  stroke={theme.palette.primary.main}
                  strokeWidth="2"
                  className="ping"
                />
                <circle
                  cx="326"
                  cy="76"
                  r="18"
                  stroke={theme.palette.primary.main}
                  strokeWidth="2"
                  className="ping2"
                />
                <rect
                  x="314"
                  y="190"
                  width="24"
                  height="22"
                  rx="3"
                  fill={isDark ? '#2B3127' : '#E8E8E8'}
                  stroke={isDark ? '#4A5442' : '#CCCCCC'}
                  strokeWidth="1.5"
                />

                {/* Main body */}
                <rect
                  x="200"
                  y="206"
                  width="190"
                  height="330"
                  rx="20"
                  fill={isDark ? '#252A21' : '#FAFAFA'}
                  stroke={isDark ? '#4A5442' : '#CCCCCC'}
                  strokeWidth="2"
                />
                <rect
                  x="212"
                  y="218"
                  width="166"
                  height="306"
                  rx="14"
                  fill={isDark ? '#2C3227' : '#F0F0F0'}
                />
                <rect
                  x="236"
                  y="208"
                  width="36"
                  height="16"
                  rx="4"
                  fill={isDark ? '#3A4333' : '#E0E0E0'}
                />
                <circle
                  cx="254"
                  cy="200"
                  r="12"
                  fill={isDark ? '#1C201A' : '#F5F5F5'}
                  stroke={isDark ? '#4A5442' : '#CCCCCC'}
                  strokeWidth="1.5"
                />

                {/* OLED display */}
                <rect
                  x="232"
                  y="244"
                  width="126"
                  height="78"
                  rx="6"
                  fill={isDark ? '#07100A' : '#0F0F0F'}
                  stroke={isDark ? '#4A5442' : '#333333'}
                  strokeWidth="1.5"
                />
                <g fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#8FD65A">
                  <text x="244" y="266">
                    MESH ●4 NÓS
                  </text>
                  <text x="244" y="284">
                    ALFA-2
                  </text>
                  <text x="244" y="302" className="blink">
                    &gt; CONTATO N_
                  </text>
                  <text x="244" y="316" fill="#4F7A34" fontSize="9">
                    BAT 87% SNR 9.5
                  </text>
                </g>

                {/* Grip ribs */}
                <g stroke={isDark ? '#3A4333' : '#CCCCCC'} strokeWidth="3" strokeLinecap="round">
                  <line x1="236" y1="360" x2="354" y2="360" />
                  <line x1="236" y1="376" x2="354" y2="376" />
                  <line x1="236" y1="392" x2="354" y2="392" />
                  <line x1="236" y1="408" x2="354" y2="408" />
                  <line x1="236" y1="424" x2="354" y2="424" />
                </g>

                {/* PTT button */}
                <rect
                  x="262"
                  y="454"
                  width="66"
                  height="44"
                  rx="10"
                  fill={theme.palette.primary.main}
                  opacity="0.9"
                />
                <text
                  x="295"
                  y="481"
                  textAnchor="middle"
                  fontFamily="Chakra Petch, sans-serif"
                  fontWeight="700"
                  fontSize="13"
                  fill="#140A02"
                >
                  PTT
                </text>

                {/* Side volume rocker */}
                <rect
                  x="190"
                  y="330"
                  width="10"
                  height="70"
                  rx="3"
                  fill={isDark ? '#3A4333' : '#CCCCCC'}
                />
              </svg>

              {/* Floating chat card */}
              <Box
                sx={{
                  position: 'absolute',
                  left: 20,
                  bottom: 18,
                  width: 260,
                  padding: 2,
                  background: theme.palette.background.paper,
                  border: `1px solid ${isDark ? '#343C2E' : '#E0E0E0'}`,
                  borderRadius: 2,
                  boxShadow: isDark
                    ? '0 24px 48px rgba(0,0,0,0.45)'
                    : '0 8px 16px rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.25,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '11px',
                    color: isDark ? '#A3A796' : '#999999',
                    letterSpacing: '0.06em',
                  }}
                >
                  <span>CANAL · SQUAD-A</span>
                  <span style={{ color: '#8FD65A' }}>● AES-256</span>
                </Box>

                <Box
                  sx={{
                    padding: 1,
                    background: isDark ? '#1F241C' : '#F5F5F5',
                    borderRadius: 1,
                    fontSize: '13px',
                    lineHeight: 1.5,
                    color: isDark ? '#E9E6DA' : '#333333',
                  }}
                >
                  <b style={{ color: '#8FD65A', fontWeight: 600 }}>ALFA-1</b> Posicionado no morro,
                  visão do objetivo.
                </Box>

                <Box
                  sx={{
                    padding: 1,
                    background: isDark ? '#3A2412' : '#FFE8D6',
                    borderRadius: 1,
                    alignSelf: 'flex-end',
                    fontSize: '13px',
                    lineHeight: 1.5,
                    color: isDark ? '#F2D9C2' : '#333333',
                  }}
                >
                  Recebido. Avançando pelo flanco.
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Spec strip: 4 features */}
      <Box
        sx={{
          background: isDark ? '#121510' : '#F8F8F8',
          borderTop: `1px solid ${isDark ? '#1F241C' : '#E0E0E0'}`,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg" sx={{ py: 4.5 }}>
          <Box sx={{ display: 'flex', gap: 4, width: '100%' }}>
            {[
              { icon: ChipIcon, label: 'Heltec', desc: 'ESP32-S3 + LoRa SX1262' },
              { icon: LoRaIcon, label: 'LoRa 915 MHz', desc: 'Faixa ISM usada no Brasil' },
              {
                icon: MeshtasticIcon,
                label: 'Meshtastic',
                desc: 'Firmware aberto, app Android e iOS',
              },
              { icon: BoxIcon, label: '6 peças STL', desc: 'Impressão em PETG ou ASA' },
            ].map((item, idx) => {
              const IconComponent = item.icon
              return (
                <Box
                  key={idx}
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    alignItems: 'center',
                    paddingLeft: idx > 0 ? 3 : 0,
                    borderLeft: idx > 0 ? `1px solid ${isDark ? '#2C3327' : '#D0D0D0'}` : 'none',
                    textAlign: 'center',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                      mb: 0.5,
                    }}
                  >
                    <Box sx={{ color: theme.palette.primary.main, display: 'flex', lineHeight: 0 }}>
                      <IconComponent size="lg" />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: '"Chakra Petch", sans-serif',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        color: theme.palette.text.primary,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              )
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
