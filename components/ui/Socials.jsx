import React from 'react'
import Link from 'next/link'
import {FaGithub , FaLinkedinIn} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/> , path:'https://github.com/DSenevirathna'},
    {icon: <FaLinkedinIn/> , path:'https://www.linkedin.com/in/devdini-senevirathna-6aa772271'},
]

const Socials = ({containerStyles , iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item , index) => {
        return <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
      })}
    </div>
  )
}

export default Socials
