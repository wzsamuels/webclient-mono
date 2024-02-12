import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ifmud web client",
  description: "Web Client for ifMUD",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        strategy="beforeInteractive"
        >
          {`
          console.log(localStorage)
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
          `}
      
      </Script>
    </html>
  );
}
