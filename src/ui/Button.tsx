import { ComponentPropsWithoutRef, FC, ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "login" | "signup" | "getStart";
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  const baseStyles = "px-4 py-3 font-semibold rounded-lg  cursor-pointer";
  let variantStyles;
  switch (variant) {
    case "primary":
      variantStyles =
        "py-3 bg-yellow-500 text-purple-950 rounded hover:bg-yellow-600";
      break;
    case "secondary":
      variantStyles =
        "py-3 bg-purple-900 text-yellow-500 rounded-full hover:bg-purple-950";
      break;
    case "login":
      variantStyles =
        "px-5 text-black bg-white border border-1 border-gray-200 hover:bg-gray-100";
      break;
    case "signup":
      variantStyles = "text-white bg-emerald-500 hover:bg-green-600";
      break;
    case "getStart":
      variantStyles = "text-emerald-500 bg-white text-lg px-5";
      break;
  }

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
