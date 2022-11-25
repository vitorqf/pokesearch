import '../styles/globals.css';

import { Press_Start_2P } from '@next/font/google';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

const ps2p = Press_Start_2P({ weight: ['400'], subsets: ['latin'] })

import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={ps2p.className}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </main>
  );
}

export default MyApp;
