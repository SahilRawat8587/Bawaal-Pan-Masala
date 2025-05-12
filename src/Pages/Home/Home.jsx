import React from 'react'
import HeroBanner from './components/HeroBanner'
import About from './components/About'
import Feature from './components/Feature'
import Testimonial from './components/Testimonial'
import Ingredient from './components/Ingredient'

const Home = () => {
  return (
    <div className=' w-full bg-contain bg-center bg-repeat bg-[url("/public/Bg.avif")]'>
        <HeroBanner />
        <About />
        <Feature />
        <Testimonial />
        <Ingredient />
      
    </div>
  )
}

export default Home
