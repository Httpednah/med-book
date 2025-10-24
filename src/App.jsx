// src/App.jsx updates
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";
import DoctorsList from "./components/DoctorsList";
import BookAppointmentForm from "./components/BookAppointmentForm";
import AppointmentsList from "./components/AppointmentsList";

function App() {
  return (
    <>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Doctors</h1>
      <DoctorsList />
      <Toaster position="top-right" />
      <BookAppointmentForm/>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DoctorsList />} />
          <Route path="/book" element={<BookAppointmentForm />} />
          <Route path="/appointments" element={<AppointmentsList />} />
        </Route>
      </Routes>
    </div>
     
    </>
  );
}

export default App;
