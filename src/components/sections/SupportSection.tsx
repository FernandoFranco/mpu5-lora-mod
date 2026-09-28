import { FC, useState } from 'react'
import { Box, Button, Grid, Link, Typography } from '@mui/material'
import { useTheme } from '@mui/material'
import { SectionContainer, SectionTitle } from '@/components/base'
import { GitHubIconCustom, PixIcon, Warning } from '@/icons'

export const SupportSection: FC = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const [copied, setCopied] = useState(false)

  const pixKey = 'atr.franco@gmail.com'

  const handleCopyPixKey = (): void => {
    navigator.clipboard.writeText(pixKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contributionWays = [
    { label: 'Issues:', description: 'relate problemas de encaixe ou impressão.' },
    { label: 'Remixes:', description: 'adaptações para outras réplicas e placas.' },
    { label: 'Fotos em campo:', description: 'mostre a sua montagem na comunidade.' },
  ]

  return (
    <SectionContainer id="apoie">
      <SectionTitle
        label="01 — APOIE O PROJETO"
        title="Gratuito para sempre. Mantido por quem usa."
        description="O MPU5 LoRa Mod não tem patrocínio nem fins lucrativos. Qualquer valor ajuda: a doação cobre filamento, placas para testes e o tempo dedicado às próximas versões."
        maxWidth="700px"
      />

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Pix */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              height: '100%',
              padding: 3.5,
              backgroundColor: 'background.paper',
              border: `1px solid ${theme.palette.primary.main}`,
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 2.5,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PixIcon color={theme.palette.primary.main} size="md" />
                <Typography
                  sx={{ fontFamily: 'Chakra Petch, sans-serif', fontWeight: 700, fontSize: '24px' }}
                >
                  Pix
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  backgroundColor: isDark ? '#2A1B0E' : 'rgba(255,138,51,0.1)',
                  color: 'primary.main',
                }}
              >
                INSTANTÂNEO
              </Typography>
            </Box>

            <Typography sx={{ fontSize: '14px', lineHeight: 1.6, color: 'text.secondary' }}>
              Aponte a câmera do app do seu banco ou copie a chave abaixo.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, alignItems: 'stretch' }}>
              <Box
                sx={{
                  flexGrow: 1,
                  minWidth: 0,
                  px: 1.75,
                  height: 48,
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'background.default',
                  border: `1px solid ${isDark ? '#2C3327' : '#e0e0e0'}`,
                  borderRadius: '10px',
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '13px',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {pixKey}
              </Box>
              <Button
                onClick={handleCopyPixKey}
                variant="contained"
                sx={{
                  height: 48,
                  px: 2,
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                  backgroundColor: 'primary.main',
                  color: isDark ? '#140A02' : '#FFFFFF',
                }}
              >
                {copied ? 'Copiado ✓' : 'Copiar'}
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* GitHub Sponsors */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              height: '100%',
              padding: 3.5,
              backgroundColor: 'background.paper',
              border: `1px solid ${isDark ? '#262C22' : '#e0e0e0'}`,
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 2.5,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography
                sx={{ fontFamily: 'Chakra Petch, sans-serif', fontWeight: 700, fontSize: '24px' }}
              >
                GitHub Sponsors
              </Typography>
              <GitHubIconCustom size="md" />
            </Box>

            <Typography sx={{ fontSize: '15px', lineHeight: 1.6, color: 'text.secondary' }}>
              Direto pelo GitHub.
            </Typography>

            <Button
              href="https://github.com/sponsors/your-user"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                mt: 'auto',
                height: 48,
                borderRadius: '10px',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '15px',
                borderColor: isDark ? '#3A4333' : '#c0c0c0',
                color: 'text.primary',
              }}
            >
              Fazer uma doação
            </Button>
          </Box>
        </Grid>

        {/* Contribua sem gastar */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              height: '100%',
              padding: 3.5,
              backgroundColor: 'background.paper',
              border: `1px solid ${isDark ? '#262C22' : '#e0e0e0'}`,
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 2.5,
            }}
          >
            <Typography
              sx={{ fontFamily: 'Chakra Petch, sans-serif', fontWeight: 700, fontSize: '24px' }}
            >
              Contribua sem gastar
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75, fontSize: '15px' }}>
              {contributionWays.map(way => (
                <Box key={way.label} sx={{ display: 'flex', gap: 1.5 }}>
                  <Typography
                    component="span"
                    sx={{ fontFamily: 'IBM Plex Mono, monospace', color: 'primary.main' }}
                  >
                    →
                  </Typography>
                  <Typography component="span" sx={{ lineHeight: 1.5 }}>
                    <Typography component="b" sx={{ fontWeight: 600 }}>
                      {way.label}
                    </Typography>{' '}
                    <Typography component="span" sx={{ color: 'text.secondary' }}>
                      {way.description}
                    </Typography>
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              href="https://github.com/your-user/mpu5/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                mt: 'auto',
                height: 48,
                borderRadius: '10px',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '15px',
                borderColor: isDark ? '#3A4333' : '#c0c0c0',
                color: 'text.primary',
              }}
            >
              Guia de contribuição
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Typography sx={{ fontSize: '14px', lineHeight: 1.6, color: 'text.secondary', mb: 4 }}>
        Toda doação, via Pix ou GitHub, pode entrar na lista pública de apoiadores em{' '}
        <Link
          href="https://github.com/your-user/mpu5/blob/main/SPONSORS.md"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'primary.main' }}
        >
          SPONSORS.md
        </Link>
        . Prefere não aparecer? É só avisar na hora de doar.
      </Typography>

      {/* Aviso de licença */}
      <Box
        sx={{
          display: 'flex',
          gap: 2.5,
          padding: 3,
          backgroundColor: isDark ? 'rgba(255,138,51,0.08)' : 'rgba(255,138,51,0.06)',
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: '16px',
        }}
      >
        <Box sx={{ color: 'primary.main', flexShrink: 0, mt: 0.5 }}>
          <Warning size="md" />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{ fontFamily: 'Chakra Petch, sans-serif', fontWeight: 600, fontSize: '18px' }}
          >
            Licença e uso comercial
          </Typography>
          <Typography sx={{ fontSize: '15px', lineHeight: 1.65, color: 'text.secondary' }}>
            Este projeto é distribuído sob a licença{' '}
            <Typography component="b" sx={{ fontWeight: 600, color: 'text.primary' }}>
              Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 (CC BY-NC-SA 4.0)
            </Typography>
            . Você pode montar, adaptar e compartilhar livremente (inclusive remixar para outras
            réplicas), desde que dê crédito ao autor original e mantenha a mesma licença.{' '}
            <Typography component="b" sx={{ fontWeight: 600, color: 'text.primary' }}>
              Vender peças, kits ou serviços baseados neste projeto sem autorização prévia não é
              permitido.
            </Typography>
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, mt: 0.5, flexWrap: 'wrap' }}>
            <Link
              href="https://github.com/your-user/mpu5/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontSize: '14px', fontWeight: 600, color: 'primary.main' }}
            >
              Ver LICENSE completo
            </Link>
            <Link
              href="https://github.com/your-user/mpu5/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontSize: '14px', fontWeight: 600, color: 'primary.main' }}
            >
              Quer usar comercialmente? Fale conosco
            </Link>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  )
}
