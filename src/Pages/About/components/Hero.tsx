import React from 'react'
import { assets } from '../../../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <img src={assets.herobanner} alt="Bawaal Pan Masala" className='md:h-[450px] h-[350px]' />
      
    </div>
  )
}

export default Hero
