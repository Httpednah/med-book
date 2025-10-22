import { useState, useEffect } from "react";
import axios from "axios";

function AppointmentsList() {
  const [appointments, setAppointments] = useState([]); // Store appointments
  const [doctors, setDoctors] = useState([]); // Store doctors to match names
  const [loading, setLoading] = useState(true); // Show loading state

  // Fetch appointments and doctors when the component loads
  useEffect(() => {
    // Get both appointments and doctors
    Promise.all([
      axios.get("http://localhost:3000/appointments"),
      axios.get("http://localhost:3000/doctors"),
    ])
      .then(([appointmentsResponse, doctorsResponse]) => {
        setAppointments(appointmentsResponse.data);
        setDoctors(doctorsResponse.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []); // Run once on load

  // Match doctorId to doctor name
  const getDoctorName = (doctorId) => {
    const doctor = doctors.find((doc) => doc.id === doctorId);
    return doctor ? doctor.name : "Unknown Doctor";
  };

  if (loading) return <div>Loading appointments...</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Booked Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map((appointment) => (
            <li
              key={appointment.id}
              className="border p-4 rounded-md flex justify-between"
            >
              <div>
                <p>
                  <strong>Patient:</strong> {appointment.patient}
                </p>
                <p>
                  <strong>Doctor:</strong> {getDoctorName(appointment.doctorId)}
                </p>
                <p>
                  <strong>Date:</strong> {appointment.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AppointmentsList;