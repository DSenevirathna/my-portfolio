"use client";
import React, { use } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { key } from 'lucide-react';

const links = [
    {
        name:"home",
        path: "/",
    },
    {
        name:"projects",
        path: "/projects",
    },
    {
        name:"skills",
        path: "/skills",
    },
    {
        name:"resume",
        path: "/resume",
    },
    {
        name:"contact",
        path: "/contact",
    }
]

const Nav = () => {
    const pathname  = usePathname();

  return (
    <nav className='flex gap-8'>
        {links.map((link ,index) => {
            return (
                <Link href={link.path} key={index} className={`${link.path === pathname && "text-primary border-b-2 border-primary"} capitalize font-medium hover:text-primary transition-all`}>
                    {link.name}
                </Link>
            )
        })}
    </nav>
  )
}

export default Nav
