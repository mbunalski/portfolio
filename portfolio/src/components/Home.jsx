import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll'

export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <h1 className='text-4xl sm:text-8xl font-bold text-[#5cf300]'>This Site and all projects are currently under construction.</h1>
            <p className='text-[#5cf300]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-gray-100'>Michael Bunalski</h1>
            <h2 className='text-4xl sm:text-7xl text-gray-400'>I'm a Software Engineer</h2>
            <p className='text-gray-400 py-4 max-w-[700px]'>I am a full-stack software engineer and graduate student.</p>
            <div>
                <Link to="work" smooth={true}  duration={500}>
                    
                
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5cf300] hover:border-[#5cf300]'> Work
                
                <span className='group-hover:rotate-90 duration-300'>
                
                <HiArrowNarrowRight className='ml-2' /> 
                </span>
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home