import type { Conversation } from "@/lib/api";
import { StatusBadge } from "@/components/ui/StatusBadge";

interface Props {
  conversation?: Conversation;
}

export function ConversationThread({ conversation }: Props) {
  if (!conversation) {
    return <div className="card p-6 text-center text-textSecondary">اختر محادثة لعرض التفاصيل</div>;
  }

  return (
    <div className="card p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-textSecondary">العميل</p>
          <p className="font-semibold">{conversation.customerName}</p>
          <p className="text-xs text-textSecondary">{conversation.phone}</p>
        </div>
        <div className="flex items-center gap-2">
          <StatusBadge variant="info">{conversation.channel}</StatusBadge>
          <StatusBadge variant="neutral">{conversation.sentiment}</StatusBadge>
          <StatusBadge variant={conversation.status === "open" ? "success" : "neutral"}>{conversation.status}</StatusBadge>
        </div>
      </div>
      <div className="space-y-3">
        {conversation.messages.map((msg) => (
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
