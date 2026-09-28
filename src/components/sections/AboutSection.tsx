import { FC } from 'react'
import { Typography } from '@mui/material'
import { FeatureGrid, SectionContainer, SectionTitle, TwoColumnSection } from '@/components/base'
import { Lock, MapPin, MeshChat, RadioDevice, Remix, WifiOff } from '@/icons'

export const AboutSection: FC = () => {
  const features = [
    {
      icon: MeshChat,
      title: 'Mesh Chat',
      description: 'Comunicação direta entre dispositivos sem dependência de servidor central.',
    },
    {
      icon: MapPin,
      title: 'Posicionamento Local',
      description: 'Funciona offline sem necessidade de localização GPS ou internet.',
    },
    {
      icon: WifiOff,
      title: 'Zero Infraestrutura',
      description: 'Sem custos de rede, sem dependência de servidores ou subscriptions.',
    },
    {
      icon: Lock,
      title: 'Canais Criptografados',
      description: 'Comunicação segura com criptografia end-to-end em todos os canais.',
    },
    {
      icon: RadioDevice,
      title: 'Visual Preservado',
      description: 'Design simples que preserva a estética clássica do MPU5.',
    },
    {
      icon: Remix,
      title: 'Aberto e Remixável',
      description: 'Código aberto permitindo customizações e contribuições da comunidade.',
    },
  ]

  const leftContent = (
    <Typography sx={{ fontSize: '17px', lineHeight: 1.7, color: 'text.secondary' }}>
      O projeto MPU5 LoRa Airsoft é uma iniciativa open-source que traz comunicação mesh
      descentralizada para o airsoft. Com tecnologia LoRa, permite que jogadores se comuniquem sem
      infraestrutura, preservando a filosofia DIY do hobby.
    </Typography>
  )

  return (
    <SectionContainer id="sobre">
      <SectionTitle
        label="SOBRE"
        title="Comunicação Descentralizada"
        description="Entenda os princípios que guiam o projeto MPU5"
      />
      <TwoColumnSection
        left={leftContent}
        right={<FeatureGrid features={features} columns={3} />}
        leftSpan={4}
        rightSpan={7}
        gap={3}
      />
    </SectionContainer>
  )
}
