import { NavigationLink as NavLinkType } from "@/data/navigation-links";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavLink({ href, label, disabled }: NavLinkType) {
  return (
    <li>
      <Link
        href={disabled ? "#" : href}
        className={cn(
          "hover:text-accent-foreground text-sm transition-all duration-300",
          disabled && "pointer-events-none opacity-50",
        )}
      >
        {label}
      </Link>
    </li>
  );
}
