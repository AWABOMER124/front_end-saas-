import { ReactNode } from "react";

type Column<T> = {
  header: string;
  accessor: (row: T) => ReactNode;
};

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyLabel?: string;
}

export function DataTable<T>({ columns, data, emptyLabel }: DataTableProps<T>) {
  if (!data.length) {
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
    return <div className="card p-6 text-center text-textSecondary">{emptyLabel ?? "لا توجد بيانات"}</div>;

    return <div className="card p-6 text-center text-slate-500">{emptyLabel ?? "لا توجد بيانات"}</div>;
 main
  }

  return (
    <div className="overflow-x-auto card">
      <table className="min-w-full text-sm">
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
        <thead className="bg-muted text-textSecondary">

        <thead className="bg-slate-50 text-slate-500">
 main
          <tr>
            {columns.map((col) => (
              <th key={col.header} className="px-4 py-3 text-start font-semibold">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
            <tr key={idx} className="border-t border-border">

            <tr key={idx} className="border-t border-slate-100">
 main
              {columns.map((col) => (
                <td key={col.header} className="px-4 py-3">
                  {col.accessor(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
