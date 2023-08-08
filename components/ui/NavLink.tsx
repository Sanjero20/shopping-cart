'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

function NavLink({ children, href }: LinkProps) {
  const pathname = usePathname();
  const styles = pathname === href ? 'border-b-2 border-black' : '';

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}

export default NavLink;
