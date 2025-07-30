"use client"

import React from 'react'


const stats = [
    {
        num: 10,
        text: "Projects Completed"
    },
    {
        num: 10,
        text: "Technologies Mastered"
    },
    {
        num: 10,
        text: "Code Commits"
    }
    
    


]

const Stats = () => {
  return (
    <section>
        <div className="container mx-auto">
            <div>
                {stats.map((item,index) => {
                    return(
                        <div key={index} >
                            <CountUp
                                end = {item.num}
                                duration = {5}
                                delay = {2}
                                className = "text-4xl xl:text-6xl font-extrabold"
                            
                            />


                        
                        </div>


                    )

                
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats
