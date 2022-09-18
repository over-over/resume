import { TTheme } from './types';

export const darkTheme: TTheme = {
  breakpoints: {
    xs: 320,
    sm: 600,
    md: 1000,
    lg: 1400,
    xl: 1600,
  },
  palette: {
    primary: {
      main: '#b2c5ff',
      light: '#0040a1',
      dark: '#dae2ff',
      contrastText: '#002b73',
    },
    secondary: {
      main: '#e4b5ff',
      light: '#60317f',
      dark: '#f4d9ff',
      contrastText: '#481867',
    },
    background: {
      primary: '#001f25',
      secondary: '#a2eeff',
    },
    divider: '#c5c6d0',
    borders: {
      primary: '#8f909a',
      secondary: '#45464f',
      width: 2,
      type: 'solid',
    },
    text: {
      primary: 'rgba(245,245,245, 1)',
      secondary: 'rgba(255,255,255, 0.75)',
      // primary: '#a2eeff',
      // secondary: '#001f25',
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
