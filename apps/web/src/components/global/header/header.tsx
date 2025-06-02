"use client";

import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

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
        `sticky top-0 left-0 z-10 w-full bg-background shadow-background transition-shadow duration-300`,
        scrolled ? "shadow-2xl" : "",
      )}
    >
      <MobileHeader />
      <DesktopHeader />
    </div>
  );
}
