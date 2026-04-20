import React from "react";
import {
  Brain,
  Bone,
  Activity,
  Ear,
  Eye,
  HeartPulse,
  Wind,
  Droplets,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionReveal from "./sectionReveal";

const Specialities = () => {
  const items = [
    { name: "Neurology", icon: <Brain size={32} /> },
    { name: "Bones", icon: <Bone size={32} /> },
    { name: "Oncology", icon: <Activity size={32} /> },
    { name: "Otorhinolaryngology", icon: <Ear size={32} /> },
    { name: "Ophthalmology", icon: <Eye size={32} /> },
    { name: "Cardiovascular", icon: <HeartPulse size={32} /> },
    { name: "Pulmonology", icon: <Wind size={32} /> },
    { name: "Renal Medicine", icon: <Droplets size={32} /> },
  ];

  return (
    <section id="services" className="py-24 bg-white text-center">
      <SectionReveal>
        <p className="text-sky-500 font-semibold tracking-[0.25em] mb-3">
          ALWAYS CARING
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-14">
          Our Specialties
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`p-8 rounded-2xl border shadow-sm transition cursor-pointer ${
                i === 1
                  ? "bg-blue-900 text-white border-blue-900 shadow-xl"
                  : "bg-white text-blue-900 border-slate-200 hover:shadow-xl"
              }`}
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
};

export default Specialities;