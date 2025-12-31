"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  MessageCircle,
  Users,
  ShoppingBag,
  Package,
  Bot,
  Cable,
  FileText,
  Settings,
  LifeBuoy,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "لوحة التحكم", href: "/app", icon: BarChart3 },
  { label: "المحادثات", href: "/app/conversations", icon: MessageCircle },
  { label: "العملاء", href: "/app/customers", icon: Users },
  { label: "الطلبات", href: "/app/orders", icon: ShoppingBag },
  { label: "المنتجات", href: "/app/products", icon: Package },
  { label: "الأتمتة", href: "/app/automations", icon: Bot },
  { label: "القنوات", href: "/app/channels", icon: Cable },
  { label: "التقارير", href: "/app/reports", icon: FileText },
  { label: "الإعدادات", href: "/app/settings", icon: Settings },
  { label: "الدعم", href: "#support", icon: LifeBuoy },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-primary text-primary-foreground min-h-screen p-5 flex flex-col gap-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-xs opacity-80">Perfect Team – Technology Solutions</p>
          <p className="font-bold text-lg">Ideal Agent</p>
          <p className="text-[11px] text-primary-foreground/80 bg-primaryLight/30 rounded-full px-2 py-1 inline-block">
            وضع العرض التجريبي
          </p>
        </div>
      </div>
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition-colors border-r-4",
                active
                  ? "bg-surface/10 text-premium border-premium"
                  : "text-primary-foreground/80 border-transparent hover:bg-surface/5",
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-3 rounded-xl border border-primaryLight/30 bg-primaryLight/20 text-sm text-primary-foreground">
        <p className="font-semibold">دعم سريع</p>
        <p className="text-xs mt-1 opacity-90">فريق Perfect Team جاهز للمساعدة</p>
      </div>
    </aside>
  );
}
