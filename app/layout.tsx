import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/layout/Background";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GB Construction - Water Treatment Plants & Projects",
  description: "GB Construction specializes in water treatment plants, raw water intake plants, overhead reservoirs, and radial collector well projects.",
  keywords: "GB Construction, water treatment plants, raw water intake plants, overhead reservoirs, radial collector well projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Background />
        {children}
      </body>
    </html>
  );
}
