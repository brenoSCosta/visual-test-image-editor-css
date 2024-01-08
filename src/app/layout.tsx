import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Image Editor Test",
  description:
    "This is a test site designed for experimenting with the creation of an image editor focus in css training",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
