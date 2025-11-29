import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Albert Nahas | Senior Front-End Engineer",
  description: "Chat with Albert's AI portfolio assistant. Learn about his experience at Doctolib, Miro, and LeasePlan. Expert in React, TypeScript, and AI integration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
