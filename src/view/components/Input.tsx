import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

export function Input({ name, ...props }: InputProps) {
  return (
    <div>
      <input
        {...props}
        name={name}
        id={name}
        className={cn(
          "outline-none rounded-[30px] border border-gray-400 w-full max-w-[307px] px-6 py-4"
        )}
      />
    </div>
  );
}
