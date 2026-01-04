import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name - Frontend Developer",
  description: "Frontend Developer Portfolio",
};

// Root layout is now only used for redirects
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
