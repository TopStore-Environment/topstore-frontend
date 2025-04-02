import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./Spinner";

interface ButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
  className?: string;
}

export function Button({
  children,
  className,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        `bg-blue-150 rounded-2xl outline-none text-sm flex items-center justify-center px-6 h-12 hover:bg-blue-700 transition-colors
         text-white disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed`,
        className
      )}
    >
      {isLoading && <Spinner className="w-5 h-5" />}
      {!isLoading && children}
    </button>
  );
}
