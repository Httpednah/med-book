import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2022/05/11/10/47/heart-7189096_960_720.jpg')",
      }}
    >
      <h1 className="text-5xl text-black font-bold mb-4 drop-shadow-lg">
        Welcome to MedBook
      </h1>
      <p className="text-lg mb-6 drop-shadow-md text-black">
        Your trusted platform to book medical appointments easily.
      </p>

      <div className="space-x-4">
        <Link to="/book">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-500 transition-all">
            Book Appointment
          </button>
        </Link>

        <Link to="/appointments">
          <button className="px-6 py-3 border-2 border-cyan-400 text-black rounded-xl font-semibold hover:bg-cyan-500 hover:text-white transition-all">
            View Appointments
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;