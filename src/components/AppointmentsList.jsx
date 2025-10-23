import React from "react";

function AppointmentsList({ appointments }) {
  return (
    <div className="appointment-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto mt-8">
      {appointments.map((appt) => (
        <div
          key={appt.id}
          className="border border-gray-300 rounded-xl shadow-md p-4 bg-white text-center"
        >
          <h2 className="text-xl font-semibold mb-2">{appt.name}</h2>
          <p className="text-gray-600">Age: {appt.age}</p>
          <p className="text-gray-600">Condition: {appt.condition}</p>
        </div>
      ))}
    </div>
  );
}

export default AppointmentsList;
