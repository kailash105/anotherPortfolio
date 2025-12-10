import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
return ( <footer className="bg-gray-900 text-gray-400 py-6 mt-20"> <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center"> <p className="text-sm mb-4 md:mb-0">
© {new Date().getFullYear()} Kailash — All Rights Reserved. </p>


    <div className="flex space-x-6">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors"
      >
        <FaGithub size={20} />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors"
      >
        <FaInstagram size={20} />
      </a>
    </div>
  </div>
</footer>


);
}
