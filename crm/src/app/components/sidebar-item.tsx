import React from 'react';
import Image from 'next/image';

export interface SidebarItemProps {
  children: React.ReactNode;
  pathname: string;
  src: string;
  alt: string;
}

export default function SidebarItem({
  children,
  pathname,
  src,
  alt,
}: SidebarItemProps) {
  return (
    <li>
      <a href={pathname}>
        <Image className="ml-5" width={18} height={18} src={src} alt={alt} />
        <span className="font-medium text-zinc-50">{children}</span>
      </a>
    </li>
  );
}
