import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // run: npm install lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d]/70 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-semibold text-white tracking-wide"
        >
          <span className="text-accent">K</span>ailash
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-accent font-medium"
                : "hover:text-accent transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-accent font-medium"
                : "hover:text-accent transition"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-accent font-medium"
                : "hover:text-accent transition"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? "text-accent font-medium"
                : "hover:text-accent transition"
            }
          >
            Resume
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0d0d0d]/90 backdrop-blur-md border-t border-gray-800 text-gray-300 px-6 py-4 space-y-4">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-accent transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="block hover:text-accent transition"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-accent transition"
          >
            Contact
          </NavLink>
          <NavLink
            to="https://docs.google.com/document/d/1w4D0hfszwdzpvnPcLBIDOA_qQcXDJmQAiBcckSn1Tt4/edit?usp=sharing"
            onClick={() => setIsOpen(false)}
            className="block hover:text-accent transition"
          >
            Resume
          </NavLink>
        </div>
      )}
    </nav>
  );
}
