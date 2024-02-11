import type { Metadata } from "next";
import "./globals.css";

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
    </html>
  );
}
