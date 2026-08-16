import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [staff, setStaff] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const [isLogin, setIsLogin] = useState(() => {
    return sessionStorage.getItem("isLogin") === "true";
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // API URLs
  const SERVICES_API =
    "https://6a703a6055c0ce38c32604ba.mockapi.io/services";

  const STAFF_API =
    "https://6a703a6055c0ce38c32604ba.mockapi.io/staff";

  const APPOINTMENTS_API =
    "https://6a7ce836a008c10e4cbfc232.mockapi.io/Appointments";

  // Temporary Login Credentials
  const adminEmail = "admin@gmail.com";
  const adminPassword = "123456";

  // SERVICES DATA
  async function getServices() {
    try {
      const res = await axios.get(SERVICES_API);
      setServices(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.log(error);
      setServices([]);
    }
  }

  // STAFF DATA
  async function getStaff() {
    try {
      const res = await axios.get(STAFF_API);
      setStaff(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.log(error);
      setStaff([]);
    }
  }

  // APPOINTMENTS DATA
  async function getAppointments() {
    try {
      const res = await axios.get(APPOINTMENTS_API);
      setAppointments(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.log(error);
      setAppointments([]);
    }
  }

  useEffect(() => {
    getServices();
    getStaff();
    getAppointments();
  }, []);

  function handleLogin(e) {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      setIsLogin(true);
      sessionStorage.setItem("isLogin", "true");
      setError("");
    } else {
      setError("Invalid email or password");
    }
  }

  // LOGIN PAGE
  if (!isLogin) {
    return (
      <div
        className="d-flex justify-content-center align-items-center py-5"
        style={{
          minHeight: "80vh",
          backgroundColor: "#FAF9F7",
        }}
      >
        <div
          className="bg-white p-4 p-md-5 shadow-sm"
          style={{
            width: "100%",
            maxWidth: "420px",
            borderRadius: "20px",
          }}
        >
          <div className="mb-4">
            <div
              className="mb-4 d-flex align-items-center justify-content-center fw-bold"
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "#161412",
                color: "white",
                borderRadius: "14px",
                fontSize: "20px",
              }}
            >
              LUMIÈRE
            </div>

            <h2 className="fw-bold mb-2" style={{ color: "#161412" }}>
              Welcome back
            </h2>

            <p className="mb-0" style={{ color: "#6F6861" }}>
              Sign in to access your salon dashboard.
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label fw-medium">
                Email address
              </label>

              <input
                type="email"
                className="form-control py-2"
                placeholder="admin@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-medium">
                Password
              </label>

              <input
                type="password"
                className="form-control py-2"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div className="text-danger small mb-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn w-100 py-2"
              style={{
                backgroundColor: "#161412",
                color: "white",
              }}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  // DASHBOARD
  return (
    <div
      style={{
        minHeight: "80vh",
        backgroundColor: "#FAF9F7",
        paddingTop: "70px",
        paddingBottom: "70px",
      }}
    >
      <div className="container">

        {/* Header */}
        <div
          className="d-flex flex-wrap justify-content-between align-items-center gap-3"
          style={{
            marginBottom: "70px",
          }}
        >
          <div>
            <p
              className="text-uppercase fw-semibold mb-1"
              style={{
                fontSize: "12px",
                letterSpacing: "1.5px",
                color: "#A68B6A",
              }}
            >
              Admin Panel
            </p>

            <h1
              className="fw-bold mb-1"
              style={{ color: "#161412" }}
            >
              Salon Dashboard
            </h1>

            <p className="mb-0" style={{ color: "#6F6861" }}>
              Manage your salon services, staff and appointments from one place.
            </p>
          </div>

          <button
            className="btn px-4 py-2"
            onClick={() => navigate("/bookappointment")}
            style={{
              backgroundColor: "#161412",
              color: "white",
            }}
          >
            + Book Appointment
          </button>
        </div>

        {/* Stats */}
        <div
          className="row g-4"
          style={{
            marginBottom: "70px",
          }}
        >
          {/* Total Services */}
          <div className="col-md-4">
            <div
              className="p-4 bg-white h-100"
              style={{
                borderRadius: "18px",
                borderLeft: "4px solid #A68B6A",
              }}
            >
              <p
                className="mb-3"
                style={{
                  color: "#6F6861",
                  fontSize: "14px",
                }}
              >
                Total Services
              </p>

              <h2
                className="fw-bold mb-0"
                style={{
                  color: "#161412",
                  fontSize: "34px",
                }}
              >
                {services.length}
              </h2>
            </div>
          </div>

          {/* Total Staff */}
          <div className="col-md-4">
            <div
              className="p-4 bg-white h-100"
              style={{
                borderRadius: "18px",
                borderLeft: "4px solid #A68B6A",
              }}
            >
              <p
                className="mb-3"
                style={{
                  color: "#6F6861",
                  fontSize: "14px",
                }}
              >
                Total Staff Members
              </p>

              <h2
                className="fw-bold mb-0"
                style={{
                  color: "#161412",
                  fontSize: "34px",
                }}
              >
                {staff.length}
              </h2>
            </div>
          </div>

          {/* Total Appointments */}
          <div className="col-md-4">
            <div
              className="p-4 bg-white h-100"
              style={{
                borderRadius: "18px",
                borderLeft: "4px solid #A68B6A",
              }}
            >
              <p
                className="mb-3"
                style={{
                  color: "#6F6861",
                  fontSize: "14px",
                }}
              >
                Total Appointments
              </p>

              <h2
                className="fw-bold mb-0"
                style={{
                  color: "#161412",
                  fontSize: "34px",
                }}
              >
                {appointments.length}
              </h2>
            </div>
          </div>
        </div>

        {/* Management Cards */}
        <div className="row g-4">

          {/* Services */}
          <div className="col-lg-4">
            <div
              className="h-100 p-4"
              style={{
                backgroundColor: "#3f362e",
                borderRadius: "22px",
                color: "white",
              }}
            >
              <p
                className="text-uppercase mb-3"
                style={{
                  fontSize: "12px",
                  letterSpacing: "1.5px",
                  color: "#A68B6A",
                }}
              >
                Service Management
              </p>

              <h3 className="fw-bold mb-3">
                Manage salon services.
              </h3>

              <p
                className="mb-4"
                style={{ color: "#D1CBC5" }}
              >
                Add new services, update service details and remove services.
              </p>

              <div className="d-flex flex-column gap-2">
                <button
                  className="btn"
                  onClick={() => navigate("/addservice")}
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#161412",
                  }}
                >
                  Add Service
                </button>

                <button
                  className="btn"
                  onClick={() => navigate("/servicemanage")}
                  style={{
                    border: "1px solid #A68B6A",
                    color: "#FFFFFF",
                  }}
                >
                  Manage Services
                </button>
              </div>
            </div>
          </div>

          {/* Staff */}
          <div className="col-lg-4">
            <div
              className="bg-white h-100 p-4"
              style={{
                borderRadius: "22px",
                border: "1px solid #E6DDD3",
              }}
            >
              <p
                className="text-uppercase fw-semibold mb-3"
                style={{
                  fontSize: "12px",
                  letterSpacing: "1.5px",
                  color: "#A68B6A",
                }}
              >
                Staff Management
              </p>

              <h3
                className="fw-bold mb-3"
                style={{ color: "#161412" }}
              >
                Manage your staff.
              </h3>

              <p
                className="mb-4"
                style={{ color: "#6F6861" }}
              >
                Add staff members, update their information and manage your salon team.
              </p>

              <div className="d-flex flex-column gap-2">
                <button
                  className="btn"
                  onClick={() => navigate("/addstaff")}
                  style={{
                    backgroundColor: "#161412",
                    color: "#FFFFFF",
                  }}
                >
                  Add Staff
                </button>

                <button
                  className="btn"
                  onClick={() => navigate("/staffmanage")}
                  style={{
                    border: "1px solid #D8CABC",
                    color: "#161412",
                  }}
                >
                  Manage Staff
                </button>
              </div>
            </div>
          </div>

          {/* Appointments */}
          <div className="col-lg-4">
            <div
              className="bg-white h-100 p-4"
              style={{
                borderRadius: "22px",
                border: "1px solid #E6DDD3",
              }}
            >
              <p
                className="text-uppercase fw-semibold mb-3"
                style={{
                  fontSize: "12px",
                  letterSpacing: "1.5px",
                  color: "#A68B6A",
                }}
              >
                Appointment Management
              </p>

              <h3
                className="fw-bold mb-3"
                style={{ color: "#161412" }}
              >
                Manage appointments.
              </h3>

              <p
                className="mb-4"
                style={{ color: "#6F6861" }}
              >
                Book appointments, update appointment details and manage customer bookings.
              </p>

              <div className="d-flex flex-column gap-2">
                <button
                  className="btn"
                  onClick={() => navigate("/bookappointment")}
                  style={{
                    backgroundColor: "#161412",
                    color: "#FFFFFF",
                  }}
                >
                  Book Appointment
                </button>

                <button
                  className="btn"
                  onClick={() => navigate("/viewappointment")}
                  style={{
                    border: "1px solid #D8CABC",
                    color: "#161412",
                  }}
                >
                  View Appointments
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;