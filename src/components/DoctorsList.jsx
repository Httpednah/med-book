import React, { useEffect, useState } from "react";

function DoctorsList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/doctors")
      .then((r) => r.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error("Failed to load doctors:", err));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
          Doctors List
        </h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">Doctor Name</th>
              <th className="p-3 text-left">Speciality</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr
                key={doctor.id}
                className="border-b hover:bg-blue-50 transition-colors"
              >
                <td className="p-3 font-medium text-gray-800">{doctor.name}</td>
                <td className="p-3 text-gray-600">{doctor.specialty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DoctorsList;
