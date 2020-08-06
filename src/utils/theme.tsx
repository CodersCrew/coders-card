import React from 'react';
import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { FC } from '../typings/components';
import { CssBaseline } from '@material-ui/core';

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
    fontFamily: 'Inter, sans-serif',
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
};

const theme = createMuiTheme(themeOptions);

export const ThemeProvider: FC = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);
