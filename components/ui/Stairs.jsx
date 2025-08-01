import React from 'react'
import { animate, motion } from 'framer-motion'




//variants
const stairAnimation = {
    initial:{
        top: "0%",
    },
    animate:{
        top: "100%",
    },
    exit:{
        top:["100%" , "0%"],
    },
}


//calculate the reverse index for staggred delay
const reverseIndex =(index)=>{
    const totalSteps = 6; //number of steps
    return totalSteps - index -1;
}

const Stairs = () => {
  return (
   <>
   
    {[...Array(6)].map((_,index) => (
        <motion.div
                    key={index} 
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate" 
                    exit="exit" 
                        transition={{
                            duration:0.3,
                            ease:"easeInOut",
                            delay: reverseIndex(index) * 0.1, // staggered delay based on index
                        }}
                        className='h-full w-full bg-white relative'
        
        /> 
    ))}
   </>
  )
}

export default Stairs
