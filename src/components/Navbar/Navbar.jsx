import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import profile from '../../assets/profile_icon.png'


const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      {/* Navbar */}
      <nav className="px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className="w-60 h-60" />
          <span className="font-bold text-lg ">Ghibli Mori</span>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#" className="hover:text-gray-300 font-medium bg-gray-800 px-3 py-1 rounded">Dashboard</a>
          <a href="#" className="hover:text-gray-300 font-medium">Team</a>
          <a href="#" className="hover:text-gray-300 font-medium">Projects</a>
          <a href="#" className="hover:text-gray-300 font-medium">Calendar</a>
        </div>

        {/* Search and Profile */}
        <div className="search-profile">
          <input 
            type="text" 
            placeholder="Search" 
            className="rounded-md px-2 py-1 text-black focus:outline-none"
          />
          <button className="hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405M19 11a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <img src={profile} alt="Profile" className="w-10 h-8 rounded-full" />
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar