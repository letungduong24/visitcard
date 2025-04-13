import React from 'react'
import { Link } from 'react-router-dom'
import Threads from './Threads'
import { motion } from "framer-motion";

const Highlight = () => {
  return (
    <div 
      className='bg-black pb-10 text-gray-300 px-3 '>
        <motion.div initial={{opacity: 0, y:50}} whileInView={{opacity: 1, y:0, transition: {duration: 1}}} className="w-full flex justify-center ">
            <div className="p-5 flex flex-col justify-center items-center relative aspect-[3/1] w-full md:w-3/4 xl:w-1/2 gap-3 rounded-3xl">
                <div className="flex justify-center items-center relative w-fit z-50 px-5 py-3 rounded-2xl hover:scale-110 transition-all duration-300">
                  <Link to='/login' className='  hover:border-gray-600 z-50 text-5xl font-bold'>join us</Link>
                  <Link to='/login' className='blur absolute hover:scale-105 transition-all duration-300 hover:border-gray-600  z-50 text-5xl font-bold'>join us</Link>
                </div>
                <h5 className='z-50 font-semibold text-gray-200'>Get your digital card now!</h5>
                <Threads
                  amplitude={1}
                  distance={0}
                  enableMouseInteraction={true}
                />
                <div className="absolute inset-0 w-full h-full  rounded-3xl filter bg-black border border-white"></div>
            </div>
        </motion.div>
    </div>
  )
}

export default Highlight