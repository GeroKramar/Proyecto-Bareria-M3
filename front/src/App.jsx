import Footer from "./components/footer";
import Navbar from "./components/navbarHome";
import Appointments from "./views/appointments";
import Home from "./views/home";
import Login from "./views/login";
import Register from "./views/register";
import { Route, Routes } from "react-router-dom";
import Services from "./views/services";
import CreateAppointments from "./views/createAppointment";
import './App.css';

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointments/schedule" element={<CreateAppointments/>} />
        <Route path="/services" element={<Services/>} />

        <Route path="*" element={<div>Not Found</div>} />
      
      </Routes>

      <Footer />
    </>
  );
}

export default App;
