import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sindhuja Kali Srinivasan — Engineering Leader & Startup Founder",
  description:
    "Engineering Manager and Tech Lead with 14 years of experience. Co-founder of MaidLink. Building real software for a real business.",
  openGraph: {
    title: "Sindhuja Kali Srinivasan — Engineering Leader & Startup Founder",
    description:
      "14 years of engineering leadership. Currently building MaidLink — a two-sided marketplace for professional cleaning services in Calgary.",
    type: "website",
  },
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
