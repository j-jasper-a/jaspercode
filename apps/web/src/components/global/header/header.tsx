"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        `bg-background sticky left-0 top-0 z-10 w-full shadow-black/50 transition-shadow duration-300`,
        scrolled ? "shadow-lg" : "",
      )}
    >
      <MobileHeader />
      <DesktopHeader />
    </div>
  );
}
