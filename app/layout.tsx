import type { Metadata } from "next";
import "./globals.css";
import "./header-fixes.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://redhomes.com"),
  title: {
    default: "redhomes",
    template: "%s",
  },
  description: "redhomes",
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
