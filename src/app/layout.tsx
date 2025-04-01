import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WTM - Áo quần bóng đá cổ điển",
  description:
    "Trang web bán áo quần bóng đá (vintage) WTM – nơi bạn tìm thấy những mẫu áo đấu huyền thoại từ các CLB châu Âu.",
  keywords:
    "áo quần bóng đá cổ điển, áo đấu vintage, WTM, quần áo bóng đá cổ điẻn, áo bóng đá cổ điển WTM, áo quần bóng đá 9x, áo vintage",
  metadataBase: new URL("https://wtm-vintage-sport.vercel.app/"), // Thay URL thật của bạn
  openGraph: {
    title: "WTM - Áo quần bóng đá cổ điển",
    description:
      "Trang web bán áo quần bóng đá cổ điển (vintage) WTM – nơi bạn tìm thấy những mẫu áo đấu huyền thoại từ các CLB châu Âu.",
    url: "https://wtm-vintage-sport.vercel.app/",
    siteName: "WTM",
    images: [
      {
        url: "/images/og-image.jpg", // Đường dẫn ảnh Open Graph
        width: 1200,
        height: 630,
        alt: "WTM - Áo quần bóng đá cổ điển",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter", // Nếu có Twitter handle
    images: ["/images/twitter-image.jpg"], // Ảnh cho Twitter Card
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="o7tSNa8OoD4Xg_15Q8WNJHxHCoGrr7zGJKzePBRUU-4"
        />
         <link rel="icon" href="favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
