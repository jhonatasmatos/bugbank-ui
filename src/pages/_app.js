import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import '../styles/reset.css';

function MyApp({ Component, pageProps }) {
  return(
    <>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
    </>
  )
}

export default MyApp;