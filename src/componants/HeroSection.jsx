import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div>
        <h1>Ghulam Haider</h1>
      </div>
      <div className="flex">
        <h1 className="text-2xl typewriter">
          I am a <span className="text-accent">freelancer</span>
        </h1>
      </div>
      <div className="flex gap-5 mt-4">
        <Link
          to="#"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          
          className={` ${
           isHovered ? 'btnTransparent' : 'btn'
          }`}
        >
          Hire Me
        </Link>
        <Link
          to="#"
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
           className={` ${
            isHovered ? 'btn' : 'btnTransparent'
          }`}
       
        >
          About Me
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
