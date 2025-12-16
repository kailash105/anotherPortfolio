import { Mail, Phone, MapPin, Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyF92v8IY_xu2HAr3Wve8zNm9x5B61gRhpaUgNY0jmUfd4fsAeoplpFMkCxkusvTQU/exec";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-16 font-serif overflow-hidden">
      {/* === Background Video === */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
      >
        <source src="/videos/ContactBG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* === Overlay === */}
      <div className="absolute inset-0 bg-[#f8f4ec]/35 backdrop-blur-[0.5px]" />

      {/* === Content === */}
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 border border-[#c9c2b5] rounded-xl shadow-[0_4px_0_#c9c2b5] bg-[#fbf9f3]/80 backdrop-blur-sm p-10 md:p-16">

        {/* Left - Form */}
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

          <form onSubmit={handleSubmit} className="space-y-5 font-mono">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#444] mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
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
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border border-[#bfb8aa] bg-transparent py-3 px-4 rounded-md text-sm focus:outline-none focus:border-[#5e4ae3] placeholder:text-[#9c9488]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#444] mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell me about your project..."
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full border border-[#bfb8aa] bg-transparent py-3 px-4 rounded-md text-sm focus:outline-none focus:border-[#5e4ae3] placeholder:text-[#9c9488]"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95, rotate: 0 }}
              disabled={loading}
              className="mt-4 bg-[#5e4ae3] text-[#fefefe] px-10 py-3 rounded-full font-bold tracking-wider shadow-[0_3px_0_#2d1fb0] hover:shadow-[0_5px_0_#2d1fb0] transition-all duration-200 uppercase text-sm disabled:opacity-60"
            >
              <Mail className="inline-block mr-2 w-4 h-4" />
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {success && (
              <p className="text-green-600 text-sm mt-4">
                ✨ Message sent successfully. I’ll get back to you soon!
              </p>
            )}
          </form>
        </div>

        {/* Right - Info */}
        <div className="flex flex-col justify-center font-mono text-sm border-t md:border-t-0 md:border-l border-[#d4cfc5] pt-10 md:pt-0 md:pl-10 space-y-8">
          <div>
            <h3 className="text-lg font-bold font-serif mb-4 text-[#1a1a1a]">
              Contact Info
            </h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5e4ae3]" />
                <a
                  href="mailto:kailashkbc2@gmail.com"
                  className="underline hover:text-[#5e4ae3]"
                >
                  kailashkbc2@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#5e4ae3]" /> +91 79954 38218
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#5e4ae3]" /> Hyderabad, India
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold font-serif mb-4 text-[#1a1a1a]">
              Socials
            </h3>
            <div className="flex space-x-5">
              <a
                href="https://www.linkedin.com/in/kailash-khadarabad-149660156/"
                className="hover:text-[#5e4ae3]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/kailash105"
                className="hover:text-[#5e4ae3]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/itskailash89"
                className="hover:text-[#5e4ae3]"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-[#d4cfc5]">
            <p className="text-xs text-[#666]">
              Designed BY{" "}
              <span className="font-serif font-semibold">
                Kailash Khadarabad
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
