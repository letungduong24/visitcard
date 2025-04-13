import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowPointer } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='w-full p-3 flex justify-center gap-5 text-white items-center absolute z-100'>
            <p className='text-2xl font-bold'>itsme.</p>
            <Link className='font-semibold px-3 py-2 rounded-2xl hover:scale-105 transition-all duration-300 block' to='/'>Home</Link>
            <Link className='font-semibold px-3 py-2 rounded-2xl hover:scale-105 transition-all duration-300 block' to='/'>Cards</Link>
            <Link className='font-semibold px-3 py-2 rounded-2xl hover:scale-105 transition-all duration-300 block' to='/'>Login</Link>
    </div>
  )
}

export default Navbar