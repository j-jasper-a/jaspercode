import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type CardProps = {
  hoverEffect?: boolean;
  children: ReactNode;
};

export function Card({ hoverEffect = true, children }: CardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col gap-2 overflow-hidden rounded-2xl px-4 py-4 md:px-8",
        hoverEffect
          ? "transition-all duration-300 ease-in-out hover:bg-color-foreground-primary/5"
          : "",
      )}
    >
      {children}
    </article>
  );
}
