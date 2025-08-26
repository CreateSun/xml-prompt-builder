import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Professional XML Prompt Editor",
  description:
    "Professional XML prompt editor, help you to build xml-like prompt for AI Agents. Perfect for prompt engineers and AI enthusiasts.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "xml prompt",
    "xml editor",
    "xml prompt editor",
    "xml prompt builder",
    "xml prompt generator",
    "xml prompt editor"
  ],
  openGraph: {
    title: "Professional XML Prompt Editor",
    description:
      "Professional XML prompt editor, Help you xml-like prompt for AI Agents",
    images: ["/favicon.ico"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional XML Prompt Editor",
    description:
      "Professional XML prompt editor, Help you xml-like prompt for AI Agents",
    images: ["/favicon.ico"],
  },
  alternates: {
    canonical: "https://xmlprompt.online/",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Toaster />
          <Sonner />
          {children}
        </Providers>
      </body>
    </html>
  );
}
