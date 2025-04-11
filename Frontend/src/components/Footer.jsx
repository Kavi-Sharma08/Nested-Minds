import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full min-h-14 bg-blue-500 text-white flex justify-between '>
      <p>Copyright 2025</p>
      <div className='flex justify-evenly w-[200px] items-center'>
        <span><FaFacebook size={32}/></span>
        <span><FaInstagram size={32}/></span>
        <span><FaLinkedin size={32}/></span>
      </div>
      

    </div>
  )
}

export default Footer