import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import GitHubIcon from '@mui/icons-material/GitHub'
import LoRaIcon from '../icons/LoRa'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Arquivos STL', href: '#stl' },
  { label: 'Instruções', href: '#assembly' },
  { label: 'Contribuir', href: '#contribute' },
]

export default function Navbar({ onToggleTheme, isDark }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

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
            gap: 1,
            fontSize: '18px',
            fontWeight: 700,
            flex: 1,
          }}
        >
          <Box sx={{ color: theme.palette.primary.main, display: 'flex' }}>
            <LoRaIcon />
          </Box>
          <Box>
            <Box sx={{ fontSize: '0.75rem', fontWeight: 700, lineHeight: 1 }}>MPU5 REAL</Box>
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
                href={link.href}
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  textTransform: 'none',
                  color: theme.palette.text.primary,
                  position: 'relative',
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

        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: 'flex' }}
        >
          <IconButton
            color="inherit"
            sx={{
              color: theme.palette.text.primary,
              '&:hover': { color: theme.palette.primary.main },
            }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
        </Link>

        <IconButton
          onClick={onToggleTheme}
          color="inherit"
          sx={{
            color: theme.palette.text.primary,
            '&:hover': { color: theme.palette.primary.main },
          }}
        >
          {isDark ? '☀️' : '🌙'}
        </IconButton>

        <Button
          variant="outlined"
          size="small"
          sx={{
            textTransform: 'none',
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.mode === 'dark' ? '#0A0A0A' : '#FFFFFF',
            },
            fontSize: '0.85rem',
          }}
        >
          ❤️ Apoie
        </Button>

        {isMobile && (
          <IconButton onClick={() => setDrawerOpen(true)} color="inherit">
            <MenuIcon />
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
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
          <List>
            {navLinks.map(link => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton href={link.href} onClick={() => setDrawerOpen(false)}>
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
