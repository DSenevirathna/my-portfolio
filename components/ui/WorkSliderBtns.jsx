"use client"

import React from 'react'
import {motion} from 'framer-motion'
import {useSwiper} from 'swiper/react'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'

const WorkSliderBtns = ({containerStyles , btnStyles, iconStyles}) => {
    const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <motion.button 
        className={`${btnStyles} backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group`}
        onClick={() => swiper.slidePrev()}
        whileHover={{scale: 1.1, rotate: -5}}
        whileTap={{scale: 0.95}}
        initial={{opacity: 0, x: -20}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.3}}
      >
        <BsArrowLeft className={`${iconStyles} group-hover:text-primary transition-all duration-300`}/>
      </motion.button>

      <motion.button 
        className={`${btnStyles} backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group`}
        onClick={() => swiper.slideNext()}
        whileHover={{scale: 1.1, rotate: 5}}
        whileTap={{scale: 0.95}}
        initial={{opacity: 0, x: 20}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.3, delay: 0.1}}
      >
        <BsArrowRight className={`${iconStyles} group-hover:text-primary transition-all duration-300`}/>
      </motion.button>
    </div>
  )
}

export default WorkSliderBtns
