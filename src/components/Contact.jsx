import React from 'react'
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
const Contact = () => {
  return (
    <>
    <footer id='contact' className="footer sm:footer-horizontal footer-center bg-base-100 text-base-content rounded p-10  flex justify-around" >
    <div >
            <h1 className='text-2xl md:text-5xl font-bold '>Contact</h1>
            <h3 className='text-sm md:text-2xl font-normal'>Feel Free to reach</h3>
         </div>
    <div className='flex gap-10 '>
   
      <a href="mailto:vaishnavisingh2005.college@gmail.com" >
      <MdEmail className='text-3xl' />
      </a>
      
      <a href="https://github.com/Vaishnavi187" >
      <BsGithub className='text-3xl' />
      </a>

      <a href="https://www.linkedin.com/in/vaishnavi-singh-5481b7341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
      <FaLinkedin  className='text-3xl' />
      </a>
    </div>
</footer>
      


   
  
    </>
  )
}

export default Contact
