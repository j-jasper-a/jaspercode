"use client";

import { cn } from "@/lib/cn";
import { ArrowRight as ButtonIcon } from "lucide-react";
import { ComponentProps, ReactNode } from "react";

type LinkButtonProps = ComponentProps<"button"> & {
  children: ReactNode;
  onClick?: () => void;
  variant: "primary" | "secondary" | "text";
  size: "medium" | "large";
};

export function AppButton({
  children,
  onClick,
  variant,
  size,
  ...props
}: LinkButtonProps) {
  const classesChildren = cn(
    "inline-flex w-full cursor-pointer justify-center gap-1 font-semibold transition-all duration-300 ease-in-out",
    {
      "rounded-full bg-color-foreground-primary text-color-background-primary hover:bg-color-accent":
        variant === "primary",
      "rounded-full bg-color-foreground-primary/15 hover:bg-color-accent/20 hover:text-color-accent":
        variant === "secondary",
      "": variant === "text",
    },
    {
      "px-3 py-1.5 text-sm": size === "medium",
      "px-4 py-2 text-base": size === "large",
    },
  );

  const classesIcon = cn("opacity-50", {
    "mt-0.5 h-3.5 w-3.5": size === "medium",
    "mt-1 h-4 w-4": size === "large",
  });

  return (
    <button className={classesChildren} onClick={onClick} {...props}>
      {children}
      <ButtonIcon className={classesIcon} />
    </button>
  );
}
