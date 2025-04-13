import React from 'react'
import Hero from '../components/Common/Hero'
import About from '../components/Common/About'
import Navbar from '../components/Common/Navbar'
import Highlight from '../components/Common/Highlight'

const Home = () => {
  return (
    <div className='relative'>
        <Navbar />
        <Hero />
        <About />
        <Highlight />
    </div>
  )
}

export default Home