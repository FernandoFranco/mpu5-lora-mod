import { FC } from 'react'
import { Box, Container, Typography, Link, useTheme } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { GitHubIconCustom, LoRaIcon } from '@/icons'
import type { FooterProps } from '@/types'

export const Footer: FC<FooterProps> = ({ onOpenCookiePreferences }) => {
  const theme = useTheme()
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.mode === 'dark' ? '#0A0A0A' : '#FFFFFF',
        color: theme.palette.text.primary,
        py: 8,
        mt: 12,
        borderTop: `1px solid ${theme.palette.mode === 'dark' ? '#1A1A1A' : '#EEEEEE'}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' },
            gap: 4,
            mb: 6,
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box sx={{ color: theme.palette.primary.main, display: 'flex', lineHeight: 0 }}>
                <LoRaIcon size="md" />
              </Box>
              <Box>
                <Box sx={{ fontSize: '0.85rem', fontWeight: 700, lineHeight: 1 }}>
                  MPU5 LoRa Mod
                </Box>
                <Box
                  sx={{ fontSize: '0.7rem', color: theme.palette.text.secondary, lineHeight: 1 }}
                >
                  LoRa • Meshtastic • Airsoft
                </Box>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
              Transforme seu MPU5 Fake em um dispositivo de comunicação real para Airsoft.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1.5 }}>
              Open Source é liberdade!
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.75,
                  color: theme.palette.text.secondary,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                <Box sx={{ display: 'flex', lineHeight: 0 }}>
                  <GitHubIconCustom size="md" />
                </Box>
                GitHub
              </Link>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1.5 }}>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                component={RouterLink}
                to="/terms"
                sx={{
                  color: theme.palette.text.secondary,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                Termos de uso
              </Link>
              <Link
                component={RouterLink}
                to="/privacy"
                sx={{
                  color: theme.palette.text.secondary,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                Privacidade
              </Link>
              <Link
                href="https://github.com/FernandoHAFranco/mpu5/blob/main/LICENSE"
                target="_blank"
                rel="noopener"
                sx={{
                  color: theme.palette.text.secondary,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                Licença (CC BY-NC-SA 4.0)
              </Link>
              <Link
                href="https://github.com/FernandoHAFranco/mpu5/issues/new"
                target="_blank"
                rel="noopener"
                sx={{
                  color: theme.palette.text.secondary,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                Contato
              </Link>
              <Link
                component="button"
                onClick={onOpenCookiePreferences}
                sx={{
                  color: theme.palette.text.secondary,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  textAlign: 'left',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                Preferências de cookies
              </Link>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: `1px solid ${theme.palette.mode === 'dark' ? '#1A1A1A' : '#EEEEEE'}`,
            pt: 3,
          }}
        >
          <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
            Licença CC BY-NC-SA 4.0 · {new Date().getFullYear()} Fernando Henrique Alves Franco. Uso
            pessoal e não comercial liberado. Para uso comercial, entre em contato.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
