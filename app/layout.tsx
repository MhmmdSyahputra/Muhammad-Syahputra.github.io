import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { BootstrapClient } from "./components/BootstrapClietsx";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Syahputra",
  description: "Software Engineer",
  keywords: "CV, Portofolio, Programmer, Muhammad Syahputra, IT, Tehcnologi",
  category: "CV, Portofolio, Technology",
  publisher: "Muhammad Syahputra",
  creator: "Muhammad Syahputra",
  classification: "Portofolio, CV, Muhammad Syahputra",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Poppins:wght@400;500;700&display=swap"
        ></link>
      </head>
      <body className={inter.className}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
