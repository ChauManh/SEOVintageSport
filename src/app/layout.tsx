import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "WTM - Áo quần bóng đá cổ điển",
  description:
    "Trang web bán áo quần bóng đá (vintage) WTM – nơi bạn tìm thấy những mẫu áo đấu huyền thoại từ các CLB châu Âu.",
  keywords:
    "áo quần bóng đá cổ điển, áo đấu vintage, WTM, quần áo bóng đá cổ điển, áo bóng đá cổ điển WTM, áo quần bóng đá 9x, áo vintage",
  metadataBase: new URL("https://www.aodaucodienwtm.com"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#1f2937",
  openGraph: {
    title: "WTM - Áo quần bóng đá cổ điển",
    description:
      "Trang web bán áo quần bóng đá cổ điển (vintage) WTM – nơi bạn tìm thấy những mẫu áo đấu huyền thoại từ các CLB châu Âu.",
    url: "https://www.aodaucodienwtm.com",
    siteName: "WTM",
    images: [
      {
        url: "https://www.aodaucodienwtm.com/asset/logo.png",
        width: 800,
        height: 600,
        alt: "WTM - Áo quần bóng đá cổ điển",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aodaucodien_wtm",
    title: "WTM - Áo quần bóng đá cổ điển",
    description:
      "Mua bán áo bóng đá cổ điển (vintage) chính hãng từ các CLB nổi tiếng Châu Âu. Hàng tuyển, chất lượng cao.",
    images: [
      {
        url: "https://www.aodaucodienwtm.com/asset/logo.png",
        width: 1200,
        height: 630,
        alt: "WTM - Áo quần bóng đá cổ điển",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <meta
          name="google-site-verification"
          content="o7tSNa8OoD4Xg_15Q8WNJHxHCoGrr7zGJKzePBRUU-4"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-33GHZE6GFK"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-33GHZE6GFK');
  `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
