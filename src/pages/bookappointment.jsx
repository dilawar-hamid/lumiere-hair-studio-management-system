import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import appointmentvalidation from "../validation/appointmentvalidation";

function Bookappointment() {
  const navigate = useNavigate();

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

    onSubmit: (values) => BookAppointmentData(values),
  });

  async function BookAppointmentData(values) {
    try {
      await axios.post(API_URL, values);

      navigate("/");
    } catch (error) {
      console.log("Appointment booking error:", error);
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
          onClick={() => navigate("/")}
          className="btn p-0 mb-4"
          style={{
            color: "#A68B6A",
            border: "none",
          }}
        >
          ← Back to Home
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
              LUMIÈRE HAIR STUDIO
            </p>

            <h1
              className="fw-bold mb-2"
              style={{ color: "#161412" }}
            >
              Book an Appointment
            </h1>

            <p
              className="mb-0"
              style={{ color: "#6F6861" }}
            >
              Tell us what you need and book your visit with us.
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
                      placeholder="Enter your name"
                      name="customerName"
                      onBlur={form.handleBlur}
                      value={form.values.customerName}
                      onChange={form.handleChange}
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
                      placeholder="03001234567"
                      name="phone"
                      onBlur={form.handleBlur}
                      value={form.values.phone}
                      onChange={form.handleChange}
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
                      placeholder="e.g. Haircut"
                      name="service"
                      onBlur={form.handleBlur}
                      value={form.values.service}
                      onChange={form.handleChange}
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
                      Preferred Staff Member
                    </label>

                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Enter staff name"
                      name="staff"
                      onBlur={form.handleBlur}
                      value={form.values.staff}
                      onChange={form.handleChange}
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
                      value={form.values.date}
                      onChange={form.handleChange}
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
                      value={form.values.time}
                      onChange={form.handleChange}
                    />

                    {form.touched.time && form.errors.time && (
                      <div className="text-danger small mt-1">
                        {form.errors.time}
                      </div>
                    )}
                  </div>

                </div>

                {/* Notes */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Additional Notes
                  </label>

                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write any additional details..."
                    name="notes"
                    onBlur={form.handleBlur}
                    value={form.values.notes}
                    onChange={form.handleChange}
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
                    onClick={() => navigate("/")}
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
                    Book Appointment
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

export default Bookappointment;