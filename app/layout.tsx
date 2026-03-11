import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude AI",
  description: "Claude AI Next.js App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
