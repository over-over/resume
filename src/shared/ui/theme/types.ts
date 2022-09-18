import { CSSProperties } from 'react';

export type TThemeColor = {
  main: string;
  light: string;
  dark: string;
  contrastText?: string;
};

export type TTextColor = {
  primary: string;
  secondary: string;
};

export type TBackground = {
  primary: string;
  secondary: string;
};

export type TBorders = {
  primary: string;
  secondary: string;
  width: number;
  type: CSSProperties['borderStyle'];
};

export type TPalette = {
  primary: TThemeColor;
  secondary: TThemeColor;
  background: TBackground;
  text: TTextColor;
  divider: string;
  borders: TBorders;
};

export type TTypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'subtitle'
  | 'caption';

export type TTypographyStyle = CSSProperties;

export type TTypography = Record<TTypographyVariant, TTypographyStyle>;

export type TBreakpointVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TBreakpoints = Record<TBreakpointVariant, number>;

export type TTheme = {
  palette: TPalette;
  typography: TTypography;
  breakpoints: TBreakpoints;
};
