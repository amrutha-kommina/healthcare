import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 z-50">

      {/* Top Info Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-3">

          <h1 className="text-2xl font-bold text-blue-900">
            MED<span className="text-sky-500">DICAL</span>
          </h1>

          <div className="flex gap-10 text-sm text-blue-900">

            <div className="flex items-center gap-2">
              <span>📞</span>
              <div>
                <p className="font-semibold">EMERGENCY</p>
                <p className="text-sky-500">01881235193</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span>⏰</span>
              <div>
                <p className="font-semibold">WORK HOUR</p>
                <p className="text-sky-500">9:00 AM - 6 PM Weekdays</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span>📍</span>
              <div>
                <p className="font-semibold">LOCATION</p>
                <p className="text-sky-500">120001 IIT ROPAR</p>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Main Navbar */}
      <div className="bg-blue-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 text-white">

          <div className="flex gap-8 font-medium">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Doctors</a>
            <a href="#">Contact</a>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xl">🔍</span>

            <button className="bg-sky-300 text-blue-900 px-6 py-2 rounded-full font-semibold">
              Appointment
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Navbar;