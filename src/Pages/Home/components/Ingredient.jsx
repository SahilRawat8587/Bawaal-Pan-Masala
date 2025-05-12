import React from 'react'
import { ingredientdemo } from '../../../assets/assets'

const Ingredient = () => {
  return (
    <section className=" py-16 px-4 flex flex-col justify-center items-center text-white">
          <h2 className="text-center text-4xl md:text-5xl font-semibold text-yellow-500 mb-12">Ingredients</h2>
    
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {ingredientdemo.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 md:w-48 md:h-48 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
                
                <p className="mt-2 text-lg font-medium">{item.name}</p>
              </div>
            ))}
          </div>

          <button className='text-center py-2 px-5 mt-6 bg-amber-400 rounded-2xl'>Explore More</button>
          <p className='text-center px-10 py-4'>A delightful blend of hand-picked ingredients from the best farms around the world make our pan masala a unique composition of Fennel Seeds. Betel, Magnesium, Chuna.and many rare flavouring substances, from where the story of master blend began.
          </p>
        </section>
  )
}

export default Ingredient
