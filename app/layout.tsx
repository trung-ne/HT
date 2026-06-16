import type { Metadata } from "next";
import "./globals.css";
import "./header-fixes.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://redhomes.com"),
  title: {
    default: "株式会社HTグローバル",
    template: "%s",
  },
  description: "株式会社HTグローバル | 日本不動産投資・仲介・賃貸管理",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
