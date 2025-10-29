import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function BookAppointmentForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/doctors")
      .then((r) => r.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error("Failed to load doctors:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !age || !date || !doctorId) {
      toast.warning("⚠️ Please fill in all fields.");
      return;
    }

    const newAppointment = {
      fullName: fullName.trim(),
      email: email.trim(),
      age: parseInt(age),
      date,
      doctorId: parseInt(doctorId),
      status: "scheduled",
    };

    fetch("http://localhost:3000/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAppointment),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(() => {
        toast.success("✅ Appointment booked successfully!");
        setFullName("");
        setEmail("");
        setAge("");
        setDate("");
        setDoctorId("");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("❌ Something went wrong. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-cyan-900 py-12 px-6">
      <div className="max-w-md w-full bg-gray-800/70 backdrop-blur-sm border border-cyan-500/30 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-center text-cyan-400 mb-6 tracking-tight">
          🩵 Book Appointment
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-white"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="bg-gray-900/70 border border-cyan-600/40 rounded-lg p-3 focus:outline-none focus:border-cyan-400 placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-900/70 border border-cyan-600/40 rounded-lg p-3 focus:outline-none focus:border-cyan-400 placeholder-gray-400"
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="bg-gray-900/70 border border-cyan-600/40 rounded-lg p-3 focus:outline-none focus:border-cyan-400 placeholder-gray-400"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-gray-900/70 border border-cyan-600/40 rounded-lg p-3 focus:outline-none focus:border-cyan-400"
          />
          <select
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            className="bg-gray-900/70 border border-cyan-600/40 rounded-lg p-3 focus:outline-none focus:border-cyan-400"
          >
            <option value="">Select Doctor</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name} — {doc.specialty}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="mt-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointmentForm;
