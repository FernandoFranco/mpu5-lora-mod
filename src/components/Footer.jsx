import { Box, Container, Typography, Link, useTheme } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LoRaIcon from '../icons/LoRa'

export default function Footer() {
  const theme = useTheme()
  return (
    <Box component="footer" sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#0A0A0A' : '#FFFFFF', color: theme.palette.text.primary, py: 8, mt: 12, borderTop: `1px solid ${theme.palette.mode === 'dark' ? '#1A1A1A' : '#EEEEEE'}` }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' }, gap: 4, mb: 6 }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box sx={{ color: theme.palette.primary.main, display: 'flex' }}>
                <LoRaIcon />
              </Box>
              <Box>
                <Box sx={{ fontSize: '0.85rem', fontWeight: 700, lineHeight: 1 }}>MPU5 REAL</Box>
                <Box sx={{ fontSize: '0.7rem', color: theme.palette.text.secondary, lineHeight: 1 }}>LoRa • Meshtastic • Airsoft</Box>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
              Transforme seu MPU5 Fake em um dispositivo de comunicação real para Airsoft.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1.5 }}>Open Source é liberdade!</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="https://github.com" target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: theme.palette.text.secondary, textDecoration: 'none', fontSize: '0.9rem', '&:hover': { color: theme.palette.primary.main } }}>
                <GitHubIcon fontSize="small" /> GitHub
              </Link>
              <Link href="https://discord.gg" target="_blank" rel="noopener" sx={{ color: theme.palette.text.secondary, textDecoration: 'none', fontSize: '0.9rem', '&:hover': { color: theme.palette.primary.main } }}>
                Discord
              </Link>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1.5 }}>Legal</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" sx={{ color: theme.palette.text.secondary, textDecoration: 'none', fontSize: '0.9rem', '&:hover': { color: theme.palette.primary.main } }}>
                Termos de uso
              </Link>
              <Link href="#" sx={{ color: theme.palette.text.secondary, textDecoration: 'none', fontSize: '0.9rem', '&:hover': { color: theme.palette.primary.main } }}>
                Licença (MIT)
              </Link>
              <Link href="#" sx={{ color: theme.palette.text.secondary, textDecoration: 'none', fontSize: '0.9rem', '&:hover': { color: theme.palette.primary.main } }}>
                Contato
              </Link>
            </Box>
          </Box>
        </Box>

        <Box sx={{ borderTop: `1px solid ${theme.palette.mode === 'dark' ? '#1A1A1A' : '#EEEEEE'}`, pt: 3 }}>
          <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
            © 2026 MPU5 LoRa Mod — Licença MIT. Não comercial — uso pessoal para airsoft liberado. Para uso comercial, entre em contato.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
