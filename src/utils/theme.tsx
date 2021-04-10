import React, { FC } from 'react';
import { createMuiTheme, CssBaseline, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import type { Shadows } from '@material-ui/core/styles/shadows';

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      light: '#5066ff',
      main: '#2f54eb',
      dark: '#20399e',
    },
    success: {
      light: '#78e744',
      main: '#52c41a',
      dark: '#24a200',
      contrastText: '#fff',
    },
    text: {
      primary: '#232d38',
      secondary: '#44566c',
      white: '#ffffff',
    },
    background: {
      default: '#f5f6f7',
      paper: '#ffffff',
      tag: '#97afcb',
      light: '#f5f8f9',
      field: '#eceff0',
      overlay: '#232d38',
    },
    divider: '#dfdfdf',
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: 32,
      lineHeight: '42px',
      fontWeight: 700,
    },
    h2: {
      fontSize: 24,
      lineHeight: '32px',
      fontWeight: 700,
    },
    h3: {
      fontSize: 24,
      lineHeight: '24px',
      fontWeight: 500,
    },
    h4: {
      fontSize: 20,
      lineHeight: '26px',
      fontWeight: 700,
    },
    h5: {
      fontSize: 16,
      lineHeight: '20px',
      fontWeight: 700,
    },
    h6: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 16,
      lineHeight: '20px',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 500,
    },
    body1: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      lineHeight: '21px',
      fontWeight: 400,
    },
    button: {
      fontSize: 14,
      lineHeight: '14px',
      fontWeight: 400,
      textTransform: 'none',
    },
    overline: {
      fontSize: 12,
      lineHeight: '12px',
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shadows: [
    'none',
    '0px 0px 0px 0px rgba(0,0,0,0.2)',
    '0 6px 16px 0 rgba(0, 0, 0, 0.1)',
    '0px 10px 40px -10px rgba(0,0,0,0.2)',
    '0 8px 20px 0 rgba(68, 86, 108, 0.1)',
    '0 40px 50px 0 rgba(103, 118, 128, 0.1)',
    '0 2px 4px 0 rgba(47, 84, 235, 0.15), 0 8px 16px 0 rgba(47, 84, 235, 0.15)',
    ...[...Array(18)].map((_) => `none`),
  ] as Shadows,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          width: '100vw',
          height: '100vh',
          overflowX: 'hidden',
        },
      },
    },
  },
};

export const theme = createMuiTheme(themeOptions);

export const ThemeProvider: FC = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);
