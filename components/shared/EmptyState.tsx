interface Props {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({ title, description, action }: Props) {
  return (
    <div className="card p-6 text-center space-y-2 text-slate-600">
      <p className="font-semibold text-slate-800">{title}</p>
      {description && <p className="text-sm">{description}</p>}
      {action}
    </div>
  );
}
