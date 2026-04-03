import { Link } from "react-router";

type Variant = "primary" | "secondary" | "inverse";

interface CtaButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "border border-stone-300 text-stone-700 hover:border-stone-500",
  inverse: "bg-white text-brand hover:bg-stone-100",
};

export function CtaButton({ to, children, variant = "primary", className = "", onClick }: CtaButtonProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`inline-block px-6 py-3 text-sm tracking-wide transition-colors rounded-lg ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
