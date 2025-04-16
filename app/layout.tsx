import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/layout/Background";
import { Footer } from "@/components/layout/Footer";
import { DataProvider } from "./_hooks/useData";
import { Topbar } from "@/components/layout/Topbar";
import { siteConfig } from "./_utils/utils";
import WelcomeModal from "@/components/layout/welcome-modal";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: siteConfig().title,
    description: siteConfig().description,
    openGraph: {
      title: siteConfig().title,
      description: siteConfig().description,
      type: 'website',
      url: siteConfig().baseUrl,
      images: [
        {
          url: siteConfig().ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig().name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig().title,
      description: siteConfig().description,
      images: [siteConfig().ogImage],
      creator: siteConfig().twitter,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        <Topbar />
        <Background />
        <DataProvider>
          {children}
        </DataProvider>
        <Footer />
        <WelcomeModal />
      </body>
    </html>
  );
}
