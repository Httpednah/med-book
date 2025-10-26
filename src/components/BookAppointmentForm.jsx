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
      toast.warning("Please fill in all fields.");
      return;
    }

    const newAppointment = {
      fullName,
      email,
      age,
      date,
      doctorId: parseInt(doctorId),
    };

    fetch("http://localhost:3000/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAppointment),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
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
    <div>
      <h2>Book Appointment Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <select value={doctorId} onChange={(e) => setDoctorId(e.target.value)}>
          <option value="">Select Doctor</option>
          {doctors.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.name} — {doc.specialty}
            </option>
          ))}
        </select>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookAppointmentForm;
