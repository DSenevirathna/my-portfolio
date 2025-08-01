"use client"

import { Description } from '@radix-ui/react-dialog'
import { Info } from 'lucide-react'
import React from 'react'
import {FaHtml5 ,
        FaCss3 ,
        FaJs,
        FaReact , 
        FaFigma,
        FaJava} 
        from 'react-icons/fa'

import {SiTailwindcss ,
         SiNextdotjs  
          
          } 
from 'react-icons/si'


//about data
const about={
  title: 'About me',
  Description:"I'm a passionate software developer with a strong foundation in both frontend and backend technologies. Currently pursuing my degree in Information Technology at the University of Moratuwa, I specialize in creating modern, responsive web applications using React, Next.js, and Spring Boot. I love turning complex problems into simple, beautiful solutions and am always eager to learn new technologies.",
  info:[
    {
      fieldName: "Name",
      fieldValue : "Devdini Senevirathna  "
    },
    {
      fieldName: "Phone",
      fieldValue : "(+94) 76 547 0666"
    },
   
    {
      fieldName: "Freelance",
      fieldValue : "Available"
    },
    {
      fieldName: "Languages",
      fieldValue : "English, Sinhala"
    },
    {
      fieldName: "Email",
      fieldValue : "devdinichnaiya2001@gmail.com"
    },
  ]
};

//education  data
const education={
  icon: "/assets/resume/cap.svg",
  title: "My education",
  Description:"My educational journey reflects my commitment to excellence in technology and software development. From achieving an outstanding Z-score in Advanced Levels to pursuing a specialized degree in Information Technology, I've consistently demonstrated strong analytical and problem-solving skills.",
  items:[
    {
      institution: "University of Moratuwa",
      degree : "B.Sc. (Hons) Degree in Information Technology",
      duration: "2023-present(Expected Graduation : 2027)"
    },
    {
      institution: "Mahamaya Girls' College-Kandy",
      degree : "GCE Advance Level(2021)- Z-score :1.6740(Maths Stream)",
      duration: "2020"
    },
    
  ]
};

//skills data
const skills={
  title: "My skills",
  Description:"I've developed a comprehensive skill set spanning both frontend and backend technologies. My expertise includes modern JavaScript frameworks, responsive design, UI/UX principles, and full-stack development. I'm passionate about creating user-centric applications and continuously expanding my technical knowledge.",
  skillList:[
    {
      icon: <FaHtml5/>,
      name: "HTML 5",
    },
    {
      icon: <FaCss3/>,
      name: "CSS 3",
    },
    {
      icon: <FaJs/>,
      name: "JavaScript",
    },
    {
      icon: <FaReact/>,
      name: "React",
    },
    {
      icon : <SiNextdotjs/>,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss/>,
      name: "Tailwind CSS",
    },
    {
      icon: <FaFigma/>,
      name: "Figma",
    },
    {
      icon: <FaJava/>,
      name: "Java",
    },
    

  ]
}

import {Tabs , TabsContent , TabsList , TabsTrigger} from '@/components/ui/tabs'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import {motion} from 'framer-motion'

const resume = () => {
  return (
   <motion.div
    initial={{opacity :0 }}
    animate={{
      opacity:1,
      transition:{delay: 2.4 , duration: 0.4 , ease: "easeIn"}
    }}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0 relative overflow-hidden'
   >
    {/* Background Effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
    <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
    
    <div className="container mx-auto px-4 xl:px-8 2xl:px-16 relative z-10">
      <Tabs defaultValue="education" 
            className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList 
          className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4"
        >
          <TabsTrigger value="education" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-300">Education</TabsTrigger>
          <TabsTrigger value="skills" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-300">Skills</TabsTrigger>
          <TabsTrigger value="about" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-300">About me</TabsTrigger>
        </TabsList>

        {/*content*/}
        <div className='min-h-[70vh] w-full'>
          {/*education*/}
          <TabsContent value="education" className="w-full">
            <motion.div 
              className='flex flex-col gap-[30px] text-center xl:text-left'
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2}}
            >
              <h3 className='text-4xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent'>{education.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed'>{education.Description}</p>

              <ScrollArea className="h-[400px]">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {education.items.map((item, index)=>{
                    return(
                      <motion.li
                        key={index}
                        className='bg-white/5 backdrop-blur-sm border border-white/10 h-[184px] py-6 px-10 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-1 hover:bg-white/10 transition-all duration-300'
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.3 + index * 0.1}}
                        whileHover={{scale: 1.02}}
                      >
                        
                        <h3 className='text-xl max-w[260px] min-h-[60px] text-center lg:text-left font-semibold'>{item.degree}</h3>
                        <div className='flex items-center gap-2'>
                            <span className='w-[6px] h-[6px] rounded-full bg-primary'></span> {/*dot */}
                            <p className='text-white/60'>{item.institution}</p>
                        </div>
                        <span className='text-primary font-medium'>{item.duration}</span>
                       

                      </motion.li>
                    )
                  })}

                </ul>

              </ScrollArea>
            </motion.div>

          </TabsContent>

           {/*skills*/}
           <TabsContent value="skills" className="w-full h-full">
            <motion.div 
              className='flex flex-col gap-[30px]'
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2}}
            >
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed'>{skills.Description}</p>
              </div>
              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                {skills.skillList.map((skill, index) =>{
                  return(
                    <motion.li 
                      key={index}
                      initial={{opacity: 0, y: 20}}
                      animate={{opacity: 1, y: 0}}
                      transition={{delay: 0.3 + index * 0.05}}
                      whileHover={{scale: 1.05}}
                      whileTap={{scale: 0.95}}
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex justify-center items-center group hover:bg-white/10 transition-all duration-300'>
                            <div className='text-6xl group-hover:text-primary transition-all duration-300 cursor-pointer'>
                              {skill.icon}

                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                    </motion.li>

                  )
                })}
              </ul>

            </motion.div>

          </TabsContent>

           {/*about me*/}
           <TabsContent value="about" className="w-full">
            <motion.div 
              className='flex flex-col gap-[30px]'
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2}}
            >
              <div className='text-center xl:text-left'>
                <h3 className='text-4xl font-bold mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed'>{about.Description}</p>
              </div>
              
              <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-[800px] mx-auto xl:mx-0'>
                <ul className='grid grid-cols-1 gap-6'>
                  {about.info.map((item,index) => {
                    return(
                      <motion.li 
                        key={index} 
                        className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 border-b border-white/10 last:border-b-0 hover:bg-white/5 rounded-lg transition-all duration-300'
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{delay: 0.3 + index * 0.1}}
                        whileHover={{x: 5}}
                      >
                        <span className='text-white/60 font-medium min-w-[120px]'>{item.fieldName}:</span>
                        <span className='text-xl text-white font-semibold'>{item.fieldValue}</span>
                      </motion.li>
                    )
                  })}
                </ul>
              </div>
            </motion.div>
            
          </TabsContent>


        </div>
      </Tabs>
    </div>

   </motion.div>
  )
}

export default resume
