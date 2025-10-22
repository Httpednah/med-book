
// I NEED THE JSON FOR THIS COMPONENT...
import { toast } from "react-toastify";



import React from "react";
import { useState } from "react";

function BookAppointmentForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
 


const handleSubmit = (e) => {
    e.preventDefault();

    //logic for inputs validation
    if (!fullName || !email || !age || !date) { //if there is no value of the inputs it will show an alert
      toast.warning("Please fill in all fields.");
      return;
    }  

  

    const  newAppointment = {
      fullName,
      email,
      age,
      date,
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
        toast.alert("Appointment booked successfully!");

        // Clear form fields
        setFullName("");
        setEmail("");
        setAge("");
        setDate("");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(
          "There was a problem booking your appointment. Please try again."
        );
      });
 


    // Handle form submission logic here
    console.log("Appointment booked for:", { fullName, email, age, date });
  }

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

  return (
    <div>
      <h2>Book Appointment Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={handleNameChange}
        ></input>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        ></input>
        <input
          type="number"
          placeholder="age"
          value={age}
          onChange={handleAgeChange}
        ></input>
        <input
          type="date"
          placeholder="dd/mm/yyy"
          value={date}
          onChange={handleDateChange}
        ></input>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookAppointmentForm;
