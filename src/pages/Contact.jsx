import { Mail, Phone, MapPin, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#f8f4ec] text-[#1a1a1a] flex items-center justify-center px-6 py-16 font-serif">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 border border-[#c9c2b5] rounded-xl shadow-[0_4px_0_#c9c2b5] bg-[#fbf9f3] p-10 md:p-16 relative">
        {/* Left - Contact Form */}
        <div>
          <motion.h1
            className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-[#1a1a1a]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let’s make something <br />
            timeless <span className="text-[#5e4ae3] italic">together.</span>
          </motion.h1>

          <p className="text-[#333] mb-10 font-mono text-sm">
            Got an idea, project, or collaboration in mind? Drop a message — I’ll get back to you soon.
          </p>

          <form className="space-y-5 font-mono">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#444] mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border border-[#bfb8aa] bg-transparent py-3 px-4 rounded-md text-sm focus:outline-none focus:border-[#5e4ae3] placeholder:text-[#9c9488]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#444] mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full border border-[#bfb8aa] bg-transparent py-3 px-4 rounded-md text-sm focus:outline-none focus:border-[#5e4ae3] placeholder:text-[#9c9488]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#444] mb-1">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows="4"
                className="w-full border border-[#bfb8aa] bg-transparent py-3 px-4 rounded-md text-sm focus:outline-none focus:border-[#5e4ae3] placeholder:text-[#9c9488]"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95, rotate: 0 }}
              className="mt-4 bg-[#5e4ae3] text-[#fefefe] px-10 py-3 rounded-full font-bold tracking-wider shadow-[0_3px_0_#2d1fb0] hover:shadow-[0_5px_0_#2d1fb0] transition-all duration-200 uppercase text-sm"
            >
              <Mail className="inline-block mr-2 w-4 h-4" />
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="flex flex-col justify-center font-mono text-sm border-t md:border-t-0 md:border-l border-[#d4cfc5] pt-10 md:pt-0 md:pl-10 space-y-8">
          <div>
            <h3 className="text-lg font-bold font-serif mb-4 text-[#1a1a1a]">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5e4ae3]" /> 
                <a href="mailto:youremail@gmail.com" className="underline hover:text-[#5e4ae3]">
                  youremail@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#5e4ae3]" /> +1 234 567 890
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#5e4ae3]" /> Somewhere, Earth 🌍
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold font-serif mb-4 text-[#1a1a1a]">Socials</h3>
            <div className="flex space-x-5 text-[#1a1a1a]">
              <a href="#" className="hover:text-[#5e4ae3] transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#5e4ae3] transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#5e4ae3] transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#5e4ae3] transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-[#d4cfc5]">
            <p className="text-xs text-[#666]">
              Designed with ❤️ by <span className="font-serif font-semibold">Kailu</span> — vintage print ✕ Gen Z energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
