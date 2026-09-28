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

export default function Home({ onToggleTheme, isDark }) {
  return (
    <Box>
      <Navbar onToggleTheme={onToggleTheme} isDark={isDark} />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <FilesSection />
      <AssemblySection />
      <SupportSection />
      <FAQSection />
      <Footer />
    </Box>
  )
}
