"use client"

import React from 'react'
import {Button} from '@/components/ui/button'
import {FiDownload} from 'react-icons/fi'
import Socials from '@/components/ui/Socials'
import Photo from '@/components/ui/Photo'
import BlurText from "@/components/ui/BlurText";
import Stats from "@/components/ui/Stats"
import { motion } from 'framer-motion';

const Home = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Devdini-Senevirathna.pdf';
    link.download = 'Devdini-Senevirathna.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className='h-full relative overflow-hidden'>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className='container mx-auto h-full px-4 xl:px-8 2xl:px-16 relative z-10'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/*text*/}
          <motion.div 
            className='text-center xl:text-left order-1 xl:order-1'
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{delay: 0.2, duration: 0.8}}
          >
            <motion.span 
              className='text-xl bg-gradient-to-r from-white to-primary bg-clip-text text-transparent font-medium'
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.3}}
            >
              Software Developer
            </motion.span>
            <motion.h1 
              className='h1 mb-6'
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.4}}
            >
              Hello I'm <br/><span className='text-primary'>

             


            <BlurText
              text="Devdini Senevirathna"
              delay={150}
              animateBy="sentences"
              direction="top"
              
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-8 text-center xl:text-left flex justify-center xl:justify-start"
            />
              </span>
            </motion.h1>
            <motion.p 
              className='max-w-[500px] mb-9 text-white/80 leading-relaxed'
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.5}}
            >
              I'm a software developer passionate about building innovative, scalable, and efficient full-stack solutions.
            </motion.p>

            {/*btn and socials*/}
            <motion.div 
              className='flex flex-col xl:flex-row items-center gap-8'
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.6}}
            >
              <motion.div
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="uppercase flex items-center gap-2 bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10 transition-all duration-300"
                  onClick={downloadCV}
                >
                   <span>Download CV </span>
                   <FiDownload className='text-xl'/>
                </Button>
              </motion.div>
              <div className='mb-8 xl:mb-0'>
                <Socials 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-primary rounded-full flex justify-center items-center text-primary hover:bg-primary hover:text-background hover:transition-all duration-500 backdrop-blur-sm bg-white/5" />
              </div>
            </motion.div>


          </motion.div>

          {/*photo*/}
          <motion.div 
            className='order-2 xl:order-2 mb-8 xl:mb-0'
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            transition={{delay: 0.3, duration: 0.8}}
          >
            <Photo/>
          </motion.div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home
