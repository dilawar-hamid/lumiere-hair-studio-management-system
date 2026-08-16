import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="pt-5 pb-4 mt-5"
      style={{
        backgroundColor: "#161412",
        color: "#FFFFFF",
      }}
    >
      <div className="container">

        <div className="row g-5 pb-5">

          {/* Brand */}
          <div className="col-lg-5 col-md-6">
            <h3
              className="fw-bold mb-1"
              style={{
                letterSpacing: "1px",
                fontSize: "28px",
              }}
            >
              LUMIÈRE
            </h3>

            <p
              className="mb-4"
              style={{
                color: "#A68B6A",
                fontSize: "11px",
                letterSpacing: "3px",
              }}
            >
              HAIR STUDIO
            </p>

            <p
              style={{
                color: "#BDB7B0",
                maxWidth: "380px",
                lineHeight: "1.8",
              }}
            >
              A modern space dedicated to great hair, personal style and
              everyday confidence. Discover professional services and book
              your next appointment with us.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-3">
            <h6
              className="mb-4"
              style={{
                color: "#FFFFFF",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              EXPLORE
            </h6>

            <div className="d-flex flex-column gap-3">
              <Link
                to="/"
                className="text-decoration-none"
                style={{ color: "#BDB7B0" }}
              >
                Home
              </Link>

              <Link
                to="/services"
                className="text-decoration-none"
                style={{ color: "#BDB7B0" }}
              >
                Services
              </Link>

              <Link
                to="/staff"
                className="text-decoration-none"
                style={{ color: "#BDB7B0" }}
              >
                Our Staff
              </Link>

              <Link
                to="/about"
                className="text-decoration-none"
                style={{ color: "#BDB7B0" }}
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-3">
            <h6
              className="mb-4"
              style={{
                color: "#FFFFFF",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              VISIT US
            </h6>

            <div
              className="d-flex flex-column gap-3"
              style={{ color: "#BDB7B0" }}
            >
              <span>Mon – Sun: 10:00 AM – 9:00 PM</span>

              <span>Karachi, Pakistan</span>

              <span>+92 300 1234567</span>

              <span>hello@lumiere.com</span>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div
          className="pt-4 d-flex justify-content-between align-items-center flex-wrap gap-3"
          style={{
            borderTop: "1px solid #35302C",
            color: "#817A73",
          }}
        >
          <small>
            © 2026 LUMIÈRE Hair Studio. All rights reserved.
          </small>

          <div className="d-flex gap-3">
            <Link
              to="/dashboard"
              className="text-decoration-none"
              style={{
                color: "#A68B6A",
                fontSize: "13px",
              }}
            >
              Admin Panel
            </Link>

            <Link
              to="/bookappointment"
              className="text-decoration-none"
              style={{
                color: "#A68B6A",
                fontSize: "13px",
              }}
            >
              Book Now
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;