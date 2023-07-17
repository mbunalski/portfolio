import React from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes}  from 'react-icons/fa'

const Navigationbar = () => {
  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#0a192f] text-[#5cf300]'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:'100px'}}/>
        </div>
        {/*Menu*/}
        <div>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>

        {/*Hamburger*/}
        <div className='hidden'>
            <FaBars />
        </div>

        {/*Mobile Menu*/}
        <ul className='hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
        </ul> 
        

        {/*Social Icons*/}
        <div></div>

    </div>
  )
}

export default Navigationbar