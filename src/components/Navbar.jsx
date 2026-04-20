import React from "react";
import { motion } from "framer-motion";
import { Phone, Clock3, MapPin, Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 py-3">
          <h1 className="text-2xl font-bold text-blue-900 tracking-wide">
            MED<span className="text-sky-500">DICAL</span>
          </h1>

          <div className="hidden lg:flex gap-8 text-sm text-blue-900">
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-sky-500" />
              <div>
                <p className="font-semibold">EMERGENCY</p>
                <p className="text-sky-500">01881235193</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={18} className="text-sky-500" />
              <div>
                <p className="font-semibold">WORK HOUR</p>
                <p className="text-sky-500">9:00 AM - 6 PM Weekdays</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-sky-500" />
              <div>
                <p className="font-semibold">LOCATION</p>
                <p className="text-sky-500">IIT ROPAR</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-blue-900/95 backdrop-blur-md shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 py-4 text-white">
          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#home" className="hover:text-sky-300 transition">Home</a>
            <a href="#about" className="hover:text-sky-300 transition">About us</a>
            <a href="#services" className="hover:text-sky-300 transition">Services</a>
            <a href="#doctors" className="hover:text-sky-300 transition">Doctors</a>
            <a href="#contact" className="hover:text-sky-300 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-5">
            <button className="hover:text-sky-300 transition">
              <Search size={20} />
            </button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="#appointment"
              className="bg-sky-300 text-blue-900 px-6 py-2.5 rounded-full font-semibold shadow-md hover:bg-sky-200 transition"
            >
              Appointment
            </motion.a>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;