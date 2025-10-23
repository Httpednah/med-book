import React from "react";
import DoctorsList from "./components/DoctorsList";

 const App = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Doctors</h1>
      <DoctorsList />
    </div>
  );
};

export default App;
