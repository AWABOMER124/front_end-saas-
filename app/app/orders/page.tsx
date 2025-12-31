"use client";

import { useEffect, useState } from "react";
import { getOrders, type Order } from "@/lib/api";
import { DataTable } from "@/components/shared/DataTable";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { StatusBadge } from "@/components/ui/StatusBadge";

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
        <p className="text-sm text-textSecondary">الطلبات الأخيرة</p>
        <h1 className="text-2xl font-bold text-textPrimary">الطلبات</h1>
      </div>
      {loading ? (
        <LoadingSkeleton rows={6} />
      ) : (
        <DataTable
          columns={[
            { header: "رقم الطلب", accessor: (row) => row.id },
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
