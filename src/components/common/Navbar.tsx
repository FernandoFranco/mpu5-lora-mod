import { FC, useEffect, useRef, useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { CloseIcon, LoRaIcon, MenuIcon, MoonIcon, StarIcon, SunIcon } from '@/icons'
import type { NavbarProps } from '@/types'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Arquivos STL', href: '#arquivos' },
  { label: 'Montagem', href: '#montagem' },
  { label: 'FAQ', href: '#faq' },
]

export const Navbar: FC<NavbarProps> = ({ onToggleTheme, isDark }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const location = useLocation()
  const navigate = useNavigate()
  const pendingScrollRef = useRef<string | null>(null)

  const scrollToSection = (href: string): void => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleNavigate = (href: string): void => {
    if (location.pathname !== '/') {
      pendingScrollRef.current = href
      navigate('/')
      return
    }
    scrollToSection(href)
  }

  useEffect(() => {
    if (location.pathname === '/' && pendingScrollRef.current) {
      const href = pendingScrollRef.current
      pendingScrollRef.current = null
      requestAnimationFrame(() => scrollToSection(href))
    }
  }, [location.pathname])

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme.palette.mode === 'dark' ? '#0A0A0A' : '#FFFFFF',
        borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#1A1A1A' : '#EEEEEE'}`,
        color: theme.palette.text.primary,
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 1400,
          mx: 'auto',
          width: '100%',
          px: { xs: 2, md: 4 },
          height: 64,
          display: 'flex',
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            fontSize: '18px',
            fontWeight: 700,
            flex: 1,
          }}
        >
          <Box sx={{ color: theme.palette.primary.main, display: 'flex', lineHeight: 0 }}>
            <LoRaIcon size="md" />
          </Box>
          <Box>
            <Box sx={{ fontSize: '0.75rem', fontWeight: 700, lineHeight: 1 }}>MPU5 LoRa Mod</Box>
            <Box
              sx={{
                fontSize: '0.65rem',
                color: theme.palette.text.secondary,
                lineHeight: 1,
              }}
            >
              LoRa • Meshtastic • Airsoft
            </Box>
          </Box>
        </Box>

        {!isMobile && (
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              alignItems: 'center',
              mr: 1,
              fontSize: '0.95rem',
              fontWeight: 500,
            }}
          >
            {navLinks.map(link => (
              <Button
                key={link.label}
                onClick={() => handleNavigate(link.href)}
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  textTransform: 'none',
                  color: theme.palette.text.primary,
                  position: 'relative',
                  cursor: 'pointer',
                  '&:hover': { color: theme.palette.primary.main },
                  '&:hover::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    right: 0,
                    height: 2,
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}

        {!isMobile && (
          <Button
            component="a"
            href="https://github.com/your-user/mpu5"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            startIcon={<StarIcon size="sm" />}
            sx={{
              textTransform: 'none',
              borderColor: theme.palette.mode === 'dark' ? '#343C2E' : '#E0E0E0',
              color: theme.palette.text.primary,
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Star no GitHub
          </Button>
        )}

        <IconButton
          onClick={onToggleTheme}
          color="inherit"
          sx={{
            color: theme.palette.text.primary,
            '&:hover': { color: theme.palette.primary.main },
            display: 'flex',
          }}
        >
          {isDark ? <SunIcon size="md" /> : <MoonIcon size="md" />}
        </IconButton>

        {isMobile && (
          <IconButton onClick={() => setDrawerOpen(true)} color="inherit" sx={{ display: 'flex' }}>
            <MenuIcon size="md" />
          </IconButton>
        )}
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box
          sx={{
            width: 250,
            p: 2,
            backgroundColor: theme.palette.background.paper,
            height: '100%',
          }}
        >
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ display: 'flex' }}>
            <CloseIcon size="md" />
          </IconButton>
          <List>
            {navLinks.map(link => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleNavigate(link.href)
                    setDrawerOpen(false)
                  }}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
