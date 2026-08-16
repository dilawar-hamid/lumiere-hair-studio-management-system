import { Link } from "react-router-dom";

function Home() {
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

            {/* Service Card 1 */}
            <div className="col-md-4">
              <div
                className="card border-0 h-100"
                style={{
                  backgroundColor: "#FAF9F7",
                  borderRadius: "0",
                  borderBottom: "3px solid #A68B6A",
                }}
              >
                <div
                  style={{
                    height: "220px",
                    backgroundColor: "#EDE5DB",
                  }}
                ></div>

                <div className="card-body p-4">
                  <span
                    className="small"
                    style={{ color: "#A68B6A" }}
                  >
                    Hair Care
                  </span>

                  <h5
                    className="fw-bold mt-2"
                    style={{ color: "#161412" }}
                  >
                    Classic Haircut
                  </h5>

                  <p
                    className="mb-3"
                    style={{ color: "#6F6861" }}
                  >
                    A professional haircut designed around your personal style.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <strong style={{ color: "#161412" }}>
                      Rs. 1,500
                    </strong>

                    <small style={{ color: "#6F6861" }}>
                      30 Minutes
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="col-md-4">
              <div
                className="card border-0 h-100"
                style={{
                  backgroundColor: "#FAF9F7",
                  borderRadius: "0",
                  borderBottom: "3px solid #A68B6A",
                }}
              >
                <div
                  style={{
                    height: "220px",
                    backgroundColor: "#EDE5DB",
                  }}
                ></div>

                <div className="card-body p-4">
                  <span
                    className="small"
                    style={{ color: "#A68B6A" }}
                  >
                    Styling
                  </span>

                  <h5
                    className="fw-bold mt-2"
                    style={{ color: "#161412" }}
                  >
                    Hair Styling
                  </h5>

                  <p
                    className="mb-3"
                    style={{ color: "#6F6861" }}
                  >
                    Get a polished look for everyday style or special occasions.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <strong style={{ color: "#161412" }}>
                      Rs. 2,000
                    </strong>

                    <small style={{ color: "#6F6861" }}>
                      45 Minutes
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="col-md-4">
              <div
                className="card border-0 h-100"
                style={{
                  backgroundColor: "#FAF9F7",
                  borderRadius: "0",
                  borderBottom: "3px solid #A68B6A",
                }}
              >
                <div
                  style={{
                    height: "220px",
                    backgroundColor: "#EDE5DB",
                  }}
                ></div>

                <div className="card-body p-4">
                  <span
                    className="small"
                    style={{ color: "#A68B6A" }}
                  >
                    Hair Treatment
                  </span>

                  <h5
                    className="fw-bold mt-2"
                    style={{ color: "#161412" }}
                  >
                    Complete Hair Treatment
                  </h5>

                  <p
                    className="mb-3"
                    style={{ color: "#6F6861" }}
                  >
                    Give your hair the care it needs with a professional treatment.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <strong style={{ color: "#161412" }}>
                      Rs. 3,500
                    </strong>

                    <small style={{ color: "#6F6861" }}>
                      60 Minutes
                    </small>
                  </div>
                </div>
              </div>
            </div>

          </div>
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

            {/* Staff Card 1 */}
            <div className="col-md-4">
              <div
                className="bg-white h-100 p-4"
                style={{
                  border: "1px solid #E6DDD3",
                  borderRadius: "18px",
                }}
              >
                <div
                  className="mb-4"
                  style={{
                    height: "180px",
                    backgroundColor: "#EDE5DB",
                  }}
                ></div>

                <p
                  className="text-uppercase fw-semibold mb-2"
                  style={{
                    fontSize: "12px",
                    letterSpacing: "1.5px",
                    color: "#A68B6A",
                  }}
                >
                  Hair Stylist
                </p>

                <h4
                  className="fw-bold mb-2"
                  style={{ color: "#161412" }}
                >
                  Staff Member
                </h4>

                <p
                  className="mb-0"
                  style={{ color: "#6F6861" }}
                >
                  Professional salon expert dedicated to helping you look your best.
                </p>
              </div>
            </div>

            {/* Staff Card 2 */}
            <div className="col-md-4">
              <div
                className="bg-white h-100 p-4"
                style={{
                  border: "1px solid #E6DDD3",
                  borderRadius: "18px",
                }}
              >
                <div
                  className="mb-4"
                  style={{
                    height: "180px",
                    backgroundColor: "#EDE5DB",
                  }}
                ></div>

                <p
                  className="text-uppercase fw-semibold mb-2"
                  style={{
                    fontSize: "12px",
                    letterSpacing: "1.5px",
                    color: "#A68B6A",
                  }}
                >
                  Senior Stylist
                </p>

                <h4
                  className="fw-bold mb-2"
                  style={{ color: "#161412" }}
                >
                  Staff Member
                </h4>

                <p
                  className="mb-0"
                  style={{ color: "#6F6861" }}
                >
                  Bringing experience, creativity and attention to every detail.
                </p>
              </div>
            </div>

            {/* Staff Card 3 */}
            <div className="col-md-4">
              <div
                className="bg-white h-100 p-4"
                style={{
                  border: "1px solid #E6DDD3",
                  borderRadius: "18px",
                }}
              >
                <div
                  className="mb-4"
                  style={{
                    height: "180px",
                    backgroundColor: "#EDE5DB",
                  }}
                ></div>

                <p
                  className="text-uppercase fw-semibold mb-2"
                  style={{
                    fontSize: "12px",
                    letterSpacing: "1.5px",
                    color: "#A68B6A",
                  }}
                >
                  Hair Specialist
                </p>

                <h4
                  className="fw-bold mb-2"
                  style={{ color: "#161412" }}
                >
                  Staff Member
                </h4>

                <p
                  className="mb-0"
                  style={{ color: "#6F6861" }}
                >
                  Focused on creating a comfortable and personalized salon experience.
                </p>
              </div>
            </div>

          </div>
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