import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";

interface ButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
  className?: string;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "bg-[#007AFF] rounded-[30px] outline-none text-sm text-center px-6 py-4 text-white w-full max-w-[307px]",
        className
      )}
    >
      {children}
    </button>
  );
}
