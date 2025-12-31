import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
    <div className="flex flex-row-reverse bg-background text-textPrimary">
      <Sidebar />
      <div className="flex-1 min-h-screen">

    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-slate-50">
 main
        <Topbar />
        <main className="p-6 space-y-6">{children}</main>
      </div>
    </div>
  );
}
