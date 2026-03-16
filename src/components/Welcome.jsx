import React from "react";

const Welcome = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-5xl mx-auto text-center px-8">

        <p className="text-sky-500 tracking-widest font-semibold mb-4">
          WELCOME TO MEDDICAL
        </p>

        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          A Great Place to Receive Care
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque placerat scelerisque tortor ornare ornare. 
          Convallis felis vitae tortor augue. Velit nascetur 
          proin massa in. Consequat faucibus porttitor enim et.
        </p>

        <button className="text-sky-500 font-semibold">
          Learn More →
        </button>

      </div>

    </section>
  );
};

export default Welcome;