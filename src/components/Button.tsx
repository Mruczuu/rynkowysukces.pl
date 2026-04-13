import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "default",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold tracking-wide uppercase transition-all duration-200 cursor-pointer rounded-lg";

  const variants = {
    primary:
      "bg-gold text-black hover:bg-gold-light shadow-[0_0_30px_rgba(201,168,76,0.15)] hover:shadow-[0_0_40px_rgba(201,168,76,0.25)]",
    secondary:
      "bg-white text-black hover:bg-gray-100",
    outline:
      "border-2 border-gold text-gold hover:bg-gold hover:text-black",
  };

  const sizes = {
    default: "px-8 py-3.5 text-sm",
    lg: "px-10 py-4.5 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} disabled:pointer-events-none disabled:opacity-50`}
    >
      {children}
    </button>
  );
}
