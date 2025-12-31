interface LoadingSkeletonProps {
  rows?: number;
}

export function LoadingSkeleton({ rows = 4 }: LoadingSkeletonProps) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, idx) => (
        <div key={idx} className="h-4 rounded-md bg-muted animate-pulse" />
      ))}
    </div>
  );
}
