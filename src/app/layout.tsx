import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahmat Azrima Portfolio",
  description: "Portofolio modern untuk UI/UX Designer dengan Next.js dan TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
