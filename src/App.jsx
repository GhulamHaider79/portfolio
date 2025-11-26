import { Routes, Route } from "react-router-dom";

import Navbar from "./componants/Navbar";
import FooterSection from './componants/FooterSection'
import Home from "./pages/Home";
import Services from "./componants/ServicesSection";
import About from "./componants/AboutMe";
import Contact from "./componants/ContactSection";
import SkillSection from './componants/SkillSection'


 
function App() {
 

  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/skills" element={<SkillSection />} />
         <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterSection />
    </>
  )
}

export default App
