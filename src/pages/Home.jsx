import { Box } from '@mui/material'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ContributionSection from '../components/ContributionSection'
import STLGrid from '../components/STLGrid'
import InstructionsSection from '../components/InstructionsSection'
import Footer from '../components/Footer'

export default function Home({ onToggleTheme, isDark }) {
  return (
    <Box>
      <Navbar onToggleTheme={onToggleTheme} isDark={isDark} />
      <HeroSection />
      <AboutSection />
      <ContributionSection />
      <STLGrid />
      <InstructionsSection />
      <Footer />
    </Box>
  )
}
