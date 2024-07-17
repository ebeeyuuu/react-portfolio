import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ean James Yu - Portfolio",
  description: "Explore Ean James Yu's portoflio showcasing creative design, photography, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <meta name="description" content="Explore Ean James Yu's portfolio showcasing creative design, photography, and more!" />
      <meta name="keywords" content="Ean James Yu, portfolio, creative design, photography, web development" />
      <meta property="og:title" content="Ean James Yu - Portfolio" />
      <meta property="og:description" content="Explore Ean James Yu's portfolio showcasing creative design, photography, and more!" />
      <meta property="og:image" content="/portfolio-collage.jpg" />
      <meta property="og:url" content="https://eanyu.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ean James Yu - Portfolio" />
      <meta name="twitter:description" content="Explore Ean James Yu's portfolio showcasing creative design, photography, and more!" />
      <meta name="twitter:image" content="/portfolio-collage.jpg" />
      <link rel="icon" href="/favicon.ico" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
