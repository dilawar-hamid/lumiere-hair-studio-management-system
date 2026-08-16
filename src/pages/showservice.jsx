import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ServiceManage() {
  const [service, setservice] = useState([]);
  const navigate = useNavigate();

  async function getdata() {
    const res = await axios.get(
      "https://6a703a6055c0ce38c32604ba.mockapi.io/services"
    );

    setservice(res.data);
  }

  useEffect(() => {
    getdata();
  }, []);

  async function Delete(id) {
    await axios.delete(
      `https://6a703a6055c0ce38c32604ba.mockapi.io/services/${id}`
    );

    getdata();
  }

  return (
    <div
      className="py-5"
      style={{
        minHeight: "80vh",
        backgroundColor: "#F5F1EB",
      }}
    >
      <div className="container">

        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="btn p-0 mb-4"
          style={{
            color: "#6B5B4D",
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
                color: "#8B7765",
              }}
            >
              Salon Management
            </p>

            <h1
              className="fw-bold mb-2"
              style={{ color: "#1F1A17" }}
            >
              Manage Services
            </h1>

            <p
              className="mb-0"
              style={{ color: "#75685E" }}
            >
              View, edit and manage all salon services.
            </p>
          </div>

          <button
            className="btn px-4 py-2"
            onClick={() => navigate("/addservice")}
            style={{
              backgroundColor: "#1F1A17",
              color: "#FFFFFF",
            }}
          >
            + Add Service
          </button>
        </div>

        {/* Service Count */}
        <div
          className="d-inline-flex align-items-center gap-2 px-3 py-2 mb-4"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            color: "#75685E",
          }}
        >
          <span
            className="fw-bold"
            style={{
              color: "#1F1A17",
              fontSize: "18px",
            }}
          >
            {service.length}
          </span>

          <span>
            {service.length === 1 ? "Service" : "Services"} Available
          </span>
        </div>

        {/* Table */}
        {service.length > 0 && (
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
                      backgroundColor: "#1F1A17",
                      color: "#FFFFFF",
                    }}
                  >
                    <th className="py-3 ps-4">Service</th>
                    <th className="py-3">Category</th>
                    <th className="py-3">Price</th>
                    <th className="py-3">Duration</th>
                    <th className="py-3">Description</th>
                    <th className="py-3">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {service.map((item) => (
                    <tr key={item.id}>

                      {/* Service */}
                      <td className="ps-4">
                        <div className="d-flex align-items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.serviceName}
                            width="48"
                            height="48"
                            style={{
                              objectFit: "cover",
                              borderRadius: "10px",
                            }}
                          />

                          <span
                            className="fw-semibold"
                            style={{ color: "#1F1A17" }}
                          >
                            {item.serviceName}
                          </span>
                        </div>
                      </td>

                      {/* Category */}
                      <td>
                        <span
                          className="px-2 py-1"
                          style={{
                            backgroundColor: "#F1EBE3",
                            borderRadius: "6px",
                            fontSize: "13px",
                            color: "#6B5B4D",
                          }}
                        >
                          {item.category}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="fw-medium">
                        Rs. {item.price}
                      </td>

                      {/* Duration */}
                      <td>{item.duration}</td>

                      {/* Description */}
                      <td
                        style={{
                          maxWidth: "230px",
                          color: "#75685E",
                        }}
                      >
                        <div className="text-truncate">
                          {item.description}
                        </div>
                      </td>

                      {/* Actions */}
                      <td>
                        <div className="d-flex gap-2">

                          <button
                            className="btn btn-sm"
                            onClick={() =>
                              navigate(`/editservice/${item.id}`)
                            }
                            style={{
                              border: "1px solid #D8CABC",
                              color: "#1F1A17",
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
        {service.length === 0 && (
          <div
            className="text-center py-5 bg-white"
            style={{
              borderRadius: "20px",
            }}
          >
            <h4
              className="fw-bold"
              style={{ color: "#1F1A17" }}
            >
              No services found
            </h4>

            <p style={{ color: "#75685E" }}>
              Start by adding your first salon service.
            </p>

            <button
              className="btn px-4"
              onClick={() => navigate("/addservice")}
              style={{
                backgroundColor: "#1F1A17",
                color: "#FFFFFF",
              }}
            >
              + Add First Service
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default ServiceManage;