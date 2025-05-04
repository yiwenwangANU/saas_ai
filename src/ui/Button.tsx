import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "login" | "signup";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  const baseStyles =
    "px-3 py-2 font-semibold rounded-lg text-xs cursor-pointer";
  const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "py-2 bg-yellow-500 text-purple-950 rounded hover:bg-yellow-600",
    secondary:
      "py-2 bg-purple-900 text-yellow-500 rounded-full hover:bg-purple-950",
    login:
      "px-4 text-black bg-white border border-1 border-gray-200 hover:bg-gray-100",
    signup: "text-white bg-green-500 hover:bg-green-600",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
