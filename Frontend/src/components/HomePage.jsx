import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Footer from './Footer'
const HomePage = () => {
  return (
    <div className='w-[100%] h-[100%]'>
      <Navbar/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default HomePage