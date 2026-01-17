import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-medium transition-all duration-300 ease-out cursor-pointer rounded-lg font-poppins";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#2a8fb5] to-[#277fa0] text-white hover:from-[#238ca0] hover:to-[#1f6f8a] shadow-lg hover:shadow-xl hover:shadow-blue-500/30",
    secondary:
      "bg-white text-[#277fa0] border-2 border-[#277fa0] hover:bg-[#277fa0] hover:text-white shadow-md hover:shadow-lg",
    outline:
      "bg-transparent text-[#277fa0] border-2 border-[#277fa0] hover:bg-[#277fa0]/10",
  };

  const sizeStyles = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
