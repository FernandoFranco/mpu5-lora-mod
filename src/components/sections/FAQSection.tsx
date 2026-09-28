import { FC } from 'react'
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material'
import { useTheme } from '@mui/material'
import { ExternalLink, SectionContainer, SectionTitle, TwoColumnSection } from '@/components/base'
import { externalLinks } from '@/data'

export const FAQSection: FC = () => {
  const theme = useTheme()

  const faqs = [
    {
      id: 'outros-radios',
      question: (
        <>
          Funciona com rádios{' '}
          <ExternalLink href={externalLinks.meshtastic}>Meshtastic</ExternalLink> que não são MPU5?
        </>
      ),
      answer: (
        <>
          Sim. Qualquer nó <ExternalLink href={externalLinks.meshtastic}>Meshtastic</ExternalLink>{' '}
          na mesma região e canal conversa com o seu, como T-Beam, RAK Wireless e outras placas
          compatíveis.
        </>
      ),
    },
    {
      id: 'programar',
      question: 'Preciso saber programar?',
      answer: 'Não. O firmware é gravado pelo navegador e toda a configuração é feita no app.',
    },
    {
      id: 'alcance',
      question: 'Qual o alcance?',
      answer:
        'Depende muito do terreno, da vegetação e da antena. Cada rádio a mais no time funciona como repetidor e amplia a cobertura.',
    },
    {
      id: 'venda',
      question: 'Posso vender montagens prontas?',
      answer: (
        <>
          Não sem autorização prévia. O projeto é licenciado sob CC BY-NC-SA 4.0: uso pessoal é
          livre, mas venda de peças, kits ou serviços exige contato com o autor. Veja a seção{' '}
          <Link href="#apoie" sx={{ color: 'primary.main' }}>
            Apoie o projeto
          </Link>{' '}
          para mais detalhes.
        </>
      ),
    },
  ]

  const leftContent = <SectionTitle label="06 — FAQ" title="Perguntas frequentes" />

  const rightContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {faqs.map(faq => (
        <Accordion
          key={faq.id}
          disableGutters
          elevation={0}
          sx={{
            backgroundColor: 'transparent',
            borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#262C22' : '#e0e0e0'}`,
            '&:before': { display: 'none' },
          }}
        >
          <AccordionSummary
            expandIcon={<span>+</span>}
            sx={{
              px: 0,
              '& .MuiAccordionSummary-content': { margin: '20px 0' },
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: '18px' }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 0, pt: 0, pb: 3 }}>
            <Typography sx={{ fontSize: '15px', color: 'text.secondary', lineHeight: 1.65 }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )

  return (
    <SectionContainer id="faq" borderTop>
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
