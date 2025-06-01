import { NavLink } from "./nav-link";
import { BrandLogo } from "@/components/shared/brand-logo";
import { LinkButton } from "@/components/ui/link-button";
import { navigationLinks } from "@/data/navigation-links";

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
          <LinkButton href="#contact" variant="primary" size="medium">
            Get in touch
          </LinkButton>
        </li>
      </ul>
    </nav>
  );
}
