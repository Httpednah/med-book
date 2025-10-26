import { toast } from "react-toastify";
import React from "react";
import { useState } from "react";

function BookAppointmentForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [doctor,setDoctor] =useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    //logic for inputs validation
    if (!fullName || !email || !age || !date || !doctor) {
      //if there is no value of the inputs it will show an alert
      toast.warning("Please fill in all fields.");
      return;
    }

    const newAppointment = {
      fullName,
      email,
      age,
      date,
      doctor,
    };

    //Sending data to the server
    fetch("http://localhost:3000/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAppointment),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        toast.success("Appointment booked successfully!");

        // Clear form fields
        setFullName("");
        setEmail("");
        setAge("");
        setDate("");
        setDoctor("");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(
          "There was a problem booking your appointment. Please try again."
        );
      });

    // Handle form submission logic here
    console.log("Appointment booked for:", { fullName, email, age, date,doctor });
  };

  const handleNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.valueAsNumber);
  };
  const handleDateChange = (e) => {
    setDate(e.target.valueAsDate);
  };
  const handleDoctorChange = (e) =>{
    setDoctor(e.target.value)
  }
 
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Book Appointment Form
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={handleNameChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></input>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></input>
        <input
          type="number"
          placeholder="age"
          value={age}
          onChange={handleAgeChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></input>
          <input
            type="text"
            placeholder="doctors specialty e.g dentist"
            value={doctor}
            onChange={handleDoctorChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
        <input
          type="date"
          placeholder="dd/mm/yyyy"
          value={date}
          onChange={handleDateChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></input>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          type="submit"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default BookAppointmentForm;
