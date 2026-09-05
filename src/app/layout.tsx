import type { Metadata } from "next";
import "./globals.css";
import { SmoothAnchors } from "@/components/smooth-anchors";

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
      <body>
        <SmoothAnchors />
        {children}
      </body>
    </html>
  );
}
