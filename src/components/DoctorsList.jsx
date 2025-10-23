import React, { useEffect, useState } from "react";
import DoctorsCard from "./DoctorsCard";

function DoctorsList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/doctors")
      .then((r) => r.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error("Failed to load doctors:", err));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="doctor-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl">
        {doctors.map((doctor) => (
          <DoctorsCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default DoctorsList;
