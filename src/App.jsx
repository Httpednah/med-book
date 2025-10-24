import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";
import Home from "./components/Home";
import DoctorsList from "./components/DoctorsList";
import BookAppointmentForm from "./components/BookAppointmentForm";
import AppointmentsList from "./components/AppointmentsList";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorsList />} />
          <Route path="/book" element={<BookAppointmentForm />} />
          <Route path="/appointments" element={<AppointmentsList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
