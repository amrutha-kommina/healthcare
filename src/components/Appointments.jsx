import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./sectionReveal"; // or "./SectionReveal" based on your filename

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12: 00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");
    setIsError(false);

    try {
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setIsError(true);
        setStatusMessage(data.message || "Failed to book appointment.");
      } else {
        setIsError(false);
        setStatusMessage("Appointment booked successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          timeSlot: "",
          message: "",
        });
      }
    } catch (error) {
      setIsError(true);
      setStatusMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="appointment" className="py-24 bg-white">
      <SectionReveal>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-6 lg:px-8 items-center">
          <div>
            <p className="text-sky-500 font-semibold tracking-[0.25em] mb-3">
              BOOK NOW
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
              Book an Appointment
            </h2>
            <p className="text-gray-600 text-lg leading-8">
              Schedule your consultation with our experienced medical
              professionals for trusted care and personalized treatment.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-blue-900 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 text-white shadow-2xl"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="p-3 bg-white/10 border border-white/20 rounded-xl placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="p-3 bg-white/10 border border-white/20 rounded-xl placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="p-3 bg-white/10 border border-white/20 rounded-xl placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />

            <input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="p-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-300"
            />

            <select
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              required
              className="md:col-span-2 p-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              <option value="" className="text-black">
                Select Time Slot
              </option>
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot} className="text-black">
                  {slot}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="md:col-span-2 p-3 bg-white/10 border border-white/20 rounded-xl placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />

            {statusMessage && (
              <p
                className={`md:col-span-2 text-sm font-medium ${
                  isError ? "text-red-300" : "text-green-300"
                }`}
              >
                {statusMessage}
              </p>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-sky-300 text-blue-900 py-3 rounded-xl font-semibold hover:bg-sky-200 transition disabled:opacity-70"
            >
              {loading ? "Booking..." : "Submit"}
            </motion.button>
          </form>
        </div>
      </SectionReveal>
    </section>
  );
};

export default Appointment;