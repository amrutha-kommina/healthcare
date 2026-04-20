import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "./components/sectionReveal";

const Appointment = () => {
  return (
    <section id="appointment" className="py-24 bg-white">
      <SectionReveal>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-6 lg:px-8 items-center">
          <div>
            <p className="text-sky-500 font-semibold tracking-[0.25em] mb-3">
              BOOK NOW
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
              Book an Appointment
            </h2>
            <p className="text-gray-600 text-lg leading-8">
              Schedule your consultation with our experienced medical
              professionals for trusted care and personalized treatment.
            </p>
          </div>

          <form className="bg-blue-900 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 text-white shadow-2xl">
            <input
              placeholder="Name"
              className="p-3 bg-white/10 border border-white/20 rounded-xl placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            <input
              placeholder="Email"
              className="p-3 bg-white/10 border border-white/20 rounded-xl placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            <input
              placeholder="Phone"
              className="p-3 bg-white/10 border border-white/20 rounded-xl placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            <input
              type="date"
              className="p-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-300"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="md:col-span-2 p-3 bg-white/10 border border-white/20 rounded-xl placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="md:col-span-2 bg-sky-300 text-blue-900 py-3 rounded-xl font-semibold hover:bg-sky-200 transition"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </SectionReveal>
    </section>
  );
};

export default Appointment;