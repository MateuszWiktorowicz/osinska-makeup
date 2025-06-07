import "./globals.css";
import React from "react";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Osińska Makeup Kobido",
    description: "Testowa platforma",
    keywords: "kobido, makeup, makijaz, masaz",
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
