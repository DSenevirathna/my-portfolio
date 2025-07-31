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
import {Tooltip, TooltipContent, TooltipTrigger} from '@/components/ui/tooltip'
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
          <TabsTrigger value="about me">About me</TabsTrigger>
        </TabsList>

        {/*content*/}
        <div className='min-h-[70vh] w-full'>
          {/*education*/}
          <TabsContent value="education" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold' >{education.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.Description}</p>
            </div>

          </TabsContent>

           {/*skills*/}
           <TabsContent value="skills" className="w-full">
            skills

          </TabsContent>

           {/*about me*/}
           <TabsContent value="about me" className="w-full">
            about me

          </TabsContent>


        </div>
      </Tabs>
    </div>

   </motion.div>
  )
}

export default resume
