import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function StaffManage() {
  const [staff, setStaff] = useState([]);
  const navigate = useNavigate();

  const API_URL =
    "https://6a703a6055c0ce38c32604ba.mockapi.io/staff";

  async function getdata() {
    try {
      const res = await axios.get(API_URL);

      setStaff(res.data);
    } catch (error) {
      console.log("Error fetching staff:", error);
      setStaff([]);
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  async function Delete(id) {
    try {
      await axios.delete(`${API_URL}/${id}`);

      getdata();
    } catch (error) {
      console.log("Error deleting staff:", error);
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
              Manage Staff
            </h1>

            <p
              className="mb-0"
              style={{ color: "#6F6861" }}
            >
              View, edit and manage all salon staff members.
            </p>
          </div>

          <button
            className="btn px-4 py-2"
            onClick={() => navigate("/addstaff")}
            style={{
              backgroundColor: "#161412",
              color: "#FFFFFF",
            }}
          >
            + Add Staff
          </button>
        </div>

        {/* Staff Count */}
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
            {staff.length}
          </span>

          <span>
            {staff.length === 1 ? "Staff Member" : "Staff Members"} Available
          </span>
        </div>

        {/* Table */}
        {staff.length > 0 && (
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
                    <th className="py-3 ps-4">Staff Member</th>
                    <th className="py-3">Position</th>
                    <th className="py-3">Phone</th>
                    <th className="py-3">Email</th>
                    <th className="py-3">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {staff.map((item) => (
                    <tr key={item.id}>

                      {/* Staff Member */}
                      <td className="ps-4">
                        <div className="d-flex align-items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.staffName}
                            width="48"
                            height="48"
                            style={{
                              objectFit: "cover",
                              borderRadius: "50%",
                            }}
                          />

                          <span
                            className="fw-semibold"
                            style={{ color: "#161412" }}
                          >
                            {item.staffName}
                          </span>
                        </div>
                      </td>

                      {/* Position */}
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
                          {item.position}
                        </span>
                      </td>

                      {/* Phone */}
                      <td>{item.phone}</td>

                      {/* Email */}
                      <td>{item.email}</td>

                      {/* Actions */}
                      <td>
                        <div className="d-flex gap-2">

                          <button
                            className="btn btn-sm"
                            onClick={() =>
                              navigate(`/editstaff/${item.id}`)
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
                            onClick={() => Delete(item.id)}
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
        {staff.length === 0 && (
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
              No staff members found
            </h4>

            <p style={{ color: "#6F6861" }}>
              Start by adding your first staff member.
            </p>

            <button
              className="btn px-4"
              onClick={() => navigate("/addstaff")}
              style={{
                backgroundColor: "#161412",
                color: "#FFFFFF",
              }}
            >
              + Add First Staff Member
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default StaffManage;