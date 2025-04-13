import React, { useState } from 'react';
import defaultLogo from '../../assets/defautlogo.png'
import defaultPortrait from '../../assets/defaultportrait.jpg'
import { useImagePreloader } from '../../hooks/useImagePreloader';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLink } from "react-icons/fa6";
import { MdFlipCameraAndroid } from "react-icons/md";
import { motion } from "framer-motion";

const Card = () => {
  const [flipped, setFlipped] = useState(true);
  
  useImagePreloader([defaultLogo, defaultPortrait]);

  return (
    <div
      className="mx-10 md:mx-0 w-full md:w-3/4 xl:w-1/2 rounded-3xl aspect-[55/90] md:aspect-[90/55] [perspective:1000px]"
    >
      <div
        className={`h-full w-full relative transition-all duration-500 [transform-style:preserve-3d] will-change-transform ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <div className=" flex flex-col shadow-lg justify-center items-center bg-gradient-to-r from-neutral-800 to-neutral-900 w-full h-full rounded-3xl absolute inset-0 [backface-visibility:hidden] will-change-transform">
          <img src={defaultLogo} className='w-1/6 aspect-square' loading="eager" alt="Logo" />
          <p className='font-bold text-2xl lg:text-3xl text-gray-300'>James Carter</p>
          <p className='font-semibold lg:text-lg text-gray-400'>Lorem ipsum dolor sit amet.</p>
          <button
            onClick={() => setFlipped(!flipped)}
            className="cursor-pointer absolute bottom-4 left-4 z-10 bg-gray-800/50 hover:bg-gray-800/70 p-2 rounded-full transition-colors"
            aria-label="Flip card"
          >
              <MdFlipCameraAndroid className="text-lg lg:text-2xl text-white" />
          </button>
        </div>
        <div className="shadow-lg flex flex-col md:flex-row bg-gradient-to-r from-neutral-800 to-neutral-900 w-full h-full rounded-3xl absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] will-change-transform">
            <div className="md:w-4/10 h-4/10 shrink-0 md:h-full ">
              <div className="w-full h-full [clip-path:polygon(100%_0,_100%_80%,_50%_100%,_0_80%,_0_0)] md:[clip-path:polygon(65%_0,_100%_50%,_65%_100%,_0_100%,_0_0)]">
                <img
                  className="w-full h-full rounded-3xl object-cover"
                  src={defaultPortrait}
                  loading="eager"
                  alt="Portrait"
                />
              </div>
            </div>
            <div className="md:w-6/10 h-6/10 md:h-full md:mx-10 items-center md:items-end flex flex-col gap-1 justify-center">
              <p className='font-bold text-3xl text-gray-300'>James Carter</p>
              <div className=" md:w-full flex flex-col gap-1">
                <p className='justify-end text-sm lg:text-md font-semibold text-gray-400 flex gap-1 items-center hover:text-gray-200 transition-colors'>
                  123 Dummy, Lorem ipsum
                  <FaLocationDot className='text-xl lg:text-3xl p-1 rounded-full'/>
                </p>
                <p className='justify-end text-sm lg:text-md font-semibold text-gray-400 flex gap-1 items-center hover:text-gray-200 transition-colors'>
                  +00 1234 5555 9012
                  <FaPhone className='text-xl lg:text-3xl p-1 rounded-full'/>
                </p>
                <p className='justify-end text-sm lg:text-md font-semibold text-gray-400 flex gap-1 items-center hover:text-gray-200 transition-colors'>
                  email@example.com
                  <IoMdMail className='text-xl lg:text-3xl p-1 rounded-full'/>
                </p>
                <p className='justify-end text-sm lg:text-md font-semibold text-gray-400 flex gap-1 items-center hover:text-gray-200 transition-colors'>
                  <a href="https://mywebsite.com" target="_blank" rel="noopener noreferrer">mywebsite.com</a>
                  <FaLink className='text-xl lg:text-3xl p-1 rounded-full'/>
                </p>
              </div>
            </div>
            <button
              onClick={() => setFlipped(!flipped)}
              className="cursor-pointer absolute bottom-4 left-4 z-10 bg-gray-800/50 hover:bg-gray-800/70 p-2 rounded-full transition-colors"
              aria-label="Flip card"
            >
              <MdFlipCameraAndroid className="text-lg lg:text-2xl text-white" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
