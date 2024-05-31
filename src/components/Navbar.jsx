import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbHexagonLetterTFilled } from "react-icons/tb";
const Navbar = () => {
  return (
  <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
       
       <div className='text-5xl'><TbHexagonLetterTFilled /></div> 
            {/* <img className='mx-2 w-10' src={logo} alt="logo" /> */}
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
        <FaInstagramSquare />
        <FaSquareXTwitter />
        </div>

  </nav>
  )
}

export default Navbar
