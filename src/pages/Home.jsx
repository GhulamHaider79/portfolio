import React from 'react'

import Services from '../componants/ServicesSection'
import About from '../componants/AboutMe'
import HeroSection from '../componants/HeroSection'
import SkillSection from '../componants/SkillSection'
import Contact from '../componants/ContactSection'




const Home = () => {
  return (
    <div>

     <div id='home'>
       <HeroSection />
     </div>

      <div id='skills'>
        <SkillSection />
      </div>

       <div id='about'>
      <About />
     </div>


      <div id='services'>
 <Services />
      </div>

    

      <div id='contact'>
        <Contact />
      </div>
      
      
    </div>
  )
}

export default Home
