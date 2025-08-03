"use client";
import React from 'react'
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
      className='flex gap-6'
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.2}}
    >
        {links.map((link ,index) => {
            const isActive = link.path === pathname;
            return (
              <motion.div
                key={index}
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.3 + index * 0.1}}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="relative"
              >
                <Link 
                  href={link.path} 
                  className={`capitalize font-medium px-5 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 group relative overflow-hidden ${
                    isActive
                      ? 'text-primary bg-primary/20 border border-primary/30 backdrop-blur-sm shadow-lg shadow-primary/20' 
                      : 'text-white/80 hover:text-primary hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20 hover:shadow-lg hover:shadow-white/5'
                  }`}
                >
                    {/* Background gradient effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    
                  
                    
                    {/* Text */}
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                        layoutId="activeTab"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                </Link>
                
                {/* Hover indicator */}
                {!isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  />
                )}
              </motion.div>
            )
        })}
    </motion.nav>
  )
}

export default Nav
