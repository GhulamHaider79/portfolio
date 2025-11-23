import React, { useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"

function Navbar() {
   const [open, setOpen] = useState(false);
  
   const [scrolled, setScrolled] = useState(false);



useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-[#0f0f0f]" : "bg-transparent"
      }`}>
        <div className='contianer flex justify-between p-4'>
        <div>
          <h1 className="text-2xl">
            Code 
            <span className='text-accent'>@Me</span>
          </h1>
        </div>
        <nav className='hidden md:flex gap-5 '>
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
        

     

 {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
         {open ? <HiX /> : <HiMenu />}
        </button>
      </div>
      </div>

      {/* Mobile Menu */}
        <div>
           <nav className={`flex flex-col items-center gap-7 h-screen bg-[#0f0f0f] text-white md:hidden transition-all duration-300 ${
    open ? "flex" : "hidden"
  }`}>
         <NavLink
  to="/"
  
  className={({ isActive }) =>
    `relative inline-block transition-all duration-300 underline-offset-4
     after:content-[''] after:absolute after:left-0 after:-bottom-1 
     after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300
     ${isActive ? "text-accent after:w-full" : "hover:text-accent hover:after:w-full"}`
     
  }
    onClick={() => setOpen(!open)}
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
    onClick={() => setOpen(!open)}
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
    onClick={() => setOpen(!open)}
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
    onClick={() => setOpen(!open)}
>
  Contact
</NavLink>
        </nav>
        </div>
        
    </>
  )
}

export default Navbar
