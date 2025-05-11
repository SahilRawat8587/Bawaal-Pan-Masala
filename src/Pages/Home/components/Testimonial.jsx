import React from 'react';
import { assets } from '../../../assets/assets'
const testimonials = [
  {
    id: 1,
    name: 'Donald Jackman',
    role: 'Content Creator',
    image: 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png',
    text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud aliquip”',
  },
  {
    id: 2,
    name: 'Richard Nelson',
    role: 'Content Writer',
    image: 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage2.png',
    text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud aliquip”',
  },
  {
    id: 3,
    name: 'James Washington',
    role: 'Content Marketing',
    image: 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage3.png',
    text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud aliquip”',
  },
  {
    id: 4,
    name: 'Richard Nelson',
    role: 'Content Writer',
    image: 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage2.png',
    text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud aliquip”',
  },
];

const Testimonial = () => {
  return (
    <div className="relative bg-[#EFAC2A] h-auto p-8">
        <div className='absolute inset-0'>
      <img src={assets.Goldbg}  className="w-full hidden md:block" alt="Desktop Banner" />
      </div>
      <div className=" flex flex-col items-center justify-center text-center">
        <p className="text-4xl font-bold max-w-160 mb-4">
            Customer Testimonials
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center bg-black/50 px-3 py-8 rounded-lg  max-w-[272px] text-sm text-center text-white"
            >
              <div className="relative mb-4">
                <img className="h-16 w-16 rounded-full" src={testimonial.image} alt={testimonial.name} />
                <svg
                  className="absolute top-0 -right-2"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10.5" cy="10.5" r="8.5" fill="#000000" />
                  <path
                    d="m11.584 13.872 1.752-3.288 1.104-.288a2.7 2.7 0 0 1-.432.576.76.76 0 0 1-.552.24q-.672 0-1.248-.576t-.576-1.464q0-.936.624-1.584.648-.672 1.584-.672.888 0 1.536.672.672.648.672 1.584 0 .384-.168.912-.144.504-.576 1.296l-1.92 3.552zm-5.4 0 1.752-3.288 1.08-.288a2.2 2.2 0 0 1-.408.576.76.76 0 0 1-.552.24q-.696 0-1.272-.576t-.576-1.464q0-.936.624-1.584.648-.672 1.584-.672.888 0 1.536.672.672.648.672 1.584 0 .384-.144.912-.144.504-.576 1.296L7.96 14.832z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <p>{testimonial.text}</p>
              <p className="text-lg text-black font-medium mt-5">{testimonial.name}</p>
              <p className="text-xs">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;