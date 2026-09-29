import { FC, useEffect, useState } from 'react'
import { Box, Button, Link, Typography, useTheme } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import type { CookieConsentBannerProps } from '@/types'

const CONSENT_KEY = 'cookieConsent'
const GA_SCRIPT_ID = 'ga-measurement-script'

function loadGoogleAnalytics(): void {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
  if (!measurementId || document.getElementById(GA_SCRIPT_ID)) return

  const script = document.createElement('script')
  script.id = GA_SCRIPT_ID
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  const inlineScript = document.createElement('script')
  inlineScript.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `
  document.head.appendChild(inlineScript)
}

function disableGoogleAnalytics(): void {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
  if (measurementId) {
    ;(window as unknown as Record<string, boolean>)[`ga-disable-${measurementId}`] = true
  }

  const cookieNames = document.cookie
    .split(';')
    .map(entry => entry.trim().split('=')[0])
    .filter(name => name === '_ga' || name === '_gid' || name.startsWith('_ga_'))

  for (const name of cookieNames) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
  }
}

export const CookieConsentBanner: FC<CookieConsentBannerProps> = ({ reopenSignal }) => {
  const theme = useTheme()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (consent === 'accepted') {
      loadGoogleAnalytics()
    } else if (consent !== 'rejected') {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    if (reopenSignal > 0) setVisible(true)
  }, [reopenSignal])

  const handleAccept = (): void => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    loadGoogleAnalytics()
    setVisible(false)
  }

  const handleReject = (): void => {
    localStorage.setItem(CONSENT_KEY, 'rejected')
    disableGoogleAnalytics()
    setVisible(false)
  }

  if (!visible) return null

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.snackbar,
        p: 2,
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.mode === 'dark' ? '#1A1A1A' : '#EEEEEE'}`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'stretch', sm: 'center' },
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Typography variant="body2">
          Usamos cookies analíticos para entender como o site é usado. Veja nossa{' '}
          <Link component={RouterLink} to="/privacy">
            Política de Privacidade
          </Link>
          .
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="text" onClick={handleReject}>
            Recusar
          </Button>
          <Button variant="contained" onClick={handleAccept}>
            Aceitar
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
