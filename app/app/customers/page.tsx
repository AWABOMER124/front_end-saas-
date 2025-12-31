"use client";

import { useEffect, useState } from "react";
import { getCustomers, type Customer } from "@/lib/api";
import { DataTable } from "@/components/shared/DataTable";
codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { EmptyState } from "@/components/ui/EmptyState";

import { LoadingSkeleton } from "@/components/shared/LoadingSkeleton";
import { EmptyState } from "@/components/shared/EmptyState";
 main

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
codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
        <p className="text-sm text-textSecondary">بيانات العملاء</p>
        <h1 className="text-2xl font-bold text-textPrimary">العملاء</h1>

        <p className="text-sm text-slate-500">بيانات العملاء</p>
        <h1 className="text-2xl font-bold">العملاء</h1>
 main
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
