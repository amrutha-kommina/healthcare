import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-3">
            MED<span className="text-sky-300">DICAL</span>
          </h2>
          <p className="text-blue-100 leading-7">
            Leading the Way in Medical Excellence with compassionate care and
            trusted professionals.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-lg">Links</h3>
          <div className="space-y-2 text-blue-100">
            <a href="#appointment" className="block hover:text-sky-300 transition">
              Appointment
            </a>
            <a href="#doctors" className="block hover:text-sky-300 transition">
              Doctors
            </a>
            <a href="#services" className="block hover:text-sky-300 transition">
              Services
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-lg">Contact</h3>
          <div className="space-y-2 text-blue-100">
            <p>+91 1881 235193</p>
            <p className="break-words">reena@iitrpr.ac.in</p>
            <p className="break-words">drcharanjit@iitrpr.ac.in</p>
          </div>
        </div>

        {/* <div>
          <h3 className="font-semibold mb-3 text-lg">Newsletter</h3>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <input
              type="email"
              placeholder="Enter email"
              className="p-3 rounded-xl text-black w-full outline-none"
            />
            <button className="bg-sky-300 text-blue-900 px-5 py-3 rounded-xl font-semibold hover:bg-sky-200 transition">
              Subscribe
            </button>
          </div>
        </div> */}
      </div>

      <div className="border-t border-blue-800 mt-10 pt-6">
        <p className="text-center text-sm text-blue-200">
          © 2026 MEDDICAL. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;