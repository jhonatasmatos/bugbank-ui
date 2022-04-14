import { createGlobalStyle } from 'styled-components'
import { theme } from '../styles/theme'

type ThemeProps = {
  theme: typeof theme;
}

export const GlobalStyles = createGlobalStyle<ThemeProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }
  h1 {
    font-family: ${({ theme }) => theme.font.family.default};
  }
  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }
  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
  }
`;
