import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Forklift Inspection Checklist | InspectPro Safety & Operations",
  description:
    "Standardize daily pre-shift forklift inspections, identify equipment issues early, and ensure OSHA safety compliance with InspectPro's digital inspection checklist.",
  keywords: [
    "Forklift inspection checklist",
    "OSHA forklift inspection",
    "pre-shift safety checklist",
    "equipment inspection software",
    "warehouse safety",
    "InspectPro",
  ],
  authors: [{ name: "InspectPro Team" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakartaSans.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
