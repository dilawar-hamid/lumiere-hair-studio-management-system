import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewAppointment() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const API_URL =
    "https://6a7ce836a008c10e4cbfc232.mockapi.io/Appointments";

  async function getData() {
    try {
      const res = await axios.get(API_URL);

      setAppointments(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.log("Error fetching appointments:", error);
      setAppointments([]);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function DeleteAppointment(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/${id}`);

      getData();
    } catch (error) {
      console.log("Error deleting appointment:", error);
    }
  }

  return (
    <div
      className="py-5"
      style={{
        minHeight: "80vh",
        backgroundColor: "#FAF9F7",
      }}
    >
      <div className="container">

        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="btn p-0 mb-4"
          style={{
            color: "#A68B6A",
            border: "none",
          }}
        >
          ← Back to Dashboard
        </button>

        {/* Header */}
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <div>
            <p
              className="text-uppercase fw-semibold mb-2"
              style={{
                fontSize: "12px",
                letterSpacing: "1.5px",
                color: "#A68B6A",
              }}
            >
              Salon Management
            </p>

            <h1
              className="fw-bold mb-2"
              style={{ color: "#161412" }}
            >
              Manage Appointments
            </h1>

            <p
              className="mb-0"
              style={{ color: "#6F6861" }}
            >
              View, edit and manage all customer appointments.
            </p>
          </div>

          <button
            className="btn px-4 py-2"
            onClick={() => navigate("/bookappointment")}
            style={{
              backgroundColor: "#161412",
              color: "#FFFFFF",
            }}
          >
            + Book Appointment
          </button>
        </div>

        {/* Appointment Count */}
        <div
          className="d-inline-flex align-items-center gap-2 px-3 py-2 mb-4"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            color: "#6F6861",
          }}
        >
          <span
            className="fw-bold"
            style={{
              color: "#161412",
              fontSize: "18px",
            }}
          >
            {appointments.length}
          </span>

          <span>
            {appointments.length === 1
              ? "Appointment"
              : "Appointments"}
          </span>
        </div>

        {/* Table */}
        {appointments.length > 0 && (
          <div
            className="bg-white"
            style={{
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div className="table-responsive">
              <table className="table mb-0 align-middle">
                <thead>
                  <tr
                    style={{
                      backgroundColor: "#161412",
                      color: "#FFFFFF",
                    }}
                  >
                    <th className="py-3 ps-4">Customer</th>
                    <th className="py-3">Phone</th>
                    <th className="py-3">Service</th>
                    <th className="py-3">Staff</th>
                    <th className="py-3">Date</th>
                    <th className="py-3">Time</th>
                    <th className="py-3">Status</th>
                    <th className="py-3">Notes</th>
                    <th className="py-3">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {appointments.map((item) => (
                    <tr key={item.id}>

                      {/* Customer */}
                      <td className="ps-4">
                        <span
                          className="fw-semibold"
                          style={{ color: "#161412" }}
                        >
                          {item.customerName}
                        </span>
                      </td>

                      {/* Phone */}
                      <td>{item.phone}</td>

                      {/* Service */}
                      <td>{item.service}</td>

                      {/* Staff */}
                      <td>{item.staff}</td>

                      {/* Date */}
                      <td>{item.date}</td>

                      {/* Time */}
                      <td>{item.time}</td>

                      {/* Status */}
                      <td>
                        <span
                          className="px-2 py-1"
                          style={{
                            backgroundColor: "#EDE5DB",
                            borderRadius: "6px",
                            fontSize: "13px",
                            color: "#6B5B4D",
                          }}
                        >
                          {item.status || "Pending"}
                        </span>
                      </td>

                      {/* Notes */}
                      <td
                        style={{
                          maxWidth: "180px",
                          color: "#6F6861",
                        }}
                      >
                        <div className="text-truncate">
                          {item.notes || "-"}
                        </div>
                      </td>

                      {/* Actions */}
                      <td>
                        <div className="d-flex gap-2">

                          <button
                            className="btn btn-sm"
                            onClick={() =>
                              navigate(`/editappointment/${item.id}`)
                            }
                            style={{
                              border: "1px solid #D8CABC",
                              color: "#161412",
                            }}
                          >
                            Edit
                          </button>

                          <button
                            className="btn btn-sm"
                            onClick={() =>
                              DeleteAppointment(item.id)
                            }
                            style={{
                              color: "#A34A4A",
                              border: "1px solid #E5C7C7",
                            }}
                          >
                            Delete
                          </button>

                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {appointments.length === 0 && (
          <div
            className="text-center py-5 bg-white"
            style={{
              borderRadius: "20px",
            }}
          >
            <h4
              className="fw-bold"
              style={{ color: "#161412" }}
            >
              No appointments found
            </h4>

            <p style={{ color: "#6F6861" }}>
              Start by booking your first appointment.
            </p>

            <button
              className="btn px-4"
              onClick={() => navigate("/bookappointment")}
              style={{
                backgroundColor: "#161412",
                color: "#FFFFFF",
              }}
            >
              + Book First Appointment
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default ViewAppointment;