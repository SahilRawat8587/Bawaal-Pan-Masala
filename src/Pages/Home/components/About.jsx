import React from 'react'
import { assets } from '../../../assets/assets'

const About = () => {
  return (
    <div className="relative bg-[#EFAC2A] bg-[url('/public/GoldBg.avif')] bg-contain bg-center bg-repeat md:h-auto">        
      <div className='flex flex-col md:flex-row items-center md:items-center justify-end md:justify-center pt-24 md:pt-4 px-4 md:pl-0 lg:pl-18'>
        <div>
        <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-200 leading-tight lg:leading-15 text-black'>About Us</h3>
        <p className='text-sm md:text-lg lg:text-xl text-center md:text-left max-w-72 md:max-w-80 lg:max-w-150 lg:leading-8 text-black'>Bawaal Pan Masala has been trusted name, delivering a
premium blend of quality ingredients that offer a royaltaste. 
A symbol of excellence and tradition in every pouch.</p>
        </div>
      
      <div className='flex items-center justify-center font-medium'>
        <img src={assets.bawaal} alt="Bawaal Pack" className='h-80' />
        
      </div>
      </div>
    </div>
  )
}

export default About
