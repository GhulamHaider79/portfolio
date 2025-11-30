import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa";
import profileImage from "../assets/profileImage.jpeg";


import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await signInWithEmailAndPassword(auth, email, password);
   navigate("/admin");  // redirect
  } catch (error) {
    alert("Invalid email or password");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-600 p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

        <div className="flex justify-center items-center w-full mx-auto"> 
            <img src={profileImage} alt="profile" className="w-20 h-20 rounded-full" />
            </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <div className="flex items-center gap-2 border rounded-xl p-3 bg-gray-600">
              <FaUser size={18} />
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-transparent outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <div className="flex items-center gap-2 border rounded-xl p-3 bg-gray-600">
              <FaLock size={18} />
              <input
                type="password"
                placeholder="Enter password"
                className="w-full bg-transparent outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}
