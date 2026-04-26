import React from "react";
import { motion } from "framer-motion";
import { Hospital, MapPin, ShieldAlert, Clock3 } from "lucide-react";
import SectionReveal from "./sectionReveal"; // or "./SectionReveal" depending on your file name

const hospitals = [
  {
    name: "Parmar Hospital",
    location: "Bela Road, Ropar",
    details:
      "24-hour emergency, ICU, and multispecialty services available.",
    emergency: "24/7 Emergency Support",
    highlight: true,
  },
  {
    name: "Dr Surjit Super Speciality Hospital",
    location: "Bela Road, Ropar",
    details: "Super speciality care with advanced consultation services.",
    emergency: "Emergency services available (verify before visit)",
    highlight: false,
  },
  {
    name: "Sangha Multispeciality Hospital",
    location: "Ropar",
    details: "Multispeciality hospital for general and specialist care.",
    emergency: "Emergency support available (verify before visit)",
    highlight: false,
  },
  {
    name: "Aggarwal Hospital",
    location: "Zail Singh Nagar, Ropar",
    details: "General medical support and nearby hospital access.",
    emergency: "Emergency support available (verify before visit)",
    highlight: false,
  },
];

const EmergencyHospitals = () => {
  return (
    <section id="emergency" className="py-24 bg-white">
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-red-500 font-semibold tracking-[0.25em] mb-3">
              EMERGENCY SUPPORT
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
              Emergency Hospitals Near IIT Ropar
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto leading-7">
              Quick access to nearby hospitals and emergency medical services
              around IIT Ropar / CLT. Please verify availability and services by
              phone before visiting.
            </p>
          </div>

          {/* Warning strip */}
          <div className="mb-10 bg-red-50 border border-red-100 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-3">
            <div className="flex items-center gap-2 text-red-600 font-semibold">
              <ShieldAlert size={20} />
              <span>For severe symptoms, seek immediate medical help.</span>
            </div>
            <p className="text-sm text-gray-600 md:ml-auto">
              Chest pain, breathing difficulty, severe bleeding, or unconsciousness should be treated as emergencies.
            </p>
          </div>

          {/* Hospital cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hospitals.map((hospital, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className={`rounded-3xl border p-6 shadow-sm transition ${
                  hospital.highlight
                    ? "bg-blue-900 text-white border-blue-900 shadow-xl"
                    : "bg-gray-50 border-slate-200 hover:shadow-xl"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-2xl ${
                      hospital.highlight
                        ? "bg-white/10"
                        : "bg-blue-100 text-blue-900"
                    }`}
                  >
                    <Hospital size={28} />
                  </div>

                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        hospital.highlight ? "text-white" : "text-blue-900"
                      }`}
                    >
                      {hospital.name}
                    </h3>

                    <div
                      className={`flex items-center gap-2 text-sm mb-3 ${
                        hospital.highlight ? "text-blue-200" : "text-gray-600"
                      }`}
                    >
                      <MapPin size={16} />
                      <span>{hospital.location}</span>
                    </div>

                    <p
                      className={`leading-7 mb-4 ${
                        hospital.highlight ? "text-blue-100" : "text-gray-700"
                      }`}
                    >
                      {hospital.details}
                    </p>

                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium ${
                        hospital.highlight
                          ? "bg-white/10 text-white"
                          : "bg-red-50 text-red-600 border border-red-100"
                      }`}
                    >
                      <Clock3 size={16} />
                      <span>{hospital.emergency}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default EmergencyHospitals;