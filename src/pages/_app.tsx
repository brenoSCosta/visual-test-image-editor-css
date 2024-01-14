import { AppProps } from "next/app";
import Head from "next/head";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import GlobalStyles from "../styles/global";
import theme from '../styles/theme';
import { ThemeProvider } from "styled-components";
import '@/styles/global'
function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
