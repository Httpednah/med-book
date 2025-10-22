function DoctorCard({ doctor }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {/* White card with padding, rounded corners, and a shadow */}
      <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
      <p className="text-gray-600">{doctor.specialty}</p>
    </div>
  );
}

export default DoctorCard;