import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { useTheme } from '@mui/material'
import { InfoCircle } from '@/icons'
import { SectionContainer } from './base/SectionContainer'
import { SectionTitle } from './base/SectionTitle'
import { TwoColumnSection } from './base/TwoColumnSection'

export function FAQSection() {
  const theme = useTheme()

  const faqs = [
    {
      question: 'O que é LoRa?',
      answer:
        'LoRa (Long Range) é uma tecnologia de radio-frequência que permite comunicação de longo alcance com baixo consumo de energia. Funciona em frequências livres como 915 MHz ou 868 MHz e é ideal para redes mesh descentralizadas.',
    },
    {
      question: 'Preciso de internet para usar o MPU5?',
      answer:
        'Não. O MPU5 funciona completamente offline usando a rede mesh LoRa. Você pode se comunicar com outros dispositivos MPU5 sem dependência de internet, torres celulares ou servidores centralizados.',
    },
    {
      question: 'Qual é o alcance máximo?',
      answer:
        'O alcance varia conforme topografia, obstáculos e antena utilizada. Tipicamente, um dispositivo isolado consegue comunicar de 2-5 km em linha reta. Em uma rede mesh com múltiplos nós, o alcance efetivo se estende significativamente.',
    },
    {
      question: 'Posso contribuir para o projeto?',
      answer:
        'Sim! Você pode reportar bugs, enviar pull requests no GitHub, criar tutoriais, traduzir a documentação ou compartilhar seus próprios builds. Veja o repositório para diretrizes de contribuição.',
    },
  ]

  const leftContent = (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <InfoCircle />
        <Typography sx={{ fontWeight: 600, fontSize: '18px' }}>Perguntas Frequentes</Typography>
      </Box>
      <Typography sx={{ fontSize: '15px', color: 'text.secondary', lineHeight: 1.6 }}>
        Encontre respostas para dúvidas comuns sobre o MPU5, LoRa e como contribuir.
      </Typography>
    </Box>
  )

  const rightContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {faqs.map((faq, idx) => (
        <Accordion
          key={idx}
          sx={{
            backgroundColor: 'transparent',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#ddd'}`,
            '&.Mui-expanded': {
              backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f9f9f9',
            },
            '&:before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<span>+</span>}
            sx={{
              fontWeight: 600,
              '& .MuiAccordionSummary-content': {
                margin: '12px 0',
              },
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: '15px' }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0 }}>
            <Typography sx={{ fontSize: '14px', color: 'text.secondary', lineHeight: 1.6 }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )

  return (
    <SectionContainer id="faq">
      <SectionTitle
        label="FAQ"
        title="Dúvidas Frequentes"
        description="Encontre as respostas que procura"
      />

      <TwoColumnSection
        left={leftContent}
        right={rightContent}
        leftSpan={4}
        rightSpan={7}
        gap={3}
      />
    </SectionContainer>
  )
}
