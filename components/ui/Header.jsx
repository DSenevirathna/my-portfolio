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
                <a href="mailto:devdinichaniya2001@gmail.com?subject=Hiring%20Inquiry%20-%20Devdini%20Senevirathna&body=Hi%20Devdini,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0D%0A%0D%0APlease%20let%20me%20know%20when%20you're%20available%20for%20a%20conversation.%0D%0A%0D%0ABest%20regards,">
                    <Button>Hire me</Button>
                </a>
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
 