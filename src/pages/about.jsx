function About() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#FAF9F7",
          minHeight: "80vh",
          color: "#161412",
        }}
      >
        <div className="container py-5">

          {/* Top Section */}
          <div className="row align-items-center py-lg-5 g-5">

            <div className="col-lg-6">
              <p
                className="mb-3"
                style={{
                  color: "#A68B6A",
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "2px",
                }}
              >
                ABOUT LUMIÈRE
              </p>

              <h1
                className="fw-bold mb-4"
                style={{
                  fontSize: "clamp(38px, 5vw, 64px)",
                  lineHeight: "1.1",
                  color: "#161412",
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
                  fontSize: "17px",
                  lineHeight: "1.8",
                  maxWidth: "540px",
                }}
              >
                LUMIÈRE Hair Studio is built around one simple idea:
                great hair should feel personal. From everyday grooming
                to a complete new look, our team focuses on understanding
                your style and delivering a result you can feel confident in.
              </p>

              <p
                style={{
                  color: "#6F6861",
                  lineHeight: "1.8",
                  maxWidth: "540px",
                }}
              >
                Our salon brings together skilled professionals, modern
                services and a comfortable experience in one place.
              </p>
            </div>

            {/* Right Side */}
            <div className="col-lg-6">
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
                  OUR APPROACH
                </p>

                <h3
                  className="fw-bold mb-4"
                  style={{
                    color: "#161412",
                    lineHeight: "1.3",
                  }}
                >
                  Good service starts with listening.
                </h3>

                <p
                  className="mb-0"
                  style={{
                    color: "#625B54",
                    lineHeight: "1.8",
                  }}
                >
                  Every client has a different style, preference and routine.
                  That is why we focus on the details before creating a look
                  that works for you—not just when you leave the salon, but
                  every day afterwards.
                </p>
              </div>
            </div>

          </div>


          {/* Values */}
          <div
            className="py-5 mt-3"
            style={{
              borderTop: "1px solid #DED6CE",
              borderBottom: "1px solid #DED6CE",
            }}
          >
            <div className="row g-4">

              <div className="col-md-4">
                <div className="pe-md-4">
                  <span
                    style={{
                      color: "#A68B6A",
                      fontSize: "13px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                    }}
                  >
                    01
                  </span>

                  <h4 className="fw-bold mt-3 mb-3">
                    Personal Style
                  </h4>

                  <p
                    className="mb-0"
                    style={{
                      color: "#6F6861",
                      lineHeight: "1.7",
                    }}
                  >
                    We believe the best look is one that fits your personality,
                    lifestyle and individual style.
                  </p>
                </div>
              </div>


              <div className="col-md-4">
                <div className="pe-md-4">
                  <span
                    style={{
                      color: "#A68B6A",
                      fontSize: "13px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                    }}
                  >
                    02
                  </span>

                  <h4 className="fw-bold mt-3 mb-3">
                    Skilled Care
                  </h4>

                  <p
                    className="mb-0"
                    style={{
                      color: "#6F6861",
                      lineHeight: "1.7",
                    }}
                  >
                    Our team combines experience, attention to detail and
                    professional techniques for every service.
                  </p>
                </div>
              </div>


              <div className="col-md-4">
                <div>
                  <span
                    style={{
                      color: "#A68B6A",
                      fontSize: "13px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                    }}
                  >
                    03
                  </span>

                  <h4 className="fw-bold mt-3 mb-3">
                    A Better Experience
                  </h4>

                  <p
                    className="mb-0"
                    style={{
                      color: "#6F6861",
                      lineHeight: "1.7",
                    }}
                  >
                    From booking your appointment to your final look, we aim
                    to make every visit simple, comfortable and enjoyable.
                  </p>
                </div>
              </div>

            </div>
          </div>


          {/* Project / Technology */}
          <div className="text-center py-5">

            <p
              className="mb-2"
              style={{
                color: "#A68B6A",
                fontSize: "12px",
                letterSpacing: "2px",
                fontWeight: "600",
              }}
            >
              DIGITAL EXPERIENCE
            </p>

            <h2 className="fw-bold mb-3">
              Built to make salon management easier.
            </h2>

            <p
              className="mx-auto mb-4"
              style={{
                color: "#6F6861",
                maxWidth: "650px",
                lineHeight: "1.8",
              }}
            >
              This web application allows services, staff and appointments
              to be managed from one place while providing customers with
              an easy way to explore the salon and book appointments.
            </p>

            <div className="d-flex justify-content-center flex-wrap gap-2">
              {[
                "React",
                "React Router",
                "Axios",
                "Formik",
                "Yup",
                "Bootstrap",
                "REST API",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2"
                  style={{
                    backgroundColor: "#EDE5DB",
                    color: "#161412",
                    fontSize: "14px",
                    border: "1px solid #DED6CE",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default About;