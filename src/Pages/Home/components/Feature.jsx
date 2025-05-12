import React from 'react'
import { assets } from '../../../assets/assets'

const Feature = () => {
  return (
    <div className='relative bg-blackbg'>
        <div className='absolute hidden md:block left-0 bottom-0  bg-contain w-full z-10'>
            <img src={assets.glow} alt="Bawaal Pan Masala" className='h-100' />
            </div>

        <div className='flex justify-center items-center md:items-end flex-col py-24 px-4 lg:pr-18'>
        <h3 className='text-xl md:text-4xl lg:text-5xl font-bold text-left max-w-72 md:max-w-80 lg:max-w-200  text-white'>Ingredients Quality Assurance</h3>
        <p className='text-sm md:text-lg lg:text-3xl text-center max-w-72 md:max-w-80 lg:max-w-200 px-10 text-white'>100% Authentic | No Tobacoo | Rich Aroma</p>
            </div>       
          
        </div>
  )
}

export default Feature
