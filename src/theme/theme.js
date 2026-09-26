import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#FF8C00' },
    secondary: { main: '#1A1A1A' },
    background: { default: '#FFFFFF', paper: '#F5F5F5' },
    text: { primary: '#1A1A1A', secondary: '#666666' },
  },
  typography: { fontFamily: 'Roboto' },
  components: {
    MuiButton: { styleOverrides: { contained: { textTransform: 'none' } } },
    MuiAppBar: { styleOverrides: { root: { boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } } },
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#FF8C00' },
    secondary: { main: '#FFFFFF' },
    background: { default: '#0A0A0A', paper: '#1A1A1A' },
    text: { primary: '#FFFFFF', secondary: '#CCCCCC' },
  },
  typography: { fontFamily: 'Roboto' },
  components: {
    MuiButton: { styleOverrides: { contained: { textTransform: 'none' } } },
    MuiAppBar: { styleOverrides: { root: { boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } } },
  },
})

export { lightTheme, darkTheme }
