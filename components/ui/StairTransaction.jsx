"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'

//components
import Stairs from './Stairs'
import { Dhurjati } from 'next/font/google'



const StairTransaction = () => {
    const pathname = usePathname();
  return (
    <>
        <AnimatePresence mode='wait'>
            <div key={pathname}>
                    <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
                        <Stairs/>
                    
                    </div>
                    <motion.div className='h-screen w-screen fixed bg-background  top-0 
                        pointer-events-none' 
                        initial = {{opacity:1}}
                        animate ={{opacity:0,
                            transition:{
                                delay:1,
                                duration: 0.4,
                                ease:"easeInOut",
                            
                            }
                        }}

                    />
                    
            </div>
        </AnimatePresence>
    </>
    
  )
}

export default StairTransaction
