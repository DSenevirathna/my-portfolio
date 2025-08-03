'use client'

import React,{useState} from 'react'
import {motion} from 'framer-motion'
import {Swiper , SwiperSlide} from 'swiper/react'
import TextType from '@/components/ui/TextType';
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
    description:'A comprehensive full-stack Employee Management System built with Next.js frontend and Spring Boot backend. Features include employee profiles, project management, timesheet tracking, and leave management. Collaborative team project with Creative Software.',
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
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 relative overflow-hidden'
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className='container mx-auto px-4 xl:px-8 2xl:px-16 relative z-10'>
          <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
            <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
              <div className='flex flex-col gap-[30px] h-full xl:justify-between'>
                <div className='flex flex-col gap-[30px]'>
                  {/*outline num*/}
                  <motion.div 
                    className='text-8xl leading-none font-semibold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent'
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.2}}
                  >
                    {project.num}
                  </motion.div>
                   {/*project category*/}
                   
                     <TextType 
                         key={project.num}
                         text={project.category}
                         className='font-semibold text-4xl'
                         typingSpeed={100}
                         pauseDuration={1000}
                         showCursor={false}
                         cursorCharacter="|"
                         loop={false}
                         initialDelay={0}
                     />
                   

                    {/*project description*/}
                    <motion.p 
                      className='text-white/60 leading-relaxed'
                      initial={{opacity: 0, y: 20}}
                      animate={{opacity: 1, y: 0}}
                      transition={{delay: 0.4}}
                    >
                      {project.description}
                    </motion.p>

                     {/*stack*/}
                     <motion.ul 
                       className='flex flex-wrap gap-4'
                       initial={{opacity: 0, y: 20}}
                       animate={{opacity: 1, y: 0}}
                       transition={{delay: 0.5}}
                     >
                        {project.stack.map((item, index) => {
                          return (
                            <motion.li 
                              key={index} 
                              className='text-xl text-primary whitespace-nowrap px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300'
                              whileHover={{scale: 1.05}}
                              whileTap={{scale: 0.95}}
                            >
                              {item.name}
                            </motion.li>
                          )
                        })}
                     </motion.ul>
                </div>

                 {/*border*/}
                 <motion.div 
                   className='border border-white/20'
                   initial={{opacity: 0, scaleX: 0}}
                   animate={{opacity: 1, scaleX: 1}}
                   transition={{delay: 0.6, duration: 0.8}}
                 ></motion.div>
                  {/*buttons*/}
                  <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.7}}
                    className='mt-auto'
                  >
                    {project.live && (
                      <Link href={project.live}>
                        <TooltipProvider delayDuration={100} >
                          <Tooltip>
                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex justify-center items-center group hover:bg-white/10 transition-all duration-300 hover:scale-110'>
                              <BsArrowUpRight className='text-white text-2xl group-hover:text-primary transition-all duration-300'/>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>GitHub</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                  </motion.div>

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
                    <motion.div 
                      className='h-[460px] relative group flex justify-center items-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden'
                      whileHover={{scale: 1.02}}
                      transition={{duration: 0.3}}
                    >
                        {/*overlay*/}
                        <div className='absolute top-0 bottom-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent z-10'></div>
                        {/*image*/}
                        <div className='relative w-full h-full'>
                          <Image src={project.image} fill className='object-cover rounded-2xl' alt=""/>
                        </div>
                    </motion.div>
                  </SwiperSlide>;
                })}
                {/*slider buttons */}
                <WorkSliderBtns 
                  
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles=" cursor-pointer bg-primary/80 backdrop-blur-sm hover:bg-primary text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-300 hover:scale-110 rounded-full border border-white/10"
                />

              </Swiper>
            </div>
          </div>
      </div>
    </motion.section>
  )
}

export default work
