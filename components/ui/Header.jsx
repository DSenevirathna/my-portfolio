 import React from "react";
 import Link from "next/link";
 import {Button} from "../ui/button";
 import Nav from "../ui/Nav";
import MobileNav from "./MobileNav";


 const Header = () => {
   return (
     <header className="py-10 px-10 xl:py-12 ">
        <div className="container mx-auto flex justify-between items-center">
            {/*logo*/}

            <Link href="/">
                <h1 className="text-3xl font-semibold">
                    Devdini <span className="text-primary">.</span>
                </h1>
            </Link>

            {/*desktop nav hire me button*/}
            <div className="hidden xl:flex items-center gap-6 ">
                <Nav />
                <Link href="/contact">
                    <Button>Hire me</Button>
                </Link>
            </div>


            {/*mobile nav*/}
            <div className="xl:hidden">
                
               <MobileNav/>
                
            </div>
        </div>
     </header>
   )
 }
 
 export default Header
 