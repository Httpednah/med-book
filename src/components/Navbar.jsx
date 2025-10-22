import { NavLink } from "react-router-dom"; // NavLink highlights the active page

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      {/* Blue background, white text, padding, and shadow */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Center content with flexbox */}
        <h1 className="text-xl font-bold">Patient Appointment App</h1> {/* App title */}
        <ul className="flex space-x-4">
          {/* Links with spacing between them */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/book"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Book Appointment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appointments"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Appointments
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;