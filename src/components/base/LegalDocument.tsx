import { FC } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import type { LegalDocumentContent, LegalDocumentProps, LegalResources } from '@/types'
import { SectionContainer } from './SectionContainer'

export const LegalDocument: FC<LegalDocumentProps> = ({ documentKey }) => {
  const { i18n } = useTranslation('legal')
  const resources = i18n.getResourceBundle(i18n.language, 'legal') as LegalResources
  const { title, lastUpdated, sections }: LegalDocumentContent = resources[documentKey]

  const toggleLanguage = (): void => {
    void i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt')
  }

  return (
    <SectionContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: 2,
          mb: 4,
        }}
      >
        <Box>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {lastUpdated}
          </Typography>
        </Box>
        <Button variant="outlined" onClick={toggleLanguage}>
          {i18n.language === 'pt' ? 'English' : 'Português'}
        </Button>
      </Box>
      {sections.map((section, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            {section.heading}
          </Typography>
          {section.paragraphs.map((paragraph, pIndex) => (
            <Typography key={pIndex} variant="body1" sx={{ mb: 1 }}>
              {paragraph}
            </Typography>
          ))}
        </Box>
      ))}
    </SectionContainer>
  )
}
