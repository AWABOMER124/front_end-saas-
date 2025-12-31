"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { KpiCard } from "@/components/ui/KpiCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { EmptyState } from "@/components/ui/EmptyState";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { DataTable } from "@/components/shared/DataTable";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CheckCircle2, MessageSquare, Shield } from "lucide-react";

const chartSample = [
  { name: "اليوم", value: 48 },
  { name: "أمس", value: 36 },
  { name: "قبل يومين", value: 54 },
];

export default function ThemePreviewPage() {
  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <div className="flex flex-row-reverse">
        <Sidebar />
        <div className="flex-1">
          <Topbar />
          <main className="p-6 space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-textSecondary">معاينة العناصر</p>
              <h1 className="text-2xl font-bold">نظام الألوان والخطوط</h1>
            </div>

            <section className="grid md:grid-cols-4 gap-4">
              <KpiCard label="الردود اليوم" value="128" icon={<MessageSquare className="h-5 w-5" />} />
              <KpiCard label="متوسط زمن الرد" value="42 ثانية" icon={<ClockIcon />} helper="-8%" />
              <KpiCard label="محادثات بانتظار" value="5" icon={<Shield className="h-5 w-5" />} />
              <KpiCard label="رضا العملاء" value="92%" icon={<CheckCircle2 className="h-5 w-5" />} />
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold">الأزرار والشارات</h2>
              <div className="flex flex-wrap gap-3 items-center">
                <button className="btn-primary">إجراء أساسي</button>
                <button className="btn-secondary">إجراء ثانوي</button>
                <button className="btn-success">إجراء نجاح</button>
                <StatusBadge variant="success">ناجح</StatusBadge>
                <StatusBadge variant="info">معلومة</StatusBadge>
                <StatusBadge variant="premium">مميز</StatusBadge>
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-4">
              <div className="card p-4 space-y-3">
                <h3 className="font-semibold">جدول بسيط</h3>
                <DataTable
                  columns={[
                    { header: "الاسم", accessor: (row) => row.name },
                    { header: "الحالة", accessor: (row) => <StatusBadge variant="success">جاهز</StatusBadge> },
                  ]}
                  data={[{ name: "عميل تجريبي" }]}
                />
              </div>
              <div className="card p-4 space-y-3">
                <h3 className="font-semibold">مخطط</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={chartSample}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="hsl(var(--primary-light))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-4">
              <EmptyState
                title="حالة فارغة"
                description="هنا يظهر نص توضيحي حول الخطوة التالية"
                icon={<MessageSquare className="h-5 w-5" />}
                actions={[{ label: "إضافة عنصر", variant: "primary" }]}
              />
              <div className="card p-4 space-y-3">
                <h3 className="font-semibold">عناصر تحميل</h3>
                <LoadingSkeleton rows={5} />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

function ClockIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
