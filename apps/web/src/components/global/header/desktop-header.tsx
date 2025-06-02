import { NavLink } from "./nav-link";
import { BrandLogo } from "@/components/shared/brand-logo";
import { Button } from "@/components/ui/button";
import { navigationLinks } from "@/data/navigation-links";
import Link from "next/link";

export function DesktopHeader() {
  return (
    <nav className="mx-auto hidden h-16 max-w-7xl items-center justify-between p-4 md:flex">
      <BrandLogo />
      <ul className="flex items-center gap-8">
        {navigationLinks
          .filter((link) => link.label !== "Contact")
          .map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        <li>
          <Button asChild variant="default" size="sm">
            <Link href="#contact">Get in touch</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
