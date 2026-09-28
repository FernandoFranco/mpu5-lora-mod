import { FC, ReactNode } from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material'
import { ExternalLink, SectionContainer, SectionTitle } from '@/components/base'
import { externalLinks } from '@/data'
import { Mpu5Icon, NetworkIcon, Phone } from '@/icons'

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

  const flowLink = (label: string, accented = false): ReactNode => {
    const lineColor = accented ? theme.palette.primary.main : isDark ? '#6F7565' : '#bbb'

    const labelStyle = {
      fontFamily: 'IBM Plex Mono, monospace',
      fontSize: '12px',
      letterSpacing: '0.08em',
      color: accented ? 'primary.main' : 'text.secondary',
      whiteSpace: 'nowrap' as const,
    }

    const verticalDash = (
      <Box
        sx={{
          width: 2,
          height: 20,
          backgroundImage: `repeating-linear-gradient(180deg, ${lineColor} 0 6px, transparent 6px 12px)`,
        }}
      />
    )

    return (
      <Box
        sx={{
          flexGrow: { xs: 0, md: 1 },
          px: { xs: 0, md: 1.5 },
          minWidth: { xs: 'auto', md: 60 },
        }}
      >
        {/* Desktop: label above a full-width horizontal line */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography sx={labelStyle}>{label}</Typography>
          <Box
            sx={{
              width: '100%',
              height: 2,
              backgroundImage: `repeating-linear-gradient(90deg, ${lineColor} 0 6px, transparent 6px 12px)`,
            }}
          />
        </Box>

        {/* Mobile: a continuous vertical line, label breaking it in the middle */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            alignItems: 'center',
            py: 1,
          }}
        >
          {verticalDash}
          <Typography sx={{ ...labelStyle, my: 0.5 }}>{label}</Typography>
          {verticalDash}
        </Box>
      </Box>
    )
  }

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
      description: 'O resto do time recebe no celular, acompanhando tudo pelos apps.',
    },
  ]

  return (
    <SectionContainer id="como-funciona" alt>
      <SectionTitle
        label="03 — COMO FUNCIONA"
        title="Celular na mão, rádio no loadout."
        description="O celular é a interface; a MPU5 é o nó mesh. Entre os nós, o LoRa leva mensagens por longas distâncias com baixíssimo consumo de energia."
        maxWidth="680px"
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 0,
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
          <Mpu5Icon size="lg" />,
          'MPU5 MESH',
          'Placa LoRa e bateria escondidas dentro da réplica. A antena 915 MHz fica por fora, no lugar da antena real.',
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
