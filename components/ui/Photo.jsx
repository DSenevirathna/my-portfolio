"use client"

import React from 'react'
import {motion} from 'framer-motion'
import Image  from 'next/image'
import profilePic from '@/public/myPic.png' 

const Photo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">

    
      <motion.div
            initial={{opacity:0}}
            animate = {{
              opacity:1,
              transition:{delay :2 , duration : 0.4 , ease:"easeIn"},
            }}
      >
          {/*image*/}
            <motion.div
              initial= {{opacity :0}}
              animate={{
                opacity: 1,
                transition : {delay : 2.4 , duration: 0.4 , ease:"easeInOut"},
              }}
              className="relative w-[310px] h-[310px] xl:w-[420px] xl:h-[420px] flex items-center justify-center"
            >
              <Image
                src={profilePic}
                priority
                quality={100}
                fill
                alt='my-photo'
                className=' object-cover rounded-full pb-0 pr-10'
                style={{ objectPosition: 'center 100%' }}
              />
            </motion.div>

             {/*circle*/}
             <motion.svg className="absolute inset-0 w-[310px] h-[310px] xl:w-[420px] xl:h-[420px]" 
              fill="transparent"
              viewBox="0 0 506 506"
              xmlns="http://www.w3.org/2000/svg"


             >
              <motion.circle
                cx="233"
                cy="283"
                r="220"
                stroke="#F5921F"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial= {{strokeDasharray: "24 10 0 0 "}}
                animate={{
                  strokeDasharray : ["15 120 25 25 " , "16 25 92 72" , "4 250 22 22" ],
                  rotate: [120 , 360],
                }}
                transition={{
                  duration:8,
                  repeat: Infinity,
                  repeatType:"reverse"
                }}

              />

              
             </motion.svg>


             


      </motion.div>

       

    </div>
  )
}

export default Photo
