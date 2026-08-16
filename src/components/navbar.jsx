import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg py-3"
      style={{
        backgroundColor: "#FAF9F7",
        borderBottom: "2px solid #E6DDD3",
      }}
    >
      <div className="container">
        {/* Brand */}
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{
            color: "#161412",
            fontSize: "24px",
            letterSpacing: "1px",
          }}
        >
          LUMIÈRE
          <span
            className="d-block"
            style={{
              fontSize: "9px",
              letterSpacing: "3px",
              color: "#A68B6A",
              marginTop: "-3px",
            }}
          >
            HAIR STUDIO
          </span>
        </Link>

        {/* Mobile Button */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={{ color: "#161412", fontWeight: "500" }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/services"
                style={{ color: "#161412", fontWeight: "500" }}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/staff"
                style={{ color: "#161412", fontWeight: "500" }}
              >
                Our Staff
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{ color: "#161412", fontWeight: "500" }}
              >
                About
              </Link>
            </li>

            {/* Admin */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/dashboard"
                style={{
                  color: "#A68B6A",
                  fontWeight: "600",
                }}
              >
                Admin
              </Link>
            </li>

            {/* Appointment */}
            <li className="nav-item">
              <Link
                to="/bookappointment"
                className="btn ms-lg-2 px-4 py-2"
                style={{
                  backgroundColor: "#161412",
                  color: "#FFFFFF",
                  borderRadius: "0px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Book Appointment
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;