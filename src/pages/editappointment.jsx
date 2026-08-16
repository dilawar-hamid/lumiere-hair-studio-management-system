import { useFormik } from "formik";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import appointmentvalidation from "../validation/appointmentvalidation";

function EditAppointment() {
  const navigate = useNavigate();
  const { id } = useParams();

  const API_URL =
    "https://6a7ce836a008c10e4cbfc232.mockapi.io/Appointments";

  const form = useFormik({
    initialValues: {
      customerName: "",
      phone: "",
      service: "",
      staff: "",
      date: "",
      time: "",
      status: "Pending",
      notes: "",
    },

    validationSchema: appointmentvalidation,

    onSubmit: (values) => UpdateAppointment(values),
  });

  // GET single appointment data
  async function getAppointment() {
    try {
      const res = await axios.get(`${API_URL}/${id}`);

      form.setValues({
        customerName: res.data.customerName || "",
        phone: res.data.phone || "",
        service: res.data.service || "",
        staff: res.data.staff || "",
        date: res.data.date || "",
        time: res.data.time || "",
        status: res.data.status || "Pending",
        notes: res.data.notes || "",
      });
    } catch (error) {
      console.log("Error fetching appointment:", error);
    }
  }

  useEffect(() => {
    getAppointment();
  }, [id]);

  // PUT updated data
  async function UpdateAppointment(values) {
    try {
      await axios.put(`${API_URL}/${id}`, values);

      navigate("/viewappointment");
    } catch (error) {
      console.log("Error updating appointment:", error);
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
          onClick={() => navigate("/viewappointment")}
          className="btn p-0 mb-4"
          style={{
            color: "#A68B6A",
            border: "none",
          }}
        >
          ← Back to Appointments
        </button>

        {/* Heading */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <p
              className="text-uppercase fw-semibold mb-2"
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                color: "#A68B6A",
              }}
            >
              Salon Management
            </p>

            <h1
              className="fw-bold mb-2"
              style={{ color: "#161412" }}
            >
              Edit Appointment
            </h1>

            <p className="mb-0" style={{ color: "#6F6861" }}>
              Update customer appointment details and status.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="p-4 p-md-5 bg-white"
              style={{
                border: "1px solid #E6DDD3",
              }}
            >
              <form onSubmit={form.handleSubmit}>
                <div className="row">

                  {/* Customer Name */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Customer Name
                    </label>

                    <input
                      type="text"
                      className="form-control py-2"
                      name="customerName"
                      placeholder="Enter customer name"
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      value={form.values.customerName}
                    />

                    {form.touched.customerName &&
                      form.errors.customerName && (
                        <div className="text-danger small mt-1">
                          {form.errors.customerName}
                        </div>
                      )}
                  </div>

                  {/* Phone */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      className="form-control py-2"
                      name="phone"
                      placeholder="Enter phone number"
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      value={form.values.phone}
                    />

                    {form.touched.phone && form.errors.phone && (
                      <div className="text-danger small mt-1">
                        {form.errors.phone}
                      </div>
                    )}
                  </div>

                  {/* Service */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Service
                    </label>

                    <input
                      type="text"
                      className="form-control py-2"
                      name="service"
                      placeholder="Enter service"
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      value={form.values.service}
                    />

                    {form.touched.service && form.errors.service && (
                      <div className="text-danger small mt-1">
                        {form.errors.service}
                      </div>
                    )}
                  </div>

                  {/* Staff */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Staff Member
                    </label>

                    <input
                      type="text"
                      className="form-control py-2"
                      name="staff"
                      placeholder="Enter staff name"
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      value={form.values.staff}
                    />

                    {form.touched.staff && form.errors.staff && (
                      <div className="text-danger small mt-1">
                        {form.errors.staff}
                      </div>
                    )}
                  </div>

                  {/* Date */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Appointment Date
                    </label>

                    <input
                      type="date"
                      className="form-control py-2"
                      name="date"
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      value={form.values.date}
                    />

                    {form.touched.date && form.errors.date && (
                      <div className="text-danger small mt-1">
                        {form.errors.date}
                      </div>
                    )}
                  </div>

                  {/* Time */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Appointment Time
                    </label>

                    <input
                      type="time"
                      className="form-control py-2"
                      name="time"
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      value={form.values.time}
                    />

                    {form.touched.time && form.errors.time && (
                      <div className="text-danger small mt-1">
                        {form.errors.time}
                      </div>
                    )}
                  </div>

                  {/* Status - ADMIN ONLY */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Appointment Status
                    </label>

                    <select
                      className="form-select py-2"
                      name="status"
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      value={form.values.status}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>

                    {form.touched.status && form.errors.status && (
                      <div className="text-danger small mt-1">
                        {form.errors.status}
                      </div>
                    )}
                  </div>

                </div>

                {/* Notes */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Notes
                  </label>

                  <textarea
                    className="form-control"
                    name="notes"
                    rows="4"
                    placeholder="Enter any additional notes"
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    value={form.values.notes}
                  />

                  {form.touched.notes && form.errors.notes && (
                    <div className="text-danger small mt-1">
                      {form.errors.notes}
                    </div>
                  )}
                </div>

                {/* Buttons */}
                <div
                  className="d-flex justify-content-end gap-3 pt-3"
                  style={{
                    borderTop: "1px solid #E6DDD3",
                  }}
                >
                  <button
                    type="button"
                    className="btn px-4"
                    onClick={() => navigate("/viewappointment")}
                    style={{
                      color: "#161412",
                      border: "1px solid #CFC3B7",
                    }}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn px-4"
                    style={{
                      backgroundColor: "#161412",
                      color: "#FFFFFF",
                    }}
                  >
                    Update Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAppointment;