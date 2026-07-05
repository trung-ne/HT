import type { Metadata } from "next";
import "./globals.css";
import "./header-fixes.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://htglobal.jp"),
  title: {
    default: "株式会社HTグローバル",
    template: "%s",
  },
  description: "株式会社HTグローバル | 不動産の売買・仲介・賃貸・管理、海外投資向け不動産情報提供及びコンサルティング",
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
