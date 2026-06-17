import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MD&A Turbines | Power Generation Expertise Beyond the OEM",
  description:
    "Mechanical Dynamics & Analysis — full-service OEM-alternative for gas turbines, steam turbines, and generators. Services, parts, repairs, and engineering support since 1982.",
  keywords:
    "gas turbine services, steam turbine repair, generator services, OEM alternative, turbine parts, MD&A, Mechanical Dynamics Analysis",
  openGraph: {
    title: "MD&A | Power Generation Expertise Beyond the OEM",
    description:
      "Full-service OEM-alternative for turbine and generator services, parts, and repairs since 1982.",
    url: "https://www.mdaturbines.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
