import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// import { lightTheme } from './light-theme';
import { darkTheme } from './dark-theme';

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  return (
    <StyledThemeProvider theme={darkTheme}>{children}</StyledThemeProvider>
  );
};
