import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import '../styles/reset.css';
import { AuthProvider } from '../providers/auth';

function MyApp({ Component, pageProps }) {
  return(
    <>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </AuthProvider>
    </ThemeProvider>
    </>
  )
}

export default MyApp;
