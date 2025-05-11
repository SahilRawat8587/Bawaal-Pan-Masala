import React from 'react'
import { ingredients } from '../../../assets/assets'



const IngredientGrids = () => {
  return (
    <section className=" py-16 px-4 text-white">
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-yellow-500 mb-12">Ingredients</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {ingredients.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative w-36 h-36  overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
            </div>
            
            <p className="mt-2 text-lg font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default IngredientGrids
