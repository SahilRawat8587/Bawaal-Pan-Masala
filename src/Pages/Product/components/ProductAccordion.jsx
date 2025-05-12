import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Optional, requires `lucide-react` or use your own icon
import { assets } from '../../../assets/assets';

const ProductAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full h-full py-12 px-4 text-white">
      <h2 className="text-4xl font-semibold text-yellow-500 text-center mb-10">Product</h2>

      <div className="max-w-3xl mx-auto rounded-2xl bg-[#f5b723] bg-[url('/public/GoldBg.avif')] bg-contain bg-center bg-repeat bg-opacity-90 text-black px-6 py-6 sm:flex sm:items-center sm:justify-between shadow-lg transition-all duration-300">
        {/* Product Left Side */}
        <div className="flex items-center gap-6">
          <img
            src={assets.bawaalpan}
            alt="Bawaal Pan"
            className="w-40 h-40 rounded-lg object-contain"
          />
          <div>
            <h3 className="text-2xl font-bold">Bawaal Pan</h3>
            <p className="text-lg italic">Kesar Elaichi</p>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          className="mt-4 sm:mt-0 sm:ml-6 p-2 rounded-full hover:bg-yellow-600 transition duration-300 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </button>
      </div>

      {/* Accordion Content */}
      <div
        className={`max-w-3xl mx-auto bg-[#f5b723] bg-[url('/public/GoldBg.avif')] bg-contain bg-center bg-repeat bg-opacity-90 rounded-b-2xl px-6 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] py-4 mt-1' : 'max-h-0'
        }`}
      >
        <p className="text-black text-base sm:text-lg leading-relaxed">
        A Lucknawi Taste that redefines elegance and taste! Indulge in the rich aroma of saffron (kesar) combined with the bold flavor of elaichi (cardamom). Crafted with premium ingredients, Bawaal Kesar Elaichi offers a smooth, refreshing experience with every pinch.        </p>
      </div>
    </section>
  );
};

export default ProductAccordion;
