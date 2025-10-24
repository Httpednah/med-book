import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center mt-16">
      <h1 className="text-3xl font-bold mb-4">Welcome to MedBook</h1>
      <p className="mb-6">
        Your trusted platform to book medical appointments easily.
      </p>

      <div className="space-x-4">
        <Link to="/book">
          <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
            Book Appointment
          </button>
        </Link>

        <Link to="/appointments">
          <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
            View Appointments
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
