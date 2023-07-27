import React from 'react'

import GitHub from '../assets/github.png'
import Selenium from '../assets/selenium.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Java from '../assets/java.png'
import Python from '../assets/python.png'



const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f]  text-gray-300'>

      {/*Container*/}
      <div clasName=' max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full w-full'>
        <div className='sm:px-20 px-5'>
          <p className='text-4xl border-[#5cf300] font-bold inline border-b-4 ' >Skills</p>
          <p className=' py-4 '>// These are the techologies I am most proficient with in order</p>
        </div>

        <div className ='px-5 lg:px-20 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'  src={Python} alt="Python Icon" />
            <p className='my-4'>Python</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'  src={Java} alt="Java Icon" />
            <p className='my-4'>Java</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'  src={JavaScript} alt="JavaScript Icon" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'  src={ReactImg} alt="React Icon" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'  src={Selenium} alt="Selenium Icon" />
            <p className='my-4'>Selenium</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'  src={GitHub} alt="GitHub Icon" />
            <p className='my-4'>GitHub</p>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Skills