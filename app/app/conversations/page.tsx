"use client";

import { useEffect, useState } from "react";
import { getConversations, type Conversation } from "@/lib/api";
import { ConversationThread } from "@/components/shared/ConversationThread";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { BadgeAlert } from "lucide-react";

export default function ConversationsPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [active, setActive] = useState<Conversation>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getConversations().then((data) => {
      setConversations(data);
      setActive(data[0]);
      setLoading(false);
    });
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="card p-4 space-y-3 h-fit md:sticky md:top-6">
        <div className="flex items-center justify-between">
          <p className="font-semibold">المحادثات</p>
          <span className="badge">{conversations.length}</span>
        </div>
        <input placeholder="بحث" className="w-full input" />
        {loading ? (
          <LoadingSkeleton rows={6} />
        ) : (
          <div className="space-y-2">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setActive(conv)}
                className={`w-full text-right p-3 rounded-xl border transition ${
                  active?.id === conv.id ? "border-primary bg-primary/10" : "border-border hover:bg-muted"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{conv.customerName}</p>
                  <StatusBadge variant="info">{conv.channel}</StatusBadge>
                </div>
                <p className="text-xs text-textSecondary">آخر تواصل: {conv.lastMessageAt}</p>
                <div className="flex items-center gap-2 mt-1">
                  <StatusBadge variant="neutral">{conv.sentiment}</StatusBadge>
                  {conv.status !== "closed" && (
                    <StatusBadge variant={conv.status === "open" ? "success" : "premium"}>
                      {conv.status === "open" ? "نشط" : "بانتظار"}
                    </StatusBadge>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="md:col-span-2 space-y-4">
        <ConversationThread conversation={active} />
        <div className="card p-4 flex items-center gap-3 bg-primary/5 border border-primary/10 text-textPrimary">
          <BadgeAlert className="h-5 w-5" />
          <div>
            <p className="font-semibold">إجراءات سريعة</p>
            <p className="text-sm">تعيين لموظف • تصعيد • طلب رقم الطلب • إرسال قالب جاهز</p>
          </div>
        </div>
      </div>
    </div>
  );
}
