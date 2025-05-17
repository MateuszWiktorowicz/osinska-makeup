import Link from "next/link";

interface NavItemProps {
  label: string;
  href: string;
  className?: string;
}

export default function NavItem({ label, href, className }: NavItemProps) {
  return (
    <Link href={href} className={`${className}`}>
      {label}
    </Link>
  );
}
