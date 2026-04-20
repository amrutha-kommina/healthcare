import React from "react";
import SectionReveal from "./sectionReveal";

const Welcome = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <SectionReveal>
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <p className="text-sky-500 tracking-[0.25em] font-semibold mb-4">
            WELCOME TO MEDDICAL
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
            A Great Place to Receive Care
          </h2>

          <p className="text-gray-600 leading-8 mb-6 text-lg">
            We combine compassionate care with modern medical expertise to
            ensure every patient receives personalized attention, accurate
            diagnosis, and trusted treatment.
          </p>

          <button className="text-sky-500 font-semibold hover:translate-x-1 transition">
            Learn More →
          </button>
        </div>
      </SectionReveal>
    </section>
  );
};

export default Welcome;