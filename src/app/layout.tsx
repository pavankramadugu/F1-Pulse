import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import 'flowbite'

const inter = Titillium_Web({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "F1 Pulse",
  description: "Formula1 Stats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
