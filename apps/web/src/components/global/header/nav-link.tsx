import { NavigationLink as NavLinkType } from "@/data/navigation-links";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavLink({ href, label, disabled }: NavLinkType) {
  return (
    <li>
      <Link
        href={disabled ? "#" : href}
        className={cn(
          "text-sm transition-all duration-300 hover:text-accent-foreground",
          disabled && "pointer-events-none opacity-50",
        )}
      >
        {label}
      </Link>
    </li>
  );
}
