import React from 'react'
import { assets } from '../../../assets/assets'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const HeroBanner = () => {
  return (
    <div className='relative '>
    <img src={assets.DesktopBanner} className='w-full hidden md:block' alt='Desktop Banner' />
    <img src={assets.MobileBanner} className='w-full md:hidden' alt='Mobile Banner' />
    <div className='absolute inset-0 flex flex-col items-center md:items-end justify-start md:justify-center pt-24 md:pt-0 px-4 md:pr-18 lg:pr-48'>
      <h1 className='text-6xl md:text-7xl lg:text-8xl font-bold text-justify md:text-center max-w-72 md:max-w-80 lg:max-w-105  text-white'>BAWAAL</h1>
      <h2 className='text-4xl md:text-4xl lg:text-6xl font-bold text-justify md:text-center max-w-72 md:max-w-80 lg:max-w-105  text-white'>PAN MASALA</h2>

      <h3 className='text-xl md:text-lg lg:text-3xl mt-2 text-center md:text-left text-white'>Premium Blend of Lucknavi Taste</h3>
    
    <div className='flex items-center mt-6 font-medium'>
      
      <Link to="/product" className='group flex items-center gap-2 px-9 py-3 cursor-pointer bg-[#EFAC2A] text-black rounded-xl hover:bg-[#EFAC2A]/90 transition'>
          Explore Products <ArrowUpRight className='transition group-hover:translate-x-1 text-black' />
      </Link>
    </div>
    </div>
  </div>
  )
}

export default HeroBanner
