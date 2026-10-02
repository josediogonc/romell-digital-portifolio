import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: `Commercial production crew member and visual storyteller based in ${siteConfig.location}. Camera, grip, audio, focus pulling and on-set support.`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skipLink" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
