import React from 'react';
import Image from 'next/image';

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  return <aside className="fixed top-0 left-0 z-40 w-60 h-screen"></aside>;
}
