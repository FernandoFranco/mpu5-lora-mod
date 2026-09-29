import { FC } from 'react'
import { Box } from '@mui/material'
import {
  AboutSection,
  AssemblySection,
  FAQSection,
  FilesSection,
  HeroSection,
  HowItWorksSection,
  SupportSection,
} from '@/components/sections'

export const Home: FC = () => (
  <Box>
    <HeroSection />
    <SupportSection />
    <AboutSection />
    <HowItWorksSection />
    <FilesSection />
    <AssemblySection />
    <FAQSection />
  </Box>
)
