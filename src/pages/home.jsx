import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import StaffCard from "../components/StaffCard";

function Home() {
  const [services, setServices] = useState([]);
  const [staff, setStaff] = useState([]);

  const SERVICES_API =
    "https://6a703a6055c0ce38c32604ba.mockapi.io/services";

  const STAFF_API =
    "https://6a703a6055c0ce38c32604ba.mockapi.io/staff";

  async function getServices() {
    try {
      const res = await axios.get(SERVICES_API);

      setServices(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.log("Error fetching services:", error);
      setServices([]);
    }
  }

  async function getStaff() {
    try {
      const res = await axios.get(STAFF_API);

      setStaff(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.log("Error fetching staff:", error);
      setStaff([]);
    }
  }

  useEffect(() => {
    getServices();
    getStaff();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#FAF9F7",
          minHeight: "520px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Left Content */}
            <div className="col-md-7">
              <span
                className="px-3 py-2 rounded-pill"
                style={{
                  backgroundColor: "#EDE5DB",
                  color: "#A68B6A",
                  fontSize: "14px",
                }}
              >
                LUMIÈRE HAIR STUDIO
              </span>

              <h1
                className="fw-bold mt-4 mb-3"
                style={{
                  color: "#161412",
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                }}
              >
                More than a haircut.
                <br />
                A style made for you.
              </h1>

              <p
                className="mb-4"
                style={{
                  color: "#6F6861",
                  maxWidth: "600px",
                  fontSize: "17px",
                }}
              >
                Discover professional salon services, meet our experienced
                staff and book your appointment easily. Everything you need
                for your next great look is in one place.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <Link
                  to="/services"
                  className="btn px-4 py-2"
                  style={{
                    backgroundColor: "#161412",
                    color: "#FFFFFF",
                  }}
                >
                  Explore Services
                </Link>

                <Link
                  to="/bookappointment"
                  className="btn px-4 py-2"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#161412",
                    border: "1px solid #D8CFC2",
                  }}
                >
                  Book Appointment
                </Link>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-md-5">
              <div
                className="p-4 p-md-5"
                style={{
                  backgroundColor: "#EDE5DB",
                  borderLeft: "4px solid #A68B6A",
                }}
              >
                <p
                  className="mb-3"
                  style={{
                    color: "#A68B6A",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    fontWeight: "600",
                  }}
                >
                  YOUR STYLE. YOUR CONFIDENCE.
                </p>

                <h2
                  className="fw-bold mb-4"
                  style={{
                    color: "#161412",
                    lineHeight: "1.3",
                  }}
                >
                  Services, experts and appointments in one place.
                </h2>

                <p
                  className="mb-0"
                  style={{
                    color: "#6F6861",
                    lineHeight: "1.8",
                  }}
                >
                  Explore our salon services, learn about our team and book
                  your preferred appointment at a time that works best for you.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Services */}
      <section
        className="py-5"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container">

          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
            <div>
              <p
                className="text-uppercase fw-semibold mb-2"
                style={{
                  fontSize: "12px",
                  letterSpacing: "2px",
                  color: "#A68B6A",
                }}
              >
                OUR SERVICES
              </p>

              <h2
                className="fw-bold mb-1"
                style={{ color: "#161412" }}
              >
                Made for your style.
              </h2>

              <p
                className="mb-0"
                style={{ color: "#6F6861" }}
              >
                Explore our professional salon services.
              </p>
            </div>

            <Link
              to="/services"
              className="text-decoration-none fw-medium"
              style={{ color: "#A68B6A" }}
            >
              View All Services →
            </Link>
          </div>

          <div className="row g-4">
            {services.slice(0, 3).map((item) => (
              <ServiceCard
                key={item.id}
                name={item.serviceName}
                category={item.category}
                price={item.price}
                duration={item.duration}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>

          {/* Empty State */}
          {services.length === 0 && (
            <div className="text-center py-5">
              <h4
                className="fw-bold"
                style={{ color: "#161412" }}
              >
                No services available
              </h4>

              <p style={{ color: "#6F6861" }}>
                Please check back later.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* Our Staff */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#FAF9F7",
        }}
      >
        <div className="container">

          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
            <div>
              <p
                className="text-uppercase fw-semibold mb-2"
                style={{
                  fontSize: "12px",
                  letterSpacing: "2px",
                  color: "#A68B6A",
                }}
              >
                OUR TEAM
              </p>

              <h2
                className="fw-bold mb-1"
                style={{ color: "#161412" }}
              >
                Meet our professionals.
              </h2>

              <p
                className="mb-0"
                style={{ color: "#6F6861" }}
              >
                Our experienced team is ready to help you find your style.
              </p>
            </div>

            <Link
              to="/staff"
              className="text-decoration-none fw-medium"
              style={{ color: "#A68B6A" }}
            >
              View Our Staff →
            </Link>
          </div>

          <div className="row g-4">
            {staff.slice(0, 3).map((item) => (
              <StaffCard
                key={item.id}
                staffName={item.staffName}
                position={item.position}
                phone={item.phone}
                email={item.email}
                image={item.image}
              />
            ))}
          </div>

          {/* Empty State */}
          {staff.length === 0 && (
            <div className="text-center py-5">
              <h4
                className="fw-bold"
                style={{ color: "#161412" }}
              >
                No staff members found
              </h4>

              <p style={{ color: "#6F6861" }}>
                Staff members will appear here once they are added.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* Appointment CTA */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#161412",
        }}
      >
        <div className="container text-center">

          <p
            className="mb-3"
            style={{
              color: "#A68B6A",
              fontSize: "12px",
              letterSpacing: "2px",
              fontWeight: "600",
            }}
          >
            READY TO BOOK?
          </p>

          <h2
            className="fw-bold text-white mb-3"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Your next great look starts here.
          </h2>

          <p
            className="mx-auto mb-4"
            style={{
              color: "#BDB7B0",
              maxWidth: "600px",
            }}
          >
            Choose your preferred service, select a staff member and book
            an appointment at a time that works best for you.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link
              to="/bookappointment"
              className="btn px-4 py-2"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#161412",
              }}
            >
              Book Your Appointment
            </Link>

            <Link
              to="/dashboard"
              className="btn px-4 py-2"
              style={{
                border: "1px solid #A68B6A",
                color: "#FFFFFF",
              }}
            >
              Admin Dashboard
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;
