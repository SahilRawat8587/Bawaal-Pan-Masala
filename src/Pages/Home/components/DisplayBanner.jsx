import React from 'react'
import { assets } from '../../../assets/assets'

const DisplayBanner = () => {
  return (
    
<div className="grid grid-cols-6 grid-rows-5 gap-4">
    <div className="col-span-2 row-span-5">
        <div className='flex flex-col items-center justify-center h-full p-10'>
            <h2 className='text-white text-3xl md:text-5xl'>Since</h2>
            <h3 className='text-[#EFAC2A] text-4xl md:text-6xl'>2025</h3>
        </div>
    </div>
    <div className="col-span-4 row-span-5 col-start-3 overflow-clip">
        <img src={assets.bawaalcurtain} alt="Bawaal Pan Masala" />
    </div>
</div>
    
  )
}

export default DisplayBanner
