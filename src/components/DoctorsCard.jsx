import React from "react";

const DoctorsCard = ({ doctor }) => {
  return (
    <div >
      <h2>{doctor.name}</h2>
      <p>{doctor.specialty}</p>
    </div>
  );
};
export default DoctorsCard;