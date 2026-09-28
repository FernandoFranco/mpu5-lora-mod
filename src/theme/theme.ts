import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#FF8A33' },
    secondary: { main: '#1A1A1A' },
    background: { default: '#FFFFFF', paper: '#F5F5F5' },
    text: { primary: '#1A1A1A', secondary: '#666666' },
  },
  typography: {
    fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
    h1: { fontFamily: '"Chakra Petch", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Chakra Petch", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Chakra Petch", sans-serif', fontWeight: 600 },
    h4: { fontFamily: '"Chakra Petch", sans-serif', fontWeight: 600 },
    h5: { fontFamily: '"Chakra Petch", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Chakra Petch", sans-serif', fontWeight: 600 },
  },
  components: {
    MuiButton: { styleOverrides: { contained: { textTransform: 'none' } } },
    MuiAppBar: { styleOverrides: { root: { boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } } },
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#FF8A33' },
    secondary: { main: '#FFFFFF' },
    background: { default: '#0E110D', paper: '#151913' },
    text: { primary: '#E9E6DA', secondary: '#BFC2B2' },
  },
  typography: {
    fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
    h1: { fontFamily: '"Chakra Petch", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Chakra Petch", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Chakra Petch", sans-serif', fontWeight: 600 },
    h4: { fontFamily: '"Chakra Petch", sans-serif', fontWeight: 600 },
    h5: { fontFamily: '"Chakra Petch", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Chakra Petch", sans-serif', fontWeight: 600 },
  },
  components: {
    MuiButton: { styleOverrides: { contained: { textTransform: 'none' } } },
    MuiAppBar: { styleOverrides: { root: { boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } } },
  },
})

export { lightTheme, darkTheme }
