const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// Creating appointment
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, date, timeSlot, message } = req.body;

    if (!name || !email || !phone || !date || !timeSlot) {
      return res.status(400).json({
        message: "All required fields must be filled.",
      });
    }

    // Checking if same date + same slot already booked
    const existingAppointment = await Appointment.findOne({ date, timeSlot });

    if (existingAppointment) {
      return res.status(409).json({
        message: "This time slot is already booked. Please choose another slot.",
      });
    }

    const newAppointment = new Appointment({
      name,
      email,
      phone,
      date,
      timeSlot,
      message,
    });

    await newAppointment.save();

    res.status(201).json({
      message: "Appointment booked successfully.",
      appointment: newAppointment,
    });
  } catch (error) {
    console.error("Appointment booking error:", error);
    res.status(500).json({
      message: "Server error while booking appointment.",
    });
  }
});

// Getting all appointments (for admin/testing)
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json(appointments);
  } catch (error) {
    console.error("Fetch appointments error:", error);
    res.status(500).json({
      message: "Server error while fetching appointments.",
    });
  }
});

module.exports = router;