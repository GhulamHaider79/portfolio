import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 py-12 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold">
            Code<span className="text-accent">@Me</span>
          </h2>
          <p className="mt-4 text-gray-400 leading-7">
            Building visually appealing, high-performing, and modern web
            experiences with React, Tailwind, and Framer Motion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="hover:text-accent transition"
              >
                Home
              </a>
            </li>

             <li>
              <a
                href="#skills"
                className="hover:text-accent transition"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="hover:text-accent transition"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-accent transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-accent transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
          <div className="flex space-x-5 text-2xl">

            <a href="#" className="hover:text-accent transition">
              <FaFacebook />
            </a>

            <a href="https://github.com/" className="hover:text-accent transition">
              <FaGithub />
            </a>

            <a href="#" className="hover:text-accent transition">
              <FaLinkedin />
            </a>

            <a href="#" className="hover:text-accent transition">
              <FaInstagram />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} <span className="text-accent">Code@Me</span> — All Rights Reserved.
      </div>
    </footer>
  );
}
