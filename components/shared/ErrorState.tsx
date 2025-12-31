interface Props {
  message: string;
  onRetry?: () => void;
}

export function ErrorState({ message, onRetry }: Props) {
  return (
    <div className="card p-6 text-center space-y-3 text-rose-700">
      <p className="font-semibold">حدث خطأ</p>
      <p className="text-sm">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="btn-secondary">
          إعادة المحاولة
        </button>
      )}
    </div>
  );
}
