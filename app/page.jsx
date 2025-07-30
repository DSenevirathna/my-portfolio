import React from 'react'
import {Button} from '@/components/ui/button'
import {FiDownload} from 'react-icons/fi'
import Socials from '@/components/ui/Socials'
import Photo from '@/components/ui/Photo'
import BlurText from "@/components/ui/BlurText";

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full '>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/*text*/}
          <div className='text-center xl:text-left order-1 xl:order-1'>
            <span className='text-xl'>Software Developer</span>
            <h1 className='h1 mb-6'>
              Hello I'm <br/><span className='text-primary'>

             


            <BlurText
              text="Devdini Senevirathna"
              delay={150}
              animateBy="sentences"
              direction="top"
              
              className="text-10xl mb-8"
            />
              </span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I'm a software developer passionate about building innovative, scalable, and efficient full-stack solutions.
            </p>

            {/*btn and socials*/}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2" 
              >
                 <span>Download CV </span>
                 <FiDownload className='text-xl'/>
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-primary rounded-full flex justify-center items-center text-primary hover:bg-primary hover:text-background hover:transition-all duration-500" />
              </div>
            </div>


          </div>

          {/*photo*/}
          <div className='order-2 xl:order-2 mb-8 xl:mb-0'>
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
