import { NavLink } from "./nav-link";
import { BrandLogo } from "@/components/shared/brand-logo";
import { LinkButton } from "@/components/ui/link-button";
import { navLinks } from "@/data/nav-links";

export function DesktopHeader() {
  return (
    <nav className="mx-auto hidden h-16 max-w-7xl items-center justify-between p-4 md:flex">
      <BrandLogo />
      <ul className="flex items-center gap-8">
        {navLinks
          .filter((link) => link.label !== "Contact")
          .map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        <li>
          <LinkButton href="#contact" variant="primary" size="medium">
            Get in touch
          </LinkButton>
        </li>
      </ul>
    </nav>
  );
}
