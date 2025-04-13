import React from 'react'
import Card from '../Card/Card'
import bg from '../../assets/bg.jpg'
import { useImagePreloader } from '../../hooks/useImagePreloader';
import { motion } from "framer-motion";

const Hero = () => {
  useImagePreloader([bg]);
  return (
    <div className='relative text-white w-full px-3  h-screen flex flex-col justify-center'>
        <img className='object-cover absolute -z-40 w-full h-full inset-0' src={bg} alt="" />
        <div className="w-full flex justify-center">
            <div className="w-full md:w-3/4 xl:w-1/2 text-center mb-5">
              <motion.h1 initial={{opacity: 0.3, scale: 0.8}} whileInView={{opacity: 1, scale: 1, transition: {duration: 1}}}  className='text-7xl font-bold'>itsme.</motion.h1>
            </div>
        </div>
        <div className="w-full flex justify-center">
            <Card />
        </div>
        <div className="w-full flex justify-center">
            <div className="w-full md:w-3/4 xl:w-1/2 text-center mt-5">
              <motion.h4 initial={{opacity: 0.3, scale: 0.8}} whileInView={{opacity: 1, scale: 1, transition: {duration: 1}}} className='text-xl md:text-2xl font-bold'>Create Your Digital Visit Card</motion.h4>
              <motion.h5 initial={{opacity: 0.3, scale: 0.8}} whileInView={{opacity: 1, scale: 1, transition: {duration: 1}}} className='text-lg md:text-xl'>Stand out with a personalized, shareable online card. No coding required.</motion.h5>
            </div>
        </div>
    </div>
  )
}

export default Hero