import React, { useEffect, useState } from "react";
import DoctorsCard from "./DoctorsCard";

function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  // Fetch doctors and appointments from JSON Server
  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3000/appointments").then((r) => r.json()),
      fetch("http://localhost:3000/doctors").then((r) => r.json()),
    ])
      .then(([appointmentsData, doctorsData]) => {
        setAppointments(appointmentsData);
        setDoctors(doctorsData);
      })
      .catch((err) => console.error("Failed to fetch data:", err));
  }, []);

  // Find doctor by ID
  const getDoctor = (id) => doctors.find((doc) => doc.id === id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-cyan-900 py-12 px-6 text-white">
      <h1 className="text-4xl font-extrabold text-center text-cyan-400 mb-10 tracking-tight">
        🩺 Appointments Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {appointments.map((appt) => {
          const doctor = getDoctor(appt.doctorId);
          const formattedDate = new Date(appt.date).toLocaleString();

          return (
            <div
              key={appt.id}
              className="border border-cyan-500/30 rounded-2xl shadow-md hover:shadow-cyan-500/30 p-5 bg-gray-800/60 backdrop-blur-sm text-center transition-all duration-300 hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-cyan-300 mb-2">
                {appt.patient}
              </h2>
              <p className="text-gray-300 mb-2">
                Appointment Date:{" "}
                <span className="text-cyan-400">{formattedDate}</span>
              </p>

              {doctor ? (
                <div className="mt-4 border-t border-cyan-600/40 pt-3">
                  <DoctorsCard doctor={doctor} />
                </div>
              ) : (
                <p className="text-red-400 mt-2">Doctor not found</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AppointmentsList;
