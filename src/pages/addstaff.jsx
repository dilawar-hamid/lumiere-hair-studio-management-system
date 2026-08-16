import { useFormik } from "formik";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import staffvalidation from "../validation/staffvalidation";

function Addstaff() {
  const navigate = useNavigate();

  const form = useFormik({
    initialValues: {
      staffName: "",
      position: "",
      phone: "",
      email: "",
      image: "",
    },

    validationSchema: staffvalidation,

    onSubmit: (values) => AddstaffData(values),
  });

    async function AddstaffData(values) {
    await axios.post(
        "https://6a703a6055c0ce38c32604ba.mockapi.io/staff",
        values
    );

    navigate("/staffmanage");
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

            <h1 className="fw-bold mb-2" style={{ color: "#161412" }}>
              Add Staff Member
            </h1>

            <p className="mb-0" style={{ color: "#6F6861" }}>
              Add a new member to your salon team.
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
                  {/* Staff Name */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Staff Name
                    </label>

                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Enter staff name"
                      name="staffName"
                      onBlur={form.handleBlur}
                      value={form.values.staffName}
                      onChange={form.handleChange}
                    />

                    {form.touched.staffName && form.errors.staffName && (
                      <div className="text-danger small mt-1">
                        {form.errors.staffName}
                      </div>
                    )}
                  </div>

                  {/* Position */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Position
                    </label>

                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="e.g. Hair Stylist"
                      name="position"
                      onBlur={form.handleBlur}
                      value={form.values.position}
                      onChange={form.handleChange}
                    />

                    {form.touched.position && form.errors.position && (
                      <div className="text-danger small mt-1">
                        {form.errors.position}
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
                      placeholder="Enter phone number"
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

                  {/* Email */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control py-2"
                      placeholder="Enter email address"
                      name="email"
                      onBlur={form.handleBlur}
                      value={form.values.email}
                      onChange={form.handleChange}
                    />

                    {form.touched.email && form.errors.email && (
                      <div className="text-danger small mt-1">
                        {form.errors.email}
                      </div>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Staff Image URL
                  </label>

                  <input
                    type="url"
                    className="form-control py-2"
                    placeholder="https://example.com/staff-image.jpg"
                    name="image"
                    onBlur={form.handleBlur}
                    value={form.values.image}
                    onChange={form.handleChange}
                  />

                  {form.touched.image && form.errors.image && (
                    <div className="text-danger small mt-1">
                      {form.errors.image}
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
                    onClick={() => navigate("/staffmanage")}
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
                    Add Staff
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

export default Addstaff;