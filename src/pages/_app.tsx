import { AppProps } from "next/app";
import Head from "next/head";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import GlobalStyles from "../styles/global";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        {/* <title>Project</title>
        <link rel="shorcut icon" href="/img/bg.png" />
        <link rel="apple-touch-icon" href="/img/bg.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Project" /> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
