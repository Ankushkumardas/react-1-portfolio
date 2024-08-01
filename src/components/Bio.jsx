import React from 'react'
import { FiLinkedin } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import image from '../assets/b.png'
function Bio() {
  return (
    <section className='p-2 text-center bg-white shadow-md rounded-xl md:p-5 md:text-left hover:shadow-xl'>
        <img src={image} alt="dcs" className='w-32 h-32 rounded-xl' />
      <h1 className='mt-1 text-lg font-bold md:text-xl'>Web Developer</h1>
      <p className='py-2 font-medium text-gray-500'>I'm a Full Stack Engineer.</p>
      <div className='flex flex-row gap-2 mt-2'>
        <a href="www.linkedin.com/in/ankush-kumar-das-b12931222"><FiLinkedin className='text-blue-500 cursor-pointer hover:text-blue-700'/></a>
      <a href=""><MdAlternateEmail className='text-pink-500 cursor-pointer hover:text-pink-700'/></a>
      <a href="https://github.com/Ankushkumardas"><FiGithub className='text-red-500 cursor-pointer hover:text-red-700'/></a>
      
      </div>
    </section>
  )
}

export default Bio
