import React from 'react'
import Hero from './components/Hero'
import AboutSec from './components/AboutSec'
import IngredientGrids from './components/IngredientGrids'

const About = () => {
  return (
    <div className=' bg-contain bg-center bg-repeat bg-[url("/public/Bg.avif")]'>
      <Hero />
      <AboutSec />
      <IngredientGrids />
    </div>
  )
}

export default About
