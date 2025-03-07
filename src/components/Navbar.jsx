import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-gray-700 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg font-bold">
        <li><Link to='/'>HOME</Link></li>
        <li>
          <Link to='/about'>ABOUT</Link>
        
        </li>
        <li><Link to='/portfolio'>PROJECTS</Link></li>
       
      </ul>
    </div>
    
    <Link to='/'><img src="download.jpeg" alt="" className='w-14 rounded-full' /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg font-bold">
    <li><Link to='/'>HOME</Link></li>
        <li>
          <Link to='/about'>ABOUT</Link>
        
        </li>
        <li><Link to='/portfolio'>PROJECTS</Link></li>
        
    </ul>
  </div>
  <div className="navbar-end">
  </div>
</div>
      
    </>
  )
}

export default Navbar
