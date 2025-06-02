"use client";

import { BrandLogo } from "@/components/shared/brand-logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationLinks } from "@/data/navigation-links";
import { cn } from "@/lib/utils";
import { Menu as MobileMenuIcon } from "lucide-react";
import Link from "next/link";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <MobileMenuIcon />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <div className="flex h-full w-full flex-col justify-between px-8 py-4">
          <SheetClose asChild>
            <div className="h-8 w-auto">
              <BrandLogo />
            </div>
          </SheetClose>
          <nav className="h-full">
            <ul className="flex h-full flex-col items-center justify-center">
              {navigationLinks.map(({ label, href, disabled }) => (
                <li key={href} className="w-full">
                  <SheetClose asChild>
                    <Link
                      href={disabled ? "#" : href}
                      className={cn(
                        "flex gap-2 py-4 text-4xl",
                        disabled && "pointer-events-none opacity-50",
                      )}
                    >
                      <span>{label}</span>
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>
          <div></div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
