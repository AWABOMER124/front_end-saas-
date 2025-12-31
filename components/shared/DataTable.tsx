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
    return <div className="card p-6 text-center text-slate-500">{emptyLabel ?? "لا توجد بيانات"}</div>;
  }

  return (
    <div className="overflow-x-auto card">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-50 text-slate-500">
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
            <tr key={idx} className="border-t border-slate-100">
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
