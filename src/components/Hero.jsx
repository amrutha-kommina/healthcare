import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-36 bg-gradient-to-br from-sky-50 via-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-6 lg:px-8 items-center">
        {/* Left Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sky-500 tracking-[0.25em] font-semibold mb-4"
          >
            CARING FOR LIFE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-blue-900 leading-tight mb-6"
          >
            Leading the Way <br />
            in Medical Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl"
          >
            Compassionate care, advanced treatment, and trusted specialists —
            all in one place for your health and wellbeing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="#services"
              className="bg-sky-400 text-blue-900 px-7 py-3 rounded-full font-semibold shadow-lg hover:bg-sky-300 transition"
            >
              Our Services
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="#appointment"
              className="border border-blue-900 text-blue-900 px-7 py-3 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition"
            >
              Book Now
            </motion.a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute w-80 h-80 bg-sky-200/40 rounded-full blur-3xl top-10 right-10"></div>

          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1582750433449-648ed127bb54"
            alt="doctor"
            className="relative h-[420px] md:h-[520px] w-auto object-cover rounded-[2rem] shadow-2xl border-8 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;