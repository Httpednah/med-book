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

    // ✅ Validate fields first
    if (!fullName || !email || !age || !date || !doctorId) {
      toast.warning("Please fill in all fields.");
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

    // ✅ Make sure JSON server is running at http://localhost:3000
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
        toast.success("Appointment booked successfully!");
        setFullName("");
        setEmail("");
        setAge("");
        setDate("");
        setDoctorId("");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(
          "There was a problem booking your appointment. Please try again."
        );
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Book Appointment Form
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="border rounded-md p-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-md p-2"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border rounded-md p-2"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded-md p-2"
        />
        <select
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
          className="border rounded-md p-2"
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
          className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default BookAppointmentForm;
