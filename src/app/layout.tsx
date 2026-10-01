import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Romell Duarte | Production Tech & Camera Operator",
  description:
    "Commercial production crew member and visual storyteller based in San Diego, California. Camera, grip, audio, focus pulling and on-set support.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skipLink" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
