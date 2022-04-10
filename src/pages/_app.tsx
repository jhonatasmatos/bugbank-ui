import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import '../styles/reset.css';
import { AuthProvider } from '../providers/auth';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
          <GlobalStyles />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
