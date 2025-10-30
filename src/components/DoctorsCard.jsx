import React from "react";
//this component displays a single doctors card
const DoctorsCard = ({ doctor }) => {
  return (
    <div className="border border-gray-300 rounded-xl shadow-md p-4 bg-white text-center hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {doctor.name}
      </h2>
      <p className="text-gray-600">{doctor.specialty}</p>
    </div>
  );
};

export default DoctorsCard;
