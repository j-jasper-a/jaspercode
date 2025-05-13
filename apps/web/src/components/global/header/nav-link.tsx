import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
};

export function NavLink({ href, label }: NavLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className="text-size-secondary transition-all duration-300 hover:text-color-accent"
      >
        {label}
      </Link>
    </li>
  );
}
