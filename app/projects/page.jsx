'use client'

import React,{useState} from 'react'
import {motion} from 'framer-motion'
import {Swiper , SwiperSlide} from 'swiper/react'
import "swiper/css";
import link1 from '../../public/thumb1.png';
import link2 from '../../public/thumb2.png';
import link3 from '../../public/thumb3.png';
import link4 from '../../public/thumb4.png';

import WorkSliderBtns from '@/components/ui/WorkSliderBtns'

import {BsArrowUpRight,BsGithub} from 'react-icons/bs'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import Link from 'next/link'
import Image from 'next/image'


const projects = [
  {
    num:'01',
    category:'My Portfolio',
    title:'My Portfolio',
    description:'A modern, responsive personal portfolio website built with Next.js and Tailwind CSS. Features include smooth animations with Framer Motion, interactive project showcase, downloadable CV, and contact form. The design emphasizes clean aesthetics with a dark theme and orange accents.',
    stack:[
      {name: "Next Js" },
      {name: "Tailwind CSS" },
      {name: "Framer Motion" },
      
    ],
    image:link1,
    live:'https://github.com/DSenevirathna/my-portfolio.git',
  },

  {
    num:'02',
    category:'Employee Management System-Full Stack Project(team project)',
    title:'Employee Management System',
    description:'A comprehensive Employee Management System built with Next.js frontend and Spring Boot backend. Features include employee profiles, project management, timesheet tracking, leave management, and AI-driven analytics. This was a collaborative team project with Creative Software.',
    stack:[
      {name: "Next Js" },
      {name: "Tailwind CSS" },
      {name: "Framer Motion" },
      {name: "MUI" },
      {name: "Springboot" },
      {name: "MySQL" },
      
    ],
    image:link2,
    live:'https://github.com/LalalnaGurusinghe/Shiftly-EMS-FrontEnd-Creative_software.git',
  },

  {
    num:'03',
    category:'Cake Shop App-UI/UX Design',
    title:'Cake Shop App',
    description:'A comprehensive UI/UX design project for a cake shop mobile application. Created using Figma, this project includes user interface designs, user experience flows, wireframes, and interactive prototypes. The design focuses on creating an intuitive and visually appealing experience for customers to browse and order cakes.',
    stack:[
      {name: "Figma" },
      
      
    ],
    image:link3,
  },

  {
    num:'04',
    category:'Coffee Shop Website-UI/UX Design',
    title:'Coffee Shop Website',
    description:'A complete UI/UX design for a coffee shop website created in Figma. This project encompasses responsive web design, user interface mockups, user experience wireframes, and interactive prototypes. The design emphasizes creating a warm, inviting atmosphere that reflects the coffee shop brand and enhances the online ordering experience.',
    stack:[
      {name: "Figma" },
      
      
    ],
    image:link4,
  },
  


];

const work = () => {
  const [project , setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {

    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }


  return (
    <motion.section
      initial={{opacity:0}}
      animate={{opacity:1, transition: {delay:2.4 , duration:0.4 , ease:"easeIn"}}}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto px-4 xl:px-8 2xl:px-16'>
          <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
            <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
              <div className='flex flex-col gap-[30px] h-[50%]'>
                {/*outline num*/}
                <div className='text-8xl leading-none font-semibold'>{project.num}</div>
                 {/*project category*/}
                 <h2
                  className='text-[42px] font-bold leading-none text-white group-hover:text-primary transition-all duration-500 capitalize'
                 >{project.category} </h2>

                  {/*project description*/}
                  <p className='text-white/60'>{project.description}</p>

                   {/*stack*/}
                   <ul className='flex flex-wrap gap-4'>
                      {project.stack.map((item, index) => {
                        return <li key={index} className='text-xl text-primary whitespace-nowrap'>{item.name}{index !== project.stack.length - 1 && ","}</li>


                        
                      })}
                   </ul>

                   {/*border*/}
                   <div className='border border-white/20'></div>
                    {/*buttons*/}
                    <div>
                      {project.live && (
                        <Link href={project.live}>
                          <TooltipProvider delayDuration={100} >
                            <Tooltip>
                              <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                <BsArrowUpRight className='text-white text-2xl group-hover:text-primary'/>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>GitHub</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                      )}
                    </div>

              </div>
            </div>
            <div className='w-full xl:w-[50%]'>
              <Swiper spaceBetween={30} 
                      slidesPerView={1} 
                      className='xl:h-[520px] mb-12'
                      onSlideChange={handleSlideChange}
                      
              >
                {projects.map((project, index) => {
                  return <SwiperSlide key={index} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                        {/*overlay*/}
                        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                        {/*image*/}
                        <div className='relative w-full h-full'>
                          <Image src={project.image} fill className='object-cover ' alt=""/>
                        </div>
                    </div>
                  </SwiperSlide>;
                })}
                {/*slider buttons */}
                <WorkSliderBtns 
                  
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles=" cursor-pointer bg-primary hover:bg-primary/50 text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />

              </Swiper>
            </div>
          </div>
      </div>
    </motion.section>
  )
}

export default work
