import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SEO, BRAND } from "@/lib/constants";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2b3d3b",
};

export const metadata: Metadata = {
  metadataBase: new URL(SEO.url),
  title: {
    default: SEO.title,
    template: `%s | ${BRAND.name}`,
  },
  description: SEO.description,
  keywords: [...SEO.keywords],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SEO.url,
    title: SEO.title,
    description: SEO.description,
    siteName: BRAND.name,
    images: [
      {
        url: SEO.image,
        width: 1200,
        height: 630,
        alt: `${BRAND.name} - ${BRAND.slogan}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.image],
  },
  alternates: {
    canonical: SEO.url,
  },
  category: "technology",
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17794646751"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17794646751');
          `}
        </Script>

        {/* Hotjar Tracking Code */}
        <Script id="hotjar-tracking" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:2280810,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
