import React from "react";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import SectionReveal from "./components/sectionReveal"; // or "./SectionReveal"

const Contact = () => {
  const data = [
    {
      title: "EMERGENCY",
      icon: <Phone size={32} />,
      content: ["01881235193"],
      highlight: false,
    },
    {
      title: "LOCATION",
      icon: <MapPin size={32} />,
      content: ["IIT ROPAR", "PUNJAB, INDIA"],
      highlight: true,
    },
    {
      title: "EMAIL",
      icon: <Mail size={32} />,
      content: ["reena@iitrpr.ac.in", "drcharanjit@iitrpr.ac.in"],
      highlight: false,
    },
    {
      title: "WORKING HOURS",
      icon: <Clock size={32} />,
      content: ["Mon-Sat 09:00-20:00", "Sunday Emergency only"],
      highlight: false,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 text-center">
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sky-500 tracking-widest font-semibold mb-2">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-12">
            Contact
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className={`p-8 rounded-2xl text-left transition shadow-sm ${
                  item.highlight
                    ? "bg-blue-900 text-white shadow-xl"
                    : "bg-blue-100 text-blue-900 hover:shadow-lg"
                }`}
              >
                <div className="mb-4">{item.icon}</div>

                <h3 className="font-bold mb-3 text-lg">{item.title}</h3>

                {item.content.map((line, index) => (
                  <p
                    key={index}
                    className={`text-sm break-words leading-6 ${
                      item.highlight ? "text-blue-200" : "text-gray-700"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default Contact;