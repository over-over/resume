import { TTheme } from './types';

export const lightTheme: TTheme = {
  breakpoints: {
    xs: 320,
    sm: 600,
    md: 1000,
    lg: 1400,
    xl: 1600,
  },
  palette: {
    primary: {
      main: '#0056d2',
      light: '#dae2ff',
      dark: '#001848',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7a4a99',
      light: '#f4d9ff',
      dark: '#2f004c',
      contrastText: '#ffffff',
    },
    background: {
      primary: '#f7fdff',
      secondary: '#001f25',
    },
    divider: '#45464f',
    borders: {
      primary: '#757780',
      secondary: '#e1e2ec',
      width: 2,
      type: 'solid',
    },
    text: {
      primary: '#001f25',
      secondary: '#f7fdff',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 300,
      fontSize: '96px',
      lineHeight: '112px',
      letterSpacing: '-1.5px',
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 300,
      fontSize: '60px',
      lineHeight: '72px',
      letterSpacing: '-0.5px',
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'normal',
      fontSize: '48px',
      lineHeight: '56px',
    },
    h4: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'normal',
      fontSize: '34px',
      lineHeight: '36px',
      letterSpacing: '0.25px',
    },
    h5: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 400,
      fontSize: '28px',
      lineHeight: '32px',
      letterSpacing: '0.18px',
    },
    h6: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: '28px',
      letterSpacing: '0.15px',
    },
    body: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'normal',
      fontSize: '20px',
      lineHeight: '28px',
      letterSpacing: '0.5px',
    },
    subtitle: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'normal',
      fontSize: '20px',
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
    caption: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '18px',
      letterSpacing: '0.4px',
    },
  },
};
