import { useState, useEffect, FC } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { CookieConsentBanner, Footer, Navbar } from '@/components/common'
import { Home, Privacy, Terms } from '@/pages'
import { lightTheme, darkTheme } from './theme/theme'

const ScrollToTop: FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export const App: FC = () => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [cookiePrefsSignal, setCookiePrefsSignal] = useState(0)

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = (): void => setIsDark(!isDark)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter basename="/mpu5-lora-mod/">
        <ScrollToTop />
        <Navbar onToggleTheme={toggleTheme} isDark={isDark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer onOpenCookiePreferences={() => setCookiePrefsSignal(s => s + 1)} />
        <CookieConsentBanner reopenSignal={cookiePrefsSignal} />
      </BrowserRouter>
    </ThemeProvider>
  )
}
