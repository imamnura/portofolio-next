// import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "../components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Imam Nur Arifin - Web Developer",
  description:
    "Portfolio of Imam Nur Arifin, a passionate web developer specializing in modern web technologies, React, Next.js, and innovative digital solutions.",
  keywords: "Imam Nur Arifin, Web Developer, React, Next.js, Portfolio",
  authors: [{ name: "Imam Nur Arifin" }],
  openGraph: {
    title: "Imam Nur Arifin - Web Developer",
    description:
      "Portfolio of Imam Nur Arifin, a passionate web developer specializing in modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
