import { skills } from "../assets/assets.js";
import { motion } from "framer-motion";

export default function SkillSection() {
  
  return (
    <motion.section 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    className="py-20 bg-gray-900">
      <div className="max-w-6xl  md:mt-28 lg:mt-0 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My <span className='text-accent'>Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Icon className="text-4xl text-secondary group-hover:text-accent transition" />
                  <h3 className="text-2xl font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-gray-300 group-hover:text-gray-200 transition">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}