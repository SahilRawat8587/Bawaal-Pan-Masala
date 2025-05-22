import React from 'react';
import { assets } from '../../../assets/assets'
const testimonials = [
  {
    id: 1,
    name: 'राहुल मिश्रा',
    role: 'सेल्स मैनेजर',
    image: 'https://i.pravatar.cc/100?img=12',
    text: '“बवाल पान मसाला का स्वाद एकदम जबरदस्त है। हर क़दम ताज़गी का एहसास देता है।”',
  },
  {
    id: 2,
    name: 'विकास वर्मा,',
    role: 'ट्रक ड्राइवर',
    image: 'https://i.pravatar.cc/100?img=14',
    text: '“जब भी थकान महसूस होती है, बवाल पान मसाला मुझे फिर से तरोताज़ा कर देता है।”',
  },
  {
    id: 3,
    name: 'शैलेश गुप्ता',
    role: 'जनरल स्टोर मालिक',
    image: 'https://i.pravatar.cc/100?img=8',
    text: '“मैंने कई ब्रांड्स आज़माए हैं, लेकिन बवाल जैसा स्वाद और खुशबू कहीं नहीं मिली।”',
  },
  {
    id: 4,
    name: 'अमित चौहान',
    role: 'मार्केटिंग एक्जीक्यूटिव',
    image: 'https://i.pravatar.cc/100?img=7',
    text: '“बवाल पान मसाला का नाम ही काफी है — स्वाद में बवाल, खुशबू में कमाल!”',
  },
];

const Testimonial = () => {
  return (
    <div className="relative bg-[#EFAC2A] bg-[url('/public/GoldBg.avif')] bg-contain bg-center bg-repeat h-auto p-8">
        
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