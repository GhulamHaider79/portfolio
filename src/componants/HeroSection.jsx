import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';


import profileImage from "../assets/profileImage.jpeg";

function HeroSection() {
  return (
    <>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='w-full mb-4 md:py-12 lg:py-0 md:h-screen lg:flex gap-9 md:gap-0 justify-center items-center'

      >
        {/* // left side contant */}
        <div className='flex gap-8 mt-5 lg:mt-0  justify-center items-center p-6 md:p-0 md:pl-12  w-full lg:w-[50%] flex-col'>
          <div className="flex w-full  items-center lg:items-start ">
            <h1 className='flex justify-center text-2xl md:text-3xl w-full  lg:text-4xl xl:text-5xl'>Hi, I'M Ghulam Haider</h1>
          </div>
          <div className="flex flex-col w-full gap-5  items-center lg:items-start  lg:w-[75%]">
            <h1 className=" md:text-2xl lg:text-3xl xl:text-4xl typewriter">
              Full Stack <span className="text-accent">Developer</span>
            </h1>
            <p className='w-full md:w-[75%]  lg:w-full'>
              "Crafting interactive front-end experiences and building efficient back-end architectures, I turn ideas into reliable, modern web applications."
            </p>
          </div>
          <div className="flex gap-6 mt-4">
            <a
              href="#contact"
              className='btn hover:bg-accent transition-colors duration-300 hover:text-black '
            >
              Hire Me
            </a>
            <a
              href="#about"
              className='btnTransparent hover:bg-accent transition-colors duration-300 hover:text-black'
            >
              About Me
            </a>
          </div>
        </div>

        {/* Right Side Contant */}
        <div
          className=' flex  justify-center items-center lg:pl-12 lg:w-[50%]  mt-10 lg:mt-0'
        >
          <div className='w-[290px] h-[290px] md:w-[325px] md:h-[325px] relative bg-accent rounded-full'>
            <motion.div
        initial={{ y: 0, }}
       animate={{ y: [-10, 0, -10] }}
        transition={{ 
          duration: 3,    
          repeat: Infinity, 
          repeatType: "loop",
           ease: "easeInOut"  
        }}
      
            
            >
             <img className='w-[290px] h-[290px] md:w-[325px] md:h-[325px] rounded-full ' src={profileImage} alt="profile" />
            </motion.div>


          </div>
        </div>
      </motion.div>

    </>
  );
}

export default HeroSection;
