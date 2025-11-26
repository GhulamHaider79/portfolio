import React, { useState, useEffect } from "react";
;
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
      <div className={`sticky top-0 z-50 transition-colors duration-500 ${scrolled ? "bg-[#0f0f0f] opacity-95" : "bg-transparent "
        }`}>
        <div className='contianer flex justify-between p-4'>
          <div>
            <h1 className="text-2xl">
              Code
              <span className='text-accent'>@Me</span>
            </h1>
          </div>
          <nav className='hidden md:flex gap-5 '>
            <a
              href="#home"
             className="
  relative inline-block transition-all duration-300
  after:content-[''] after:absolute after:left-0 after:-bottom-1
  after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300
  hover:text-accent hover:after:w-full"
              
            >
              Home
            </a>


            <a
              href="#skills"
              className="
  relative inline-block transition-all duration-300
  after:content-[''] after:absolute after:left-0 after:-bottom-1
  after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300
  hover:text-accent hover:after:w-full"
              
            >
              Skills
            </a>

            <a
              href="#about"
             className="
  relative inline-block transition-all duration-300
  after:content-[''] after:absolute after:left-0 after:-bottom-1
  after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300
  hover:text-accent hover:after:w-full"
            >
              About
            </a>

            <a
              href="#services"
             className="
  relative inline-block transition-all duration-300
  after:content-[''] after:absolute after:left-0 after:-bottom-1
  after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300
  hover:text-accent hover:after:w-full"
            >
              Services
            </a>

            <a
              href="#contact"
             className="
  relative inline-block transition-all duration-300
  after:content-[''] after:absolute after:left-0 after:-bottom-1
  after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300
  hover:text-accent hover:after:w-full"
            >
              Contact
            </a>
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
        <nav className={`flex flex-col items-center gap-7 h-screen bg-[#0f0f0f] text-white md:hidden transition-all duration-300 ${open ? "flex" : "hidden"
          }`}>
          <a
            href="#home"

           className="
  relative inline-block transition-all duration-300
  after:content-[''] after:absolute after:left-0 after:-bottom-1
  after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300
  hover:text-accent hover:after:w-full"
            onClick={() => setOpen(!open)}
          >
            Home
          </a>


          <a
            href="#skills"
           className="
  relative inline-block transition-all duration-300
  after:content-[''] after:absolute after:left-0 after:-bottom-1
  after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300
  hover:text-accent hover:after:w-full"
          >
            Skills
          </a>

          <a
            href="#about"
           className="
  relative inline-block transition-all duration-300
  after:content-[''] after:absolute after:left-0 after:-bottom-1
  after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300
  hover:text-accent hover:after:w-full"
            onClick={() => setOpen(!open)}
          >
            About
          </a>

          <a
            href="#services"
           className="
  relative inline-block transition-all duration-300
  after:content-[''] after:absolute after:left-0 after:-bottom-1
  after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300
  hover:text-accent hover:after:w-full"
            onClick={() => setOpen(!open)}
          >
            Services
          </a>



          <a
            href="#contact"
            className="
  relative inline-block transition-all duration-300
  after:content-[''] after:absolute after:left-0 after:-bottom-1
  after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300
  hover:text-accent hover:after:w-full"
            onClick={() => setOpen(!open)}
          >
            Contact
          </a>
        </nav>
      </div>

    </>
  )
}

export default Navbar
