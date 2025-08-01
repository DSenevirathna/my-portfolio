"use client";
import React, { use } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {motion} from 'framer-motion'

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
    <motion.nav 
      className='flex gap-8'
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.2}}
    >
        {links.map((link ,index) => {
            return (
              <motion.div
                key={index}
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.3 + index * 0.1}}
                whileHover={{scale: 1.05}}
              >
                <Link 
                  href={link.path} 
                  className={`capitalize font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    link.path === pathname 
                      ? 'text-primary bg-primary/20 border border-primary/30 backdrop-blur-sm' 
                      : 'text-white/80 hover:text-primary hover:bg-white/5 backdrop-blur-sm border border-transparent hover:border-white/10'
                  }`}
                >
                    {link.name}
                </Link>
              </motion.div>
            )
        })}
    </motion.nav>
  )
}

export default Nav
