"use client";

import { useEffect, useState } from "react";
import { getCustomers, type Customer } from "@/lib/api";
import { DataTable } from "@/components/shared/DataTable";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { EmptyState } from "@/components/ui/EmptyState";

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCustomers().then((data) => {
      setCustomers(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-textSecondary">بيانات العملاء</p>
        <h1 className="text-2xl font-bold text-textPrimary">العملاء</h1>
      </div>
      {loading ? (
        <LoadingSkeleton rows={6} />
      ) : customers.length ? (
        <DataTable
          columns={[
            { header: "الاسم", accessor: (row) => <div className="font-semibold">{row.name}</div> },
            { header: "رقم الهاتف", accessor: (row) => row.phone },
            { header: "عدد الطلبات", accessor: (row) => row.ordersCount },
            { header: "آخر تواصل", accessor: (row) => row.lastContact },
          ]}
          data={customers}
        />
      ) : (
        <EmptyState title="لا يوجد عملاء" description="ابدأ بإضافة عملاء أو ربط وووكميرس" />
      )}
    </div>
  );
}
