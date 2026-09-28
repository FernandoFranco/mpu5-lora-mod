import { FC, ReactNode } from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material'
import { ExternalLink, SectionContainer, SectionTitle } from '@/components/base'
import { externalLinks } from '@/data'
import { NetworkIcon, Phone, RadioDevice } from '@/icons'

export const HowItWorksSection: FC = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const flowNode = (
    icon: ReactNode,
    title: string,
    description: ReactNode,
    accented = false
  ): ReactNode => (
    <Box
      sx={{
        width: { xs: '100%', md: accented ? 290 : 250 },
        padding: 3,
        backgroundColor: accented
          ? isDark
            ? '#2A1B0E'
            : 'rgba(255,138,51,0.08)'
          : 'background.default',
        border: `1px solid ${accented ? theme.palette.primary.main : isDark ? '#2C3327' : '#e0e0e0'}`,
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
      }}
    >
      <Box sx={{ color: accented ? 'primary.main' : 'text.primary' }}>{icon}</Box>
      <Typography
        sx={{ fontFamily: 'Chakra Petch, sans-serif', fontWeight: 600, fontSize: '19px' }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: '14px',
          lineHeight: 1.55,
          color: accented ? 'text.primary' : 'text.secondary',
        }}
      >
        {description}
      </Typography>
    </Box>
  )

  const flowLink = (label: string, accented = false): ReactNode => (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        px: 1.5,
        minWidth: 60,
      }}
    >
      <Typography
        sx={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '12px',
          letterSpacing: '0.08em',
          color: accented ? 'primary.main' : 'text.secondary',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </Typography>
      <Box
        sx={{
          width: '100%',
          height: 2,
          backgroundImage: `repeating-linear-gradient(90deg, ${
            accented ? theme.palette.primary.main : isDark ? '#6F7565' : '#bbb'
          } 0 6px, transparent 6px 12px)`,
        }}
      />
    </Box>
  )

  const steps = [
    {
      letter: 'A',
      description: 'Você digita no app. O celular entrega a mensagem ao rádio pelo Bluetooth.',
    },
    {
      letter: 'B',
      description: 'O rádio transmite em LoRa. Cada nó que ouve retransmite, estendendo o alcance.',
    },
    {
      letter: 'C',
      description: 'O display OLED mostra mensagens e status mesmo com o celular no bolso.',
    },
  ]

  return (
    <SectionContainer id="como-funciona" alt>
      <SectionTitle
        label="03 — COMO FUNCIONA"
        title="Celular na mão, rádio no colete."
        description="O celular é a interface; a MPU5 é o rádio. Entre os rádios, o LoRa leva mensagens por longas distâncias com consumo muito baixo."
        maxWidth="680px"
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 3, md: 0 },
          mb: 7,
        }}
      >
        {flowNode(
          <Phone size="lg" />,
          'Seu celular',
          <>
            Apps <ExternalLink href={externalLinks.meshtasticDownloads}>Meshtastic</ExternalLink>,{' '}
            <ExternalLink href={externalLinks.atak}>ATAK</ExternalLink> ou{' '}
            <ExternalLink href={externalLinks.itak}>iTAK</ExternalLink>: chat, mapa, configurações
            do nó.
          </>
        )}
        {flowLink('BLUETOOTH')}
        {flowNode(
          <RadioDevice size="lg" />,
          'MPU5 MESH',
          'Placa LoRa + bateria + antena 915 MHz dentro da réplica.',
          true
        )}
        {flowLink('LoRa MESH', true)}
        {flowNode(
          <NetworkIcon size="lg" />,
          'O resto do time',
          <>
            Qualquer nó <ExternalLink href={externalLinks.meshtastic}>Meshtastic</ExternalLink> no
            mesmo canal, MPU5 ou não.
          </>
        )}
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        {steps.map(step => (
          <Box key={step.letter} sx={{ display: 'flex', gap: 1.75, alignItems: 'flex-start' }}>
            <Typography
              sx={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '13px',
                color: 'primary.main',
                pt: 0.375,
              }}
            >
              {step.letter}
            </Typography>
            <Typography sx={{ fontSize: '15px', lineHeight: 1.6, color: 'text.secondary' }}>
              {step.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </SectionContainer>
  )
}
