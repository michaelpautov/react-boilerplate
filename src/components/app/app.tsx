import { lightTheme } from '@fa/themes'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

export const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={lightTheme.theme}>
      <StyledThemeProvider theme={lightTheme.theme}>React Boilerplate</StyledThemeProvider>
    </MuiThemeProvider>
  </BrowserRouter>
)
