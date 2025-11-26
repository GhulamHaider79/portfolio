import { motion } from "framer-motion";
import profileImage from "../assets/profileImage.jpeg";
export default function AboutMe() {
  return (
    <section 
    className="py-20 bg-gray-900" 
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          About <span className="text-accent">Me</span>
        </motion.h2>

        <div className="md:flex md:space-x-10 items-center">
          
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 mb-10 md:mb-0"
          >
            <img
             src={profileImage} 
              alt="Profile"
              className="rounded-3xl shadow-xl md:h-[456px] border-2 border-gray-700"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <p className="text-gray-300 text-lg leading-8 mb-6">
              Hi, I’m <span className="text-white font-semibold">Ghulam Haider</span>,  
              a passionate and results-driven <span className="text-secondary font-semibold">
              MERN Stack Developer</span> with expertise in creating modern, 
              user-friendly, and high-performance web applications. My focus is on writing 
              clean, optimized, and scalable code — with a deep love for React, Tailwind, 
              animations, and API-driven development.
            </p>

            <p className="text-gray-300 text-lg leading-8 mb-6">
              I enjoy transforming complex ideas into seamless digital experiences.  
              From reusable components to full-stack integrations, I believe in building 
              products that are not only functional but also meaningful and visually appealing.
            </p>

            <p className="text-gray-300 text-lg leading-8">
              When I’m not coding, I love learning new technologies, improving problem-solving 
              skills, and contributing to modern web development practices.  
              I’m always excited to take on new challenges and collaborate on impactful projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}