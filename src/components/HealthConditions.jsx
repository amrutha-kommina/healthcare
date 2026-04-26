import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Droplets,
  Activity,
  ShieldPlus,
  Bone,
  Stethoscope,
  Wind,
  Smile,
  PersonStanding,
  Pill,
  AlertTriangle,
} from "lucide-react";
import SectionReveal from "./sectionReveal"; // or "./SectionReveal" based on your filename

const conditions = [
  {
    id: 1,
    name: "Diabetes Care",
    icon: <Droplets size={28} />,
    precautions: [
      "Monitor blood sugar regularly.",
      "Avoid sugary drinks and processed foods.",
      "Follow a balanced diet with controlled carbs.",
      "Exercise for at least 30 minutes daily.",
      "Stay hydrated and maintain healthy weight.",
    ],
    medicines: [
      "Metformin (only if prescribed)",
      "Glimepiride (doctor prescribed)",
      "Insulin (if advised by doctor)",
    ],
    whenToSeeDoctor: [
      "Frequent urination or extreme thirst",
      "Blurred vision",
      "Very high or very low sugar levels",
    ],
  },
  {
    id: 2,
    name: "Cardiac Care",
    icon: <HeartPulse size={28} />,
    precautions: [
      "Reduce salt intake.",
      "Avoid smoking and excessive alcohol.",
      "Exercise regularly.",
      "Manage stress and sleep properly.",
      "Monitor blood pressure periodically.",
    ],
    medicines: [
      "Aspirin (only if doctor recommended)",
      "BP medicines as prescribed",
      "Cholesterol medicines as prescribed",
    ],
    whenToSeeDoctor: [
      "Chest pain or pressure",
      "Shortness of breath",
      "Irregular heartbeat or dizziness",
    ],
  },
  {
    id: 3,
    name: "Stomach Care",
    icon: <Activity size={28} />,
    precautions: [
      "Avoid oily, spicy, and stale food.",
      "Eat smaller meals on time.",
      "Drink clean water.",
      "Avoid overeating late at night.",
      "Maintain food hygiene.",
    ],
    medicines: [
      "Antacids",
      "ORS for dehydration",
      "Pantoprazole / Omeprazole (doctor advice preferred)",
    ],
    whenToSeeDoctor: [
      "Persistent vomiting",
      "Blood in stool",
      "Severe abdominal pain",
    ],
  },
  {
    id: 4,
    name: "Pain Relief",
    icon: <Bone size={28} />,
    precautions: [
      "Rest the affected body part.",
      "Use hot/cold compress depending on pain type.",
      "Avoid overexertion.",
      "Maintain proper posture.",
      "Stretch gently if suitable.",
    ],
    medicines: [
      "Paracetamol",
      "Ibuprofen (avoid if gastric issues)",
      "Pain relief gel / spray",
    ],
    whenToSeeDoctor: [
      "Pain lasting more than a few days",
      "Swelling or redness",
      "Sudden severe pain",
    ],
  },
  {
    id: 5,
    name: "Liver Care",
    icon: <ShieldPlus size={28} />,
    precautions: [
      "Avoid alcohol completely.",
      "Avoid unnecessary medicines or supplements.",
      "Eat clean, low-fat food.",
      "Stay hydrated.",
      "Get regular liver function tests if needed.",
    ],
    medicines: [
      "No self-medication recommended",
      "Use only doctor-prescribed medication",
      "Vitamin supplements only if advised",
    ],
    whenToSeeDoctor: [
      "Yellowing of eyes/skin",
      "Dark urine",
      "Persistent fatigue or abdominal swelling",
    ],
  },
  {
    id: 6,
    name: "Oral Care",
    icon: <Smile size={28} />,
    precautions: [
      "Brush twice daily.",
      "Use dental floss.",
      "Avoid excessive sweets.",
      "Rinse after meals.",
      "Schedule regular dental checkups.",
    ],
    medicines: [
      "Pain relief gel",
      "Salt water rinse",
      "Mouthwash (chlorhexidine if advised)",
    ],
    whenToSeeDoctor: [
      "Toothache lasting more than 2 days",
      "Bleeding gums",
      "Swelling in jaw or mouth",
    ],
  },
  {
    id: 7,
    name: "Respiratory",
    icon: <Wind size={28} />,
    precautions: [
      "Avoid dust and smoke exposure.",
      "Wear a mask in polluted areas.",
      "Drink warm fluids.",
      "Rest well.",
      "Keep room ventilated.",
    ],
    medicines: [
      "Steam inhalation",
      "Cough syrup (as needed)",
      "Paracetamol for fever",
    ],
    whenToSeeDoctor: [
      "Difficulty breathing",
      "High fever for several days",
      "Wheezing or chest tightness",
    ],
  },
  {
    id: 8,
    name: "General Wellness",
    icon: <Stethoscope size={28} />,
    precautions: [
      "Sleep 7–8 hours daily.",
      "Eat a balanced diet.",
      "Stay physically active.",
      "Drink enough water.",
      "Manage stress effectively.",
    ],
    medicines: [
      "Multivitamins (only if needed)",
      "ORS for dehydration",
      "Consult doctor before supplements",
    ],
    whenToSeeDoctor: [
      "Persistent weakness",
      "Unexplained weight loss",
      "Long-term fatigue",
    ],
  },
  {
    id: 9,
    name: "Elderly Care",
    icon: <PersonStanding size={28} />,
    precautions: [
      "Ensure regular health checkups.",
      "Prevent falls with safe surroundings.",
      "Monitor BP, sugar, and hydration.",
      "Maintain medication schedule.",
      "Encourage light daily movement.",
    ],
    medicines: [
      "Only prescribed medicines",
      "Calcium/Vitamin D if advised",
      "Paracetamol for mild pain (if safe)",
    ],
    whenToSeeDoctor: [
      "Sudden confusion",
      "Frequent falls",
      "Breathing issues or chest pain",
    ],
  },
  {
    id: 10,
    name: "Cold & Immunity",
    icon: <ShieldPlus size={28} />,
    precautions: [
      "Drink warm fluids.",
      "Get enough rest.",
      "Eat vitamin-rich foods.",
      "Wash hands frequently.",
      "Avoid close contact if infection spreads.",
    ],
    medicines: [
      "Paracetamol",
      "Vitamin C supplements",
      "Steam inhalation / saline drops",
    ],
    whenToSeeDoctor: [
      "High fever",
      "Symptoms lasting more than a week",
      "Breathing difficulty",
    ],
  },
];

const HealthConditions = () => {
  const [selected, setSelected] = useState(conditions[0]);

  return (
    <section id="conditions" className="py-24 bg-gray-50">
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-sky-500 font-semibold tracking-[0.25em] mb-3">
              HEALTH SUPPORT
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
              Browse by Health Conditions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-7">
              Explore common health concerns, general precautions, basic home
              care, and commonly used over-the-counter medicines. Always consult
              a qualified doctor before starting any medication.
            </p>
          </div>

          {/* Condition Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
            {conditions.map((condition) => (
              <motion.button
                key={condition.id}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(condition)}
                className={`w-full text-left p-5 rounded-2xl border transition shadow-sm ${
                  selected.id === condition.id
                    ? "bg-blue-900 text-white border-blue-900 shadow-xl"
                    : "bg-white text-blue-900 border-slate-200 hover:shadow-lg"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl ${
                      selected.id === condition.id
                        ? "bg-white/10"
                        : "bg-slate-100"
                    }`}
                  >
                    {condition.icon}
                  </div>
                  <span className="font-semibold text-base leading-snug">
                    {condition.name}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Details Panel */}
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 text-blue-900 p-4 rounded-2xl">
                  {selected.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
                    {selected.name}
                  </h3>
                  <p className="text-gray-600">
                    General information for awareness only
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-amber-50 text-amber-700 border border-amber-200 px-4 py-2 rounded-xl text-sm">
                <AlertTriangle size={18} />
                Consult a doctor before taking medicines
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Precautions */}
              <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldPlus className="text-sky-500" size={22} />
                  <h4 className="text-xl font-bold text-blue-900">
                    Precautions
                  </h4>
                </div>
                <ul className="space-y-3">
                  {selected.precautions.map((item, index) => (
                    <li key={index} className="text-gray-700 leading-6 flex gap-2">
                      <span className="text-sky-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Medicines */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <Pill className="text-blue-700" size={22} />
                  <h4 className="text-xl font-bold text-blue-900">
                    Common OTC / Guidance
                  </h4>
                </div>
                <ul className="space-y-3">
                  {selected.medicines.map((item, index) => (
                    <li key={index} className="text-gray-700 leading-6 flex gap-2">
                      <span className="text-blue-700 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Doctor Advice */}
              <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="text-red-500" size={22} />
                  <h4 className="text-xl font-bold text-blue-900">
                    When to See a Doctor
                  </h4>
                </div>
                <ul className="space-y-3">
                  {selected.whenToSeeDoctor.map((item, index) => (
                    <li key={index} className="text-gray-700 leading-6 flex gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default HealthConditions;