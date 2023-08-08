import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook}  from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

let baseurl = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1)
const NavBar = () => {
  const [nav,setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#0a192f] text-[#5cf300]'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:'100px'}}/>
        </div>
        {/*Menu*/}
        
            <ul className='hidden md:flex'>
                <li>
                    <a href={baseurl} className='text-[#5cf300] no-underline' >
                    Home
                    </a>
                </li>
                <li>
                    <Link to="about" smooth={true}  duration={500}>
                    About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true}  duration={500}>
                    Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true}  duration={500}>
                    Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true}  duration={500}>
                    Contact
                    </Link>
                </li>
            </ul>

        {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*Mobile Menu*/}
        <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick}  to="home" smooth={true}  duration={500}>
                    Home
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true}  duration={500}>
                    About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true}  duration={500}>
                    Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true}  duration={500}>
                    Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true}  duration={500}>
                    Contact
                    </Link>
                </li>
        </ul> 
        

        {/*Social Icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/michael-bunalski" target='blank'>
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-10px] duration-300 bg-gray-800'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/mbunalski" target='blank'>
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-10px] duration-300 bg-teal-500'>
                    <Link className='flex justify-between items-center w-full text-gray-300' to="contact" smooth={true}  duration={500}>
                        Email <HiOutlineMail size={30} />
                    </Link>
                    {/* <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        Email <HiOutlineMail size={30} />
                    </a> */}
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-10px] duration-300 bg-gray-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>

    </div>
  
  )
}

export default NavBar