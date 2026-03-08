import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuvabe Studios | Product Design and Engineering for Startups",
  description:
    "Yuvabe Studios helps startups design, build, and scale digital products with product strategy, UX/UI, and full-stack engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
