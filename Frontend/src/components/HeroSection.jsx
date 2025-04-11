import React from 'react'
import Hero from "../assets/Hero.jpg"

const HeroSection = () => {
  return (
    <div className='w-full h-11/12 grid grid-cols-2'>
        <div className='w-full h-full col-span-1 '>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='main-heading sm:text-5xl text-3xl font-bold sm:ml-9 sm:mb-9 ml-2'>No more learning alone.</div>
                <div className='main-heading-2 sm:text-2xl ml-2 '>Real-time feedback lets your teacher support you better,</div>
                <div className='main-heading-2 sm:text-2xl ml-2'> right when you need it.</div>
            </div>
        </div>
        <div className='w-full h-full col-span-1 '>
            <div><img className='sm:h-[636px] md:h-[636px] h-[100%] w-full object-cover object-center' src={Hero} alt="" /></div>
            
        </div>
    </div>
  )
}

export default HeroSection