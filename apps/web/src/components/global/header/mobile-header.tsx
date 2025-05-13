import { MobileMenu } from "./mobile-menu";
import { MobileMenuButton } from "./mobile-menu-button";

export function MobileHeader() {
  return (
    <nav className="relative flex items-center justify-between p-4 md:hidden">
      <span className="">J</span>
      <MobileMenuButton />
      <MobileMenu />
    </nav>
  );
}
