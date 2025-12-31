import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";
import { Providers } from "@/lib/providers/providers";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo" });

export const metadata: Metadata = {
  title: "Ideal Agent | الوكيل المثالي",
  description: "الوكيل الذكي المثالي لخدمة العملاء، المبيعات، والأتمتة",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo bg-slate-50 text-slate-900">
        <Providers>
          <div className="min-h-screen">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
