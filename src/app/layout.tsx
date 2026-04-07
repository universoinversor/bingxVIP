import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: '--font-body'
});

const syne = Syne({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800"], 
  variable: '--font-heading' 
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://universoinversor.com"),
  title: "Universo Inversor | Bull Traders Elite - Liderado por Edwin Muñoz",
  description: "Únete a la élite del trading con Edwin Muñoz. Copia estrategias ganadoras automáticamente en BingX con el ecosistema más premium del mercado.",
  keywords: ["trading", "copy trading", "edwin muñoz", "universo inversor", "bull traders", "criptomonedas", "bingx"],
  authors: [{ name: "Universo Inversor Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Universo Inversor | Bull Traders Elite",
    description: "Copia a los líderes del mercado y opera como un profesional. Liverado por Edwin Muñoz.",
    url: "https://universoinversor.com",
    siteName: "Universo Inversor",
    locale: "es_ES",
    type: "website",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Universo Inversor Bull Traders Elite"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Universo Inversor | Bull Traders Elite",
    description: "Copia a los líderes del mercado y opera como un profesional.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} ${syne.variable} font-sans antialiased bg-black text-[#f5f5f7]`}>
        {children}
      </body>
    </html>
  );
}
