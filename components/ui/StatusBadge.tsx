import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeStyles = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border",
  {
    variants: {
      variant: {
        success: "bg-success/10 text-success border-success/30",
        premium: "bg-premium/15 text-textPrimary border-premium/40",
        neutral: "bg-muted text-textSecondary border-border",
        info: "bg-primary/10 text-primary border-primary/30",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

interface StatusBadgeProps extends VariantProps<typeof badgeStyles> {
  children: React.ReactNode;
  className?: string;
}

export function StatusBadge({ children, variant, className }: StatusBadgeProps) {
  return <span className={cn(badgeStyles({ variant }), className)}>{children}</span>;
}
