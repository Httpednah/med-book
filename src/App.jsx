// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";
import DoctorList from "./pages/DoctorList";
import BookAppointment from "./pages/BookAppointment";
import AppointmentsList from "./pages/AppointmentsList";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DoctorList />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/appointments" element={<AppointmentsList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
