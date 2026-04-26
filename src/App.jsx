import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Specialties from "./components/Specialities";
import Doctors from "./Doctors";
import HealthConditions from "./components/HealthConditions";
import Appointment from "./Appointments";
import Contact from "./Contact";
import EmergencyHospitals from "./components/EmergencyHospitals";
import Footer from "./Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Specialties />
        <Doctors />
        <HealthConditions/>
        <Appointment />
        <Contact />
        <EmergencyHospitals />
      </main>
      <Footer />
    </div>
  );
}

export default App;