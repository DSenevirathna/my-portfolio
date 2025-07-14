"use client";

import React from 'react'
import {Sheet,SheetContent , SheetTrigger} from '../ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci';


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
     name: "skills",
        path : '/skills'
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
        <SheetTrigger className="flex justify-center items-center ">
            <CiMenuFries className='text-[32px] text-primary cursor-pointer'/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className='mt-32 mb-40 text-center text-2xl'>
                {/*logo */}
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>Devdini<span className='text-primary'>.</span></h1>
                </Link>
            </div>

            {/*nav */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link,index)=>{
                        return (
                        <Link href={link.path} key={index} className={'text-xl capitalize hover:text-primary transition-all'} >
                            {link.name}
                        </Link>
                        );
                    })}
                </nav>
        </SheetContent>
    </Sheet>
    )
}

export default MobileNav
