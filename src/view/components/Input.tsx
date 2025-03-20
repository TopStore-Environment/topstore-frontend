import { ComponentProps, forwardRef } from "react";
import { cn } from "../../app/utils/cn";
import { CrossCircledIcon } from "@radix-ui/react-icons";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, error, ...props }, ref) => {
    return (
      <div>
        <input
          {...props}
          ref={ref}
          name={name}
          id={name}
          className={cn(
            "outline-none rounded-[30px] border border-gray-400 w-full max-w-[307px] px-6 py-4"
          )}
        />

        {error && (
          <div className="flex gap-1  items-center mt-2 text-red-900">
            <CrossCircledIcon />
            <span className=" text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  }
);
