"use client";

import React from 'react'
import {Sheet,SheetContent , SheetTrigger, SheetTitle} from '../ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci';
import {motion} from 'framer-motion'


const links = [
   {
     name: "home",
        path : '/'
   },
   {
     name: "projects",
        path : '/projects'
   },
   
   {
     name: "resume",
        path : '/resume'
   },
   {
     name: "contact",
        path : '/contact'
   },

]

const MobileNav = () => {
    const pathname = usePathname();

    return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <motion.div
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300"
            >
              <CiMenuFries className='text-[24px] text-primary cursor-pointer'/>
            </motion.div>
        </SheetTrigger>
        <SheetContent className="flex flex-col bg-white/5 backdrop-blur-sm border-white/10">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <motion.div 
              className='mt-32 mb-40 text-center text-2xl'
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2}}
            >
                {/*logo */}
                <Link href="/">
                    <motion.h1 
                      className='text-4xl font-semibold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent'
                      whileHover={{scale: 1.05}}
                    >
                      Devdini<span className='text-primary'>.</span>
                    </motion.h1>
                </Link>
            </motion.div>

            {/*nav */}
            <motion.nav 
              className='flex flex-col justify-center items-center gap-8'
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.3}}
            >
                {links.map((link,index)=>{
                    return (
                      <motion.div
                        key={index}
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{delay: 0.4 + index * 0.1}}
                        whileHover={{scale: 1.05}}
                      >
                        <Link 
                          href={link.path} 
                          className={`text-xl capitalize px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:text-primary transition-all duration-300 ${
                            link.path === pathname ? 'text-primary bg-primary/20 border-primary/30' : 'text-white/80'
                          }`}
                        >
                            {link.name}
                        </Link>
                      </motion.div>
                    );
                })}
            </motion.nav>
        </SheetContent>
    </Sheet>
    )
}

export default MobileNav
