import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 text-cyan-100 shadow-md">
      {" "}
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}{" "}
        <div className="text-2xl font-bold text-cyan-300 drop-shadow-sm">
          MedBook{" "}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-cyan-200 hover:text-cyan-100 transition"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon when open
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger when closed
                }
              />
            </svg>
          </button>
        </div>
        {/* Nav Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 space-y-2 md:space-y-0 mt-4 md:mt-0 transition-all duration-300 ease-in-out`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block md:inline transition hover:text-cyan-300 ${
                isActive ? "text-white font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/book"
            className={({ isActive }) =>
              `block md:inline transition hover:text-cyan-300 ${
                isActive ? "text-white font-semibold" : ""
              }`
            }
          >
            Book Appointment
          </NavLink>
          <NavLink
            to="/appointments"
            className={({ isActive }) =>
              `block md:inline transition hover:text-cyan-300 ${
                isActive ? "text-white font-semibold" : ""
              }`
            }
          >
            Appointments
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
