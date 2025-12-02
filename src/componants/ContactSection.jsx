import { motion } from "framer-motion";
import { useState } from "react";

import { db } from "../firebase/firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
 const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error adding message:", error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };
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
          Contact <span className="text-accent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left Side Info */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold text-white mb-6 text-center md:text-left"
            >
              Let's Connect
            </motion.h3>

            <p className="text-gray-300 leading-7 mb-6 text-center md:text-left">
              If you have any project in mind, want to collaborate, or just want 
              to say hello — feel free to reach out. I’m always excited to talk 
              about new opportunities and ideas.
            </p>

            {/* Contact Info */}
            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-accent text-2xl" />
                <p className="text-gray-300">ghulamhaider11201@gmail.com</p>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-accent text-2xl" />
                <p className="text-gray-300">+92 3422109898</p>
              </div>

              <div className="flex items-center   space-x-4">
                <FaMapMarkerAlt className="text-accent text-2xl" />
                <p className="text-gray-300">Lahore, Punjab, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <motion.form
          onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700"
          >
            {success && (
              <p className="mb-4 text-green-400">Message sent successfully!</p>
            )}
            
              <div className="mb-5">
              <label className="text-gray-300 mb-2 block">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-accent outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-5">
              <label className="text-gray-300 mb-2 block">Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-accent outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-5">
              <label className="text-gray-300 mb-2 block">Your Message</label>
              <textarea
                rows="5"
                 value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-accent outline-none"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button
               type="submit"
              disabled={loading}
              className="w-full bg-accent text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition"
            >
             {loading ? "Sending..." : "Send Message"}
            </button>
           
          </motion.form>

        </div>
      </div>
    </motion.section>
  );
}
