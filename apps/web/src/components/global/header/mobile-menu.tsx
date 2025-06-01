"use client";

import { navLinks } from "@/config/nav-links";
import { cn } from "@/lib/cn";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectIsMenuOpen, menuClose } from "@/store/slices/menu-slice";
import Link from "next/link";
import { useEffect } from "react";

export function MobileMenu() {
  const isMenuOpen = useAppSelector(selectIsMenuOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <div className="absolute top-full left-0 h-full w-full">
      <div
        className={cn(
          "absolute top-0 left-0 h-screen w-full transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "pointer-events-auto bg-color-background-primary/75 backdrop-blur-xs"
            : "pointer-events-none bg-color-background-primary/0 backdrop-blur-none",
        )}
        onClick={() => dispatch(menuClose())}
      />
      <div
        className={cn(
          "w-full origin-top bg-color-background-primary shadow-md shadow-black transition-all duration-300 ease-in-out",
          isMenuOpen ? "scale-y-100" : "scale-y-0",
        )}
      >
        <ul className="flex h-full flex-col items-center justify-center">
          {navLinks.map((link) => (
            <li key={link.href} className="w-full">
              <Link
                href={link.disabled ? "#" : link.href}
                onClick={link.disabled ? () => {} : () => dispatch(menuClose())}
              >
                <div
                  className={cn(
                    "w-full p-8 text-center hover:text-color-accent",
                    link.disabled && "pointer-events-none opacity-50",
                  )}
                >
                  {link.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
