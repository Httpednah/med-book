import React, { useEffect, useState } from "react";
import DoctorsCard from "./DoctorsCard";

const baseUrl = `https://medbook-db-json.onrender.com`;

function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  // Fetch doctors and appointments from JSON Server
  useEffect(() => {
    Promise.all([
      fetch(`${baseUrl}/appointments`).then((r) => r.json()),
      fetch(`${baseUrl}/doctors`).then((r) => r.json()),
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
    <div className="appointment-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto mt-8">
      {appointments.map((appt) => {
        const doctor = getDoctor(appt.doctorId);
        const formattedDate = new Date(appt.date).toLocaleString();

        return (
          <div
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2022/05/11/10/47/heart-7189096_960_720.jpg')",
            }}
            key={appt.id}
            className="border border-gray-300 rounded-xl shadow-md p-4 bg-white text-center"
          >
            <h2 className="text-xl font-semibold mb-2">{appt.fullName}</h2>
            <p className="text-gray-600 mb-1">
              Appointment Date: {formattedDate}
            </p>

            {doctor ? (
              <div className="mt-4 border-t pt-3">
                <DoctorsCard doctor={doctor} />
              </div>
            ) : (
              <p className="text-red-500 mt-2">Doctor not found</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default AppointmentsList;
