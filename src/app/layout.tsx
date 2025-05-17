import "./globals.css";
import React from "react";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Platforma SOHO-Headless",
    description: "Testowa platforma",
    keywords: "SOHO B2B",
    robots: "noindex,nofollow",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
