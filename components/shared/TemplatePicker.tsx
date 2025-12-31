const templates = [
  "تأكيد استلام الطلب",
  "طلب تقييم الخدمة",
  "طلب رقم الطلب",
  "إعلام بشحنة جديدة",
];

export function TemplatePicker() {
  return (
    <div className="card p-4 space-y-2">
      <p className="font-semibold">القوالب الجاهزة</p>
      <div className="grid grid-cols-2 gap-2">
        {templates.map((tpl) => (
          <button key={tpl} className="btn-secondary justify-start">{tpl}</button>
        ))}
      </div>
    </div>
  );
}
