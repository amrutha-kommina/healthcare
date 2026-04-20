import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "./components/sectionReveal"; 

const doctors = [
  {
    name: "Dr. Reena Rani",
    specialty: "Neurology",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    name: "Dr. Charanjit Singh",
    specialty: "Cardiology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  },
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-24 bg-gray-50 text-center">
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sky-500 font-semibold tracking-[0.25em]">
            TRUSTED CARE
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-14">
            Our Doctors
          </h2>

          {/* Center 2 cards nicely */}
          <div className="flex flex-wrap justify-center gap-8">
            {doctors.map((doctor, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="w-full sm:w-[320px] lg:w-[360px] bg-white rounded-3xl shadow-md hover:shadow-2xl overflow-hidden transition"
              >
                <div className="overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-80 object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="bg-blue-50 p-6">
                  <h3 className="font-semibold text-lg text-blue-900">
                    {doctor.name}
                  </h3>
                  <p className="text-sky-500 font-bold">{doctor.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default Doctors;