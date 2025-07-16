"use client"

import React from 'react'
import {motion} from 'framer-motion'
import Image  from 'next/image'
import profilePic from '@/public/myPic.png' 

const Photo = () => {
  return (
    <div className='w-full h-full relative'>
      <motion.div>
            <div className='w-[298px] h-[298px] xl:w-[398px] xl:h-[398px] mix-blend-lighten'>
                <Image
                src={profilePic}
                priority
                quality={100}
                fill
                alt='my-photo'
                className=' rounded-full object-contain'
                />
            </div>
      </motion.div>
    </div>
  )
}

export default Photo
