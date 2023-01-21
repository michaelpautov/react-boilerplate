export const typography = {
  fontFamily: 'Inter',
  h1: {
    fontSize: '56px',
    fontWeight: 400,
    lineHeight: '120%',
  },
  h2: {
    fontSize: '32px',
    lineHeight: '120%',
    fontWeight: 500,
  },
  h3: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '120%',
  },
  h4: {
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '24px',
  },
  h5: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '27px',
  },
  h6: {
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '24px',
  },
  h7: {
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '20.4px',
  },
  body1: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '22.4px',
  },
  body2: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
  },
  caption1: {
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '17px',
  },
  buttonSmall: {
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '19.6px',
  },
}

declare module '@mui/material/styles' {
  type TypographyVariants = {
    buttonSmall: React.CSSProperties
    caption1: React.CSSProperties
    h7: React.CSSProperties
  }

  type TypographyVariantsOptions = {
    buttonSmall?: React.CSSProperties
    caption1: React.CSSProperties
    h7: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  // @ts-expect-error eslint issue
  type TypographyPropsVariantOverrides = {
    buttonSmall: true
    caption1: true
    h7: true
  }
}
