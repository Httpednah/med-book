import { useState, useEffect } from "react"; // For managing form data and fetching doctors
import axios from "axios"; // To talk to the backend
import toast from "react-hot-toast"; // For pop-up notifications

function BookAppointmentForm() {
  // Store all form inputs in one object
  const [formData, setFormData] = useState({
    patient: "",
    contact: "",
    age: "",
    doctorId: "",
    date: "",
  });
  const [doctors, setDoctors] = useState([]); // Store doctors for the dropdown
  const [errors, setErrors] = useState({}); // Store any validation errors

  // Fetch doctors for the dropdown when the component loads
  useEffect(() => {
    axios.get("http://localhost:3000/doctors").then((response) => {
      setDoctors(response.data); // Save the list of doctors
    });
  }, []); // Run once when the component loads

  // Update form data when the user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Update the changed field
  };

  // Check if all fields are filled correctly
  const validate = () => {
    const newErrors = {};
    if (!formData.patient) newErrors.patient = "Please enter your name";
    if (!formData.contact) newErrors.contact = "Please enter your contact info";
    if (!formData.age || formData.age <= 0) newErrors.age = "Please enter a valid age";
    if (!formData.doctorId) newErrors.doctorId = "Please select a doctor";
    if (!formData.date) newErrors.date = "Please select a date";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the page from reloading
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Show errors if any fields are invalid
      return;
    }

    // Send the appointment to the backend
    axios
      .post("http://localhost:3000/appointments", {
        ...formData,
        age: parseInt(formData.age), // Convert age to a number
      })
      .then(() => {
        toast.success("Appointment booked successfully!"); // Show success pop-up
        // Reset the form to blank
        setFormData({
          patient: "",
          contact: "",
          age: "",
          doctorId: "",
          date: "",
        });
        setErrors({}); // Clear any errors
      })
      .catch(() => {
        toast.error("Failed to book appointment. Try again!"); // Show error pop-up
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
    >
      {/* White card with padding, rounded corners, shadow, and centered */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Book an Appointment</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Patient Name</label>
        <input
          type="text"
          name="patient"
          value={formData.patient}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.patient && <p className="text-red-500 text-sm">{errors.patient}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Contact</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Doctor</label>
        <select
          name="doctorId"
          value={formData.doctorId}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select a doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name} ({doctor.specialty})
            </option>
          ))}
        </select>
        {errors.doctorId && <p className="text-red-500 text-sm">{errors.doctorId}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Book Appointment
      </button>
    </form>
  );
}

export default BookAppointmentForm;