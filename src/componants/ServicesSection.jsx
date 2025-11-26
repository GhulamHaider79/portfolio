import { motion } from "framer-motion";
import { services} from "../assets/assets.js";

export default function ServicesSection() {
 

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My <span className="text-accent">Services</span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Icon className="text-4xl text-secondary group-hover:text-accent transition" />
                  <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 group-hover:text-gray-200 transition">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
