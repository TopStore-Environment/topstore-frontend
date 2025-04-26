import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import React from "react";

interface ScrollableListProps {
  children: React.ReactNode;
}

export function ScrollableList({ children }: ScrollableListProps) {
  return (
    <ScrollAreaPrimitive.Root className="relative w-full h-[330px] overflow-hidden">
      <ScrollAreaPrimitive.Viewport className="w-full h-full rounded-md">
        {children}
      </ScrollAreaPrimitive.Viewport>

      <ScrollAreaPrimitive.Scrollbar
        orientation="vertical"
        className="absolute right-0 top-0 bottom-0 w-2 flex touch-none select-none transition-colors bg-transparent hover:bg-gray-400"
      >
        <ScrollAreaPrimitive.Thumb className="relative flex-1 bg-gray-700 rounded-full" />
      </ScrollAreaPrimitive.Scrollbar>
    </ScrollAreaPrimitive.Root>
  );
}
