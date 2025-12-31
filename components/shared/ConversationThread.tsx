import type { Conversation } from "@/lib/api";
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
import { StatusBadge } from "@/components/ui/StatusBadge";

 main

interface Props {
  conversation?: Conversation;
}

export function ConversationThread({ conversation }: Props) {
  if (!conversation) {
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
    return <div className="card p-6 text-center text-textSecondary">اختر محادثة لعرض التفاصيل</div>;

    return <div className="card p-6 text-center text-slate-500">اختر محادثة لعرض التفاصيل</div>;
 main
  }

  return (
    <div className="card p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
          <p className="text-sm text-textSecondary">العميل</p>
          <p className="font-semibold">{conversation.customerName}</p>
          <p className="text-xs text-textSecondary">{conversation.phone}</p>
        </div>
        <div className="flex items-center gap-2">
          <StatusBadge variant="info">{conversation.channel}</StatusBadge>
          <StatusBadge variant="neutral">{conversation.sentiment}</StatusBadge>
          <StatusBadge variant={conversation.status === "open" ? "success" : "neutral"}>{conversation.status}</StatusBadge>

          <p className="text-sm text-slate-500">العميل</p>
          <p className="font-semibold">{conversation.customerName}</p>
          <p className="text-xs text-slate-500">{conversation.phone}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="badge">{conversation.channel}</span>
          <span className="badge">{conversation.sentiment}</span>
          <span className="badge">{conversation.status}</span>
 main
        </div>
      </div>
      <div className="space-y-3">
        {conversation.messages.map((msg) => (
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
          <div key={msg.id} className={`p-3 rounded-xl ${msg.from === "customer" ? "bg-muted" : "bg-primary/10"}`}>
            <p className="text-xs text-textSecondary mb-1">{msg.from === "customer" ? "العميل" : "Ideal Agent"}</p>
            <p className="text-sm">{msg.content}</p>
            <p className="text-[11px] text-textSecondary mt-1">{msg.time}</p>
          </div>
        ))}
      </div>
      <div className="p-4 border border-dashed border-primary/30 rounded-xl bg-primary/5">
        <p className="font-semibold mb-1">اقتراح الذكاء الاصطناعي</p>
        <p className="text-sm text-textSecondary">

          <div key={msg.id} className={`p-3 rounded-xl ${msg.from === "customer" ? "bg-slate-50" : "bg-brand/10"}`}>
            <p className="text-xs text-slate-500 mb-1">{msg.from === "customer" ? "العميل" : "Ideal Agent"}</p>
            <p className="text-sm">{msg.content}</p>
            <p className="text-[11px] text-slate-400 mt-1">{msg.time}</p>
          </div>
        ))}
      </div>
      <div className="p-4 border border-dashed border-brand/30 rounded-xl bg-brand/5">
        <p className="font-semibold mb-1">اقتراح الذكاء الاصطناعي</p>
        <p className="text-sm text-slate-600">
 main
          يمكننا الرد: "أهلًا {conversation.customerName}، تم العثور على طلبك وهو في مرحلة التجهيز. هل ترغب في إشعار عند الشحن؟"
        </p>
        <div className="mt-3 flex gap-2">
          <button className="btn-primary">إرسال</button>
          <button className="btn-secondary">تعديل</button>
        </div>
      </div>
    </div>
  );
}
