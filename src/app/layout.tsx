import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextJS API notes",
  description: "Generated as note to remember NextJS API features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
