"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`px-3 py-2 rounded ${isActive ? 'bg-azulNavbarFica' : 'hover:bg-azulEmBaixo'}`} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
