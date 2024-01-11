'use client'
import { Header } from "@/components/Header";
import GlobalStyles from "@/styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
//const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body >
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
