import { cn } from "@/lib/cn";
import {
  ArrowRight as InternalLinkIcon,
  ExternalLink as ExternalLinkIcon,
} from "lucide-react";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type LinkButtonProps = LinkProps & {
  children: ReactNode;
  variant: "primary" | "secondary" | "text";
  size: "medium" | "large";
};

export function LinkButton({
  children,
  variant,
  size,
  ...props
}: LinkButtonProps) {
  const isExternal = props.href?.toString().startsWith("http");
  const Icon = isExternal ? ExternalLinkIcon : InternalLinkIcon;
  const classesChildren = cn(
    "inline-flex w-full justify-center gap-1 font-semibold transition-all duration-300 ease-in-out",
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
    <Link
      className={classesChildren}
      {...props}
      target={isExternal ? "_blank" : "_self"}
    >
      {children}
      <Icon className={classesIcon} />
    </Link>
  );
}
