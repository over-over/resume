import '../styles/globals.css';
import '../public/reset.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../src/shared/ui/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
