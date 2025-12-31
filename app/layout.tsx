import type { Metadata } from "next";
import "./globals.css";
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { Providers } from "@/lib/providers/providers";

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-ibm",
  weight: ["400", "500", "600", "700"],
});

import { Cairo } from "next/font/google";
import { Providers } from "@/lib/providers/providers";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo" });
 main

export const metadata: Metadata = {
  title: "Ideal Agent | الوكيل المثالي",
  description: "الوكيل الذكي المثالي لخدمة العملاء، المبيعات، والأتمتة",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
    <html lang="ar" dir="rtl" className={ibmArabic.variable}>
      <body className="bg-background text-foreground font-ibm">

    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo bg-slate-50 text-slate-900">
 main
        <Providers>
          <div className="min-h-screen">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
