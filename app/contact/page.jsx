"use client"

import React, { useState } from 'react'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { FaPhoneAlt , FaEnvelope , FaMapMarkedAlt} from 'react-icons/fa'


const info =[
  {
    icon: <FaPhoneAlt/>,
    title:"Phone",
    description: "(+94) 76 547 0666"
  },
  {
    icon: <FaEnvelope/>,
    title:"Email",
    description: "devdinichaniya2001@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt/>,
    title:"Address",
    description: "Kandy, Sri Lanka"
  }
]

import {motion} from 'framer-motion'


const contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    return formData.firstName && 
           formData.lastName && 
           formData.email && 
           formData.phone && 
           formData.service && 
           formData.message;
  };

  const sendMessage = async () => {
    if (!validateForm()) {
      alert('Please fill in all fields before sending the message.');
      return;
    }

    setIsSubmitting(true);

    try {
      const subject = "New Project Inquiry - Devdini Senevirathna";
      const body = `Hi Devdini,

You have received a new project inquiry:

Client Details:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}

Project Details:
- Service Type: ${formData.service}
- Message: ${formData.message}

Please respond to this inquiry at your earliest convenience.

Best regards,
Portfolio Contact Form`;

      const mailtoLink = `mailto:devdinichaniya2001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.open(mailtoLink, '_blank');
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      alert('Message sent successfully! Please check your email client.');
    } catch (error) {
      alert('There was an error sending the message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
   <motion.section
    initial={{opacity: 0}}
    animate={{
      opacity:1,
      transition : {delay :2.4 , duration: 0.4 , ease:"easeIn"},
    }}
    className='py-6 relative overflow-hidden'
   >
    {/* Background Effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
    <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
    
    <div className='container mx-auto px-4 xl:px-8 2xl:px-16 relative z-10'>
     <div className='flex flex-col xl:flex-row gap-[30px]'>
       {/*form*/}
       <div className='xl:w-[54%] order-2 xl:order-none' >
          <motion.form 
            className='flex flex-col gap-6 p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
          >
            <motion.h3 
              className='text-4xl bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent font-bold'
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 0.3}}
            >
              Let's work together
            </motion.h3>
            <motion.p 
              className='text-white/60 leading-relaxed'
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 0.4}}
            >
              Ready to bring your ideas to life? I'm passionate about creating innovative web solutions and would love to collaborate on your next project. Whether you need a stunning website, a powerful web application, or creative UI/UX design, let's discuss how we can turn your vision into reality.
            </motion.p>
            {/*input*/}
            <motion.div 
              className='grid grid-cols-1 md:grid-cols-2 gap-6'
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.5}}
            >
              <Input 
                type="text" 
                placeholder="First Name" 
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="bg-white/5 backdrop-blur-sm border-white/20 focus:border-primary transition-all duration-300"
              />
              <Input 
                type="text" 
                placeholder="Last Name" 
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="bg-white/5 backdrop-blur-sm border-white/20 focus:border-primary transition-all duration-300"
              />
              <Input 
                type="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-white/5 backdrop-blur-sm border-white/20 focus:border-primary transition-all duration-300"
              />
              <Input 
                type="tel" 
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="bg-white/5 backdrop-blur-sm border-white/20 focus:border-primary transition-all duration-300"
              />

            </motion.div>
            {/*select*/}
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.6}}
            >
              <Select onValueChange={(value) => handleInputChange('service', value)} value={formData.service}>
                <SelectTrigger className="w-full bg-white/5 backdrop-blur-sm border-white/20 focus:border-primary transition-all duration-300">
                  <SelectValue placeholder=" Select a Service"/>
                </SelectTrigger>
                <SelectContent className="bg-white/10 backdrop-blur-sm border-white/20">
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    
                  </SelectGroup>
                </SelectContent>
              </Select>
            </motion.div>
            {/**textarea*/}
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.7}}
            >
              <Textarea 
                className="h-[200px] bg-white/5 backdrop-blur-sm border-white/20 focus:border-primary transition-all duration-300"
                placeholder="Type your message here"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
              />
            </motion.div>
            {/*btn*/}
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.8}}
            >
              <Button 
                size="md" 
                className="max-w-40 bg-gradient-to-r from-primary to-orange-400 hover:from-primary/90 hover:to-orange-400/90 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105" 
                onClick={sendMessage}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </motion.div>

            
          </motion.form>
       </div>
        {/*info*/}
        <motion.div 
          className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'
          initial={{opacity: 0, x: 20}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 0.3}}
        >
          <ul className='flex flex-col gap-10'>
            {info.map((item, index) => {
              return (
                <motion.li 
                  key={index} 
                  className='flex items-center gap-6 group'
                  initial={{opacity: 0, x: 20}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: 0.4 + index * 0.1}}
                  whileHover={{x: 5}}
                >
                  <motion.div 
                    className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-white/5 backdrop-blur-sm border border-white/10 text-primary rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-all duration-300'
                    whileHover={{scale: 1.1, rotate: 5}}
                  >
                    <div className='text-[28px] group-hover:text-primary transition-all duration-300'>{item.icon}</div>
                  </motion.div>
                  <div className='flex-1'>
                    <p className='text-white/60 font-medium'>{item.title}</p>
                    <h3 className='text-xl font-semibold'>{item.description}</h3>
                  </div>
              </motion.li>
              );
            })}
          </ul>
        </motion.div>

     </div>


    </div>

   </motion.section>
  )
}

export default contact
