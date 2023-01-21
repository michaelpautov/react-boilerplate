import { Theme } from '@fa/types'
import { createTheme } from '@mui/material'

import { breakpoints, palette, typography } from './light-config'

export const theme = createTheme({
  palette,
  typography,
  breakpoints,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: '3px 0 0',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          ...typography.body2,
          backgroundColor: palette.text.secondary,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          ...typography.h4,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorSecondary: {
          backgroundColor: palette.secondary.light,
          color: palette.text.secondary,
        },
        colorPrimary: {
          backgroundColor: palette.primary.light,
          color: palette.primary.dark,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: palette.grey['900'],
          color: palette.background.paper,
          padding: 0,
          borderRadius: 10,
          boxShadow:
            '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${palette.divider}`,
          borderTop: `0px solid ${palette.divider}`,
          boxShadow: 'none',
          '&.Mui-expanded': {
            margin: 0,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '0 24px',
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0 24px 16px',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: palette.divider,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          top: '0',
          position: 'relative',
          marginLeft: '-22px',
        },
      },
    },
  },
})

export const lightTheme: Theme = {
  name: 'light',
  theme,
}
