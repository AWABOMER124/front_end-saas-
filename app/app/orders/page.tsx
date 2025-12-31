"use client";

import { useEffect, useState } from "react";
import { getOrders, type Order } from "@/lib/api";
import { DataTable } from "@/components/shared/DataTable";
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { StatusBadge } from "@/components/ui/StatusBadge";

import { LoadingSkeleton } from "@/components/shared/LoadingSkeleton";
 main

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrders().then((data) => {
      setOrders(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-4">
      <div>
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
        <p className="text-sm text-textSecondary">الطلبات الأخيرة</p>
        <h1 className="text-2xl font-bold text-textPrimary">الطلبات</h1>

        <p className="text-sm text-slate-500">الطلبات الأخيرة</p>
        <h1 className="text-2xl font-bold">الطلبات</h1>
 main
      </div>
      {loading ? (
        <LoadingSkeleton rows={6} />
      ) : (
        <DataTable
          columns={[
            { header: "رقم الطلب", accessor: (row) => row.id },
codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
            {
              header: "الحالة",
              accessor: (row) => (
                <StatusBadge
                  variant={row.status === "مكتمل" ? "success" : row.status === "جارٍ المعالجة" ? "info" : "neutral"}
                >
                  {row.status}
                </StatusBadge>
              ),
            },

            { header: "الحالة", accessor: (row) => <span className="badge">{row.status}</span> },
 main
            { header: "المبلغ", accessor: (row) => `${row.amount} ر.س` },
            { header: "التاريخ", accessor: (row) => row.date },
            { header: "العميل", accessor: (row) => row.customer },
          ]}
          data={orders}
        />
      )}
    </div>
  );
}
