import { FC, useState } from 'react'
import { Box, Button, Grid, Typography, Card, CardContent, Stack, Divider } from '@mui/material'
import { useTheme } from '@mui/material'
import { SectionContainer, SectionTitle } from '@/components/base'

export const SupportSection: FC = () => {
  const theme = useTheme()
  const [copied, setCopied] = useState(false)

  const pixKey = 'seu@email.com'

  const handleCopyPixKey = (): void => {
    navigator.clipboard.writeText(pixKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const sponsorTiers = [
    { name: 'Supporters', amount: 'R$ 5/mês', perks: ['Acesso Discord privado'] },
    { name: 'Collaborators', amount: 'R$ 15/mês', perks: ['Acesso Discord', 'Shoutout mensal'] },
    {
      name: 'Maintainers',
      amount: 'R$ 50/mês',
      perks: ['Acesso Discord', 'Shoutout', 'Prioridade em feature requests'],
    },
  ]

  const contributionWays = [
    'Reportar bugs e issues',
    'Contribuir código no GitHub',
    'Compartilhar seus builds',
    'Fazer tutoriais e guias',
    'Traduzir para outros idiomas',
  ]

  return (
    <SectionContainer id="apoie">
      <SectionTitle
        label="APOIE"
        title="Sustente o Projeto"
        description="Ajude a manter o desenvolvimento do MPU5"
      />

      <Grid container spacing={3}>
        {/* Card Pix */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              height: '100%',
              border: `2px solid ${theme.palette.primary.main}`,
              backgroundColor: theme.palette.mode === 'dark' ? '#0a0a0a' : '#f9f9f9',
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontFamily: 'Chakra Petch', fontWeight: 600, fontSize: '18px', mb: 2 }}
              >
                Pix Rápido
              </Typography>

              {/* QR Placeholder */}
              <Box
                sx={{
                  width: '100%',
                  height: '150px',
                  backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#e0e0e0',
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Typography sx={{ fontSize: '12px', color: 'text.secondary' }}>
                  QR Code Placeholder
                </Typography>
              </Box>

              {/* Botão Copiar */}
              <Button
                fullWidth
                variant={copied ? 'contained' : 'outlined'}
                onClick={handleCopyPixKey}
                sx={{
                  backgroundColor: copied ? 'green' : undefined,
                  color: copied ? 'white' : undefined,
                }}
              >
                {copied ? '✓ Copiado!' : 'Copiar Chave Pix'}
              </Button>

              <Typography
                sx={{ fontSize: '12px', color: 'text.secondary', mt: 1, textAlign: 'center' }}
              >
                {pixKey}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card GitHub Sponsors */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography
                sx={{ fontFamily: 'Chakra Petch', fontWeight: 600, fontSize: '18px', mb: 2 }}
              >
                GitHub Sponsors
              </Typography>

              <Stack spacing={2}>
                {sponsorTiers.map((tier, idx) => (
                  <Box key={idx}>
                    <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>{tier.name}</Typography>
                    <Typography sx={{ fontSize: '13px', color: 'text.secondary', mb: 1 }}>
                      {tier.amount}
                    </Typography>
                    <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px' }}>
                      {tier.perks.map((perk, pi) => (
                        <li key={pi}>{perk}</li>
                      ))}
                    </ul>
                    {idx < sponsorTiers.length - 1 && <Divider sx={{ my: 2 }} />}
                  </Box>
                ))}
              </Stack>

              <Button fullWidth variant="contained" sx={{ mt: 2 }}>
                Virar Sponsor
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card Contribua Sem Gastar */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography
                sx={{ fontFamily: 'Chakra Petch', fontWeight: 600, fontSize: '18px', mb: 2 }}
              >
                Contribua sem Gastar
              </Typography>

              <Stack spacing={1.5}>
                {contributionWays.map((way, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography sx={{ fontSize: '18px' }}>→</Typography>
                    <Typography sx={{ fontSize: '14px' }}>{way}</Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </SectionContainer>
  )
}
