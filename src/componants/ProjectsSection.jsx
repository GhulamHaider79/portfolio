import React from 'react'
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from '../assets/assets'

function ProjectsSection() {
    return (
        
            <motion.div 
             initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-16 px-6 md:px-20 " 
            id="projects">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My <span className='text-accent'>Projects</span></h2>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                    {projects.map((project, i) => (
                        <motion.div
                         whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                            key={i}
                            className="bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />


                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p  className="text-gray-300 group-hover:text-gray-200 transition">{project.desc}</p>


                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-200 text-gray-700 text-xs py-1 px-3 rounded-full"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>


                                <div className="flex gap-4 mt-4">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-secondary hover:underline"
                                    >
                                        <FiExternalLink size={18} /> Live
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-gray-300 hover:underline"
                                    >
                                        <FiGithub className='text-secondary' size={18} /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        
    )
}

export default ProjectsSection
