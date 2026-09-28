import { FC } from 'react'
import { Box } from '@mui/material'
import { Footer, Navbar } from '@/components/common'
import {
  AboutSection,
  AssemblySection,
  FAQSection,
  FilesSection,
  HeroSection,
  HowItWorksSection,
  SupportSection,
} from '@/components/sections'
import type { HomeProps } from '@/types'

export const Home: FC<HomeProps> = ({ onToggleTheme, isDark }) => {
  return (
    <Box>
      <Navbar onToggleTheme={onToggleTheme} isDark={isDark} />
      <HeroSection />
      <SupportSection />
      <AboutSection />
      <HowItWorksSection />
      <FilesSection />
      <AssemblySection />
      <FAQSection />
      <Footer />
    </Box>
  )
}
