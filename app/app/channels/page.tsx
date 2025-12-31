"use client";

import { Plug2, WifiOff } from "lucide-react";

export default function ChannelsPage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-slate-500">التكاملات</p>
        <h1 className="text-2xl font-bold">القنوات</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-4 space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p className="text-sm text-slate-500">حالة الاتصال: متصل</p>
            </div>
            <Plug2 className="h-5 w-5 text-brand" />
          </div>
          <p className="text-sm text-slate-600">اسم الانستانس: ideal-agent-demo</p>
          <div className="flex gap-2">
            <button className="btn-primary">اختبار</button>
            <button className="btn-secondary">إدارة الاتصال</button>
          </div>
        </div>
        <div className="card p-4 space-y-2 opacity-70">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Instagram / Facebook</p>
              <p className="text-sm text-slate-500">قريباً</p>
            </div>
            <WifiOff className="h-5 w-5 text-slate-400" />
          </div>
          <p className="text-sm text-slate-600">سيتم دعم الرسائل الواردة والإشعارات قريباً.</p>
        </div>
      </div>
    </div>
  );
}
