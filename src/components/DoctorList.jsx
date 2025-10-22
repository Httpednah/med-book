import { useState, useEffect } from "react"; // For managing data and fetching
import axios from "axios"; // To get data from the backend
import DoctorCard from "./DoctorCard"; // The component for each doctor

function DoctorList() {
  const [doctors, setDoctors] = useState([]); // Store the list of doctors
  const [loading, setLoading] = useState(true); // Show "Loading..." while fetching
  const [error, setError] = useState(null); // Store any errors

  // Fetch doctors when the component loads
  useEffect(() => {
    axios
      .get("http://localhost:3000/doctors") // Ask the backend for doctors
      .then((response) => {
        setDoctors(response.data); // Save the doctors
        setLoading(false); // Done loading
      })
      .catch(() => {
        setError("Oops! Couldn’t fetch doctors."); // Show error if fetch fails
        setLoading(false);
      });
  }, []); // Run once when the component loads

  // Show loading or error messages if needed
  if (loading) return <div className="text-center text-gray-600">Loading doctors...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Grid layout: 1 column on mobile, 2 on medium screens, 3 on large */}
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} /> // Show each doctor in a card
      ))}
    </div>
  );
}

export default DoctorList;