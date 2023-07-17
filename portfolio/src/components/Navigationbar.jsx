import React from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes}  from 'react-icons/fa'

const Navigationbar = () => {
  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:'100px'}}/>
        </div>
    </div>
  )
}

export default Navigationbar