import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex items-center bg-gray-50 pt-36">

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10 px-8 items-center">

        {/* Left Text */}
        <div>
          <p className="text-sky-500 tracking-widest font-semibold mb-4">
            CARING FOR LIFE
          </p>

          <h1 className="text-5xl font-bold text-blue-900 leading-tight mb-6">
            Leading the Way <br />
            in Medical Excellence
          </h1>

          <button className="bg-sky-300 text-blue-900 px-6 py-3 rounded-full font-semibold">
            Our Services
          </button>
        </div>

        {/* Image */}
        <div className="h-[500px] flex justify-end">
            <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54"
                alt="doctor"
                className="h-full w-auto object-cover rounded-xl"
            />
        </div>

      </div>

    </section>
  );
};

export default Hero;