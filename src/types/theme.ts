import { Theme as MaterialTheme } from '@mui/material'
import { DefaultTheme } from 'styled-components'

export type Theme = DefaultTheme & {
  name: string
  fontFamily?: string
  theme: MaterialTheme
}
