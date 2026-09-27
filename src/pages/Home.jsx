import { Box } from '@mui/material'
import { AboutSection } from '../components/AboutSection'
import { AssemblySection } from '../components/AssemblySection'
import { FAQSection } from '../components/FAQSection'
import { FilesSection } from '../components/FilesSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import { HowItWorksSection } from '../components/HowItWorksSection'
import Navbar from '../components/Navbar'
import { SupportSection } from '../components/SupportSection'

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
