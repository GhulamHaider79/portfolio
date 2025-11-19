import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='contianer flex justify-between p-4'>
        <div>
          <h1>
            Coder 
            <span className='text-accent'>@Me</span>
          </h1>
        </div>
        <nav className='flex gap-5 '>
         <NavLink
  to="/"
  className={({ isActive }) =>
    `relative inline-block transition-all duration-300 underline-offset-4
     after:content-[''] after:absolute after:left-0 after:-bottom-1 
     after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300
     ${isActive ? "text-accent after:w-full" : "hover:text-accent hover:after:w-full"}`
  }
>
  Home
</NavLink>
         <NavLink
  to="services"
  className={({ isActive }) =>
    `relative inline-block transition-all duration-300 underline-offset-4
     after:content-[''] after:absolute after:left-0 after:-bottom-1 
     after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300
     ${isActive ? "text-accent after:w-full" : "hover:text-accent hover:after:w-full"}`
  }
>
  Services
</NavLink>
         <NavLink
  to="about"
  className={({ isActive }) =>
    `relative inline-block transition-all duration-300 underline-offset-4
     after:content-[''] after:absolute after:left-0 after:-bottom-1 
     after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300
     ${isActive ? "text-accent after:w-full" : "hover:text-accent hover:after:w-full"}`
  }
>
  About
</NavLink>
         <NavLink
  to="contact"
  className={({ isActive }) =>
    `relative inline-block transition-all duration-300 underline-offset-4
     after:content-[''] after:absolute after:left-0 after:-bottom-1 
     after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300
     ${isActive ? "text-accent after:w-full" : "hover:text-accent hover:after:w-full"}`
  }
>
  Contact
</NavLink>
        </nav>

      </div>
    </>
  )
}

export default Navbar
