import { Box } from '@mui/material'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { HowItWorksSection } from '../components/HowItWorksSection'
import { FilesSection } from '../components/FilesSection'
import { AssemblySection } from '../components/AssemblySection'
import { SupportSection } from '../components/SupportSection'
import { FAQSection } from '../components/FAQSection'
import Footer from '../components/Footer'

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
