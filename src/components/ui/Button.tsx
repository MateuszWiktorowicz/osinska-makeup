import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonVariant = "action" | "info" | "contact";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  variant = "action",
  children,
  ...props
}) => {
  const baseClasses =
    "px-6 py-2 rounded-full cursor-pointer transition duration-300 hover:scale-105";

  const variantClasses: Record<ButtonVariant, string> = {
    action:
      "bg-primary-200 border border-primary text-accent hover:bg-transparent hover:text-primary",
    info: "border border-primary text-accent hover:bg-primary hover:text-background",
    contact:
      "border border-accent text-accent hover:bg-accent hover:text-background",
  };

  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], props.className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
