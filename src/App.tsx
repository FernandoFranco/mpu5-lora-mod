import { useState, useEffect, FC } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Home } from '@/pages'
import { lightTheme, darkTheme } from './theme/theme'

export const App: FC = () => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = (): void => setIsDark(!isDark)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Home onToggleTheme={toggleTheme} isDark={isDark} />
    </ThemeProvider>
  )
}
