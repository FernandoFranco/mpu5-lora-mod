import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import {
  ExternalLink,
  FeatureGrid,
  SectionContainer,
  SectionTitle,
  TwoColumnSection,
} from '@/components/base'
import { externalLinks } from '@/data'
import { Lock, MapPin, MeshChat, Mpu5Icon, Remix, WifiOff } from '@/icons'

export const AboutSection: FC = () => {
  const features = [
    {
      icon: MeshChat,
      title: 'Chat em rede mesh',
      description:
        'Mensagens de texto por canal do time ou diretas, retransmitidas de rádio em rádio até o destino.',
    },
    {
      icon: MapPin,
      title: 'Posição do time no mapa',
      description:
        'Com GPS no celular ou módulo opcional, cada nó compartilha sua posição no mapa do app.',
    },
    {
      icon: WifiOff,
      title: 'Zero infraestrutura',
      description: 'Funciona onde a rede não chega, sem depender de operadora, Wi-Fi ou internet.',
    },
    {
      icon: Lock,
      title: 'Canais criptografados',
      description:
        'Cada time usa seu canal com chave própria (AES-256). O time adversário não lê suas mensagens.',
    },
    {
      icon: Mpu5Icon,
      title: 'Visual preservado',
      description: 'As peças ficam escondidas dentro da carcaça. Por fora, continua sendo o MPU5.',
    },
    {
      icon: Remix,
      title: 'Aberto e remixável',
      description:
        'Arquivos STL disponíveis para adaptar em outra réplica, outra placa ou outro colete.',
    },
  ]

  const leftContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.25 }}>
      <Typography sx={{ fontSize: '17px', lineHeight: 1.7, color: 'text.secondary' }}>
        A réplica de MPU5 é um dos acessórios mais populares do airsoft milsim, mas é só uma casca.
        Este projeto aproveita esse volume vazio para instalar uma{' '}
        <Typography component="b" sx={{ fontWeight: 600, color: 'text.primary' }}>
          placa LoRa
        </Typography>{' '}
        rodando{' '}
        <Typography component="b" sx={{ fontWeight: 600 }}>
          <ExternalLink href={externalLinks.meshtastic}>Meshtastic</ExternalLink>
        </Typography>
        , transformando o visual em função.
      </Typography>
      <Typography sx={{ fontSize: '17px', lineHeight: 1.7, color: 'text.secondary' }}>
        Cada operador leva um nó. Os rádios formam uma rede mesh entre si: se um colega está fora de
        alcance, a mensagem pula pelos outros até chegar. Você conversa e acompanha o time pelo
        celular, via Bluetooth, sem chip, sem sinal de operadora, sem internet, direto pelos apps{' '}
        <ExternalLink href={externalLinks.meshtasticDownloads}>Meshtastic</ExternalLink>,{' '}
        <ExternalLink href={externalLinks.atak}>ATAK</ExternalLink> ou{' '}
        <ExternalLink href={externalLinks.itak}>iTAK</ExternalLink>.
      </Typography>
    </Box>
  )

  const titleBlock = (
    <SectionTitle label="02 — O PROJETO" title="De peça de cosplay a equipamento de campo." />
  )

  return (
    <SectionContainer id="sobre">
      <TwoColumnSection left={titleBlock} right={leftContent} leftSpan={5} rightSpan={7} gap={3} />
      <Box sx={{ mt: 7 }}>
        <FeatureGrid features={features} columns={3} />
      </Box>
    </SectionContainer>
  )
}
