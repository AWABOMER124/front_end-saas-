"use client";

import { Bell, Search } from "lucide-react";
import { useAuth } from "@/lib/providers/auth-provider";
import { useRouter } from "next/navigation";

export function Topbar() {
  const { tenant, user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface shadow-sm">
      <div>
        <p className="text-xs text-textSecondary">المتجر</p>
        <p className="font-bold text-textPrimary">{tenant?.name ?? "متجر مثالي"}</p>
      </div>
      <div className="flex items-center gap-4 flex-1 justify-end">
        <div className="relative w-full max-w-md">
          <input
            type="search"
            placeholder="بحث في العملاء / الطلبات / المحادثات"
            className="input w-full pe-11"
          />
          <Search className="w-4 h-4 text-textSecondary absolute left-3 top-3" />
        </div>
        <button className="p-2 rounded-full border border-border hover:bg-muted text-textPrimary transition">
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2 px-3 py-2 bg-muted text-textPrimary border border-border rounded-xl">
          <div className="h-8 w-8 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary">
            {user?.name?.[0] ?? "أ"}
          </div>
          <div className="text-sm">
            <p className="font-semibold">{user?.name ?? "مالك المتجر"}</p>
            <button onClick={handleLogout} className="text-xs text-primary hover:text-primaryLight">
              تسجيل خروج
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
