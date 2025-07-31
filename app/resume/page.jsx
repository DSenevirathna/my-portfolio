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
  Description:"lorem ipsem",
  info:[
    {
      fieldName: "Name",
      fieldValue : "Devdini Senevirathna"
    },
    {
      fieldName: "Phone",
      fieldValue : "(+94) 76 547 0666"
    },
    {
      fieldName: "Email",
      fieldValue : "devdinichnaiya2001@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue : "Available"
    },
    {
      fieldName: "Languages",
      fieldValue : "English, Sinhala"
    },
  ]
};

//education  data
const education={
  icon: "/assets/resume/cap.svg",
  title: "My education",
  Description:"lorem ipsem",
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
  Description:"lorem ipsem",
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
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
   >
    <div className="container mx-auto">
      <Tabs defaultValue="education" 
            className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList 
          className="'flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
        >
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>

        {/*content*/}
        <div className='min-h-[70vh] w-full'>
          {/*education*/}
          <TabsContent value="education" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold' >{education.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.Description}</p>

              <ScrollArea className="h-[400px]">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {education.items.map((item, index)=>{
                    return(
                      <li
                        key={index}
                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                      >
                        
                        <h3 className='text-xl max-w[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                        <div className='flex items-center gap-2'>
                            <span className='w-[6px] h-[6px] rounded-full bg-primary'></span> {/*dot */}
                            <p className='text-white/60'>{item.institution}</p>
                        </div>
                        <span className='text-primary'>{item.duration}</span>
                       

                      </li>
                    )
                  })}

                </ul>

              </ScrollArea>
            </div>

          </TabsContent>

           {/*skills*/}
           <TabsContent value="skills" className="w-full h-full">
            <div className='flex flex-col gap-[30px]'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.Description}</p>
              </div>
              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                {skills.skillList.map((skill, index) =>{
                  return(
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-[#F5921F] transition-all duration-300 cursor-pointer'>
                              {skill.icon}

                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                    </li>

                  )
                })}
              </ul>

            </div>

          </TabsContent>

           {/*about me*/}
           <TabsContent value="about" className="w-full xl:text-left">
            <div className='flex flex-col gap-[30px]'>
              <h3 className='text-4xl font-bold'>{about.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.Description}</p>
              <ul className='grid grdi-cols-1 xl:grid-cols-2 gap-y-2 max-w-[620px] mx-auto xl:mx'>
                {about.info.map((item,index) => {
                  return(
                    <li key={index}>
                      <span>{item.fieldName}</span>
                      <span>{item.fieldValue}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            
          </TabsContent>


        </div>
      </Tabs>
    </div>

   </motion.div>
  )
}

export default resume
