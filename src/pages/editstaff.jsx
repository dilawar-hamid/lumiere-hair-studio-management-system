import { useFormik } from "formik";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import staffvalidation from "../validation/staffvalidation";

function Editstaff() {
  const { id } = useParams();
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

    onSubmit: (values) => edit(values),
  });

  async function get() {
    const res = await axios.get(
      `https://6a703a6055c0ce38c32604ba.mockapi.io/staff/${id}`
    );

    form.setValues({
      staffName: res.data.staffName,
      position: res.data.position,
      phone: res.data.phone,
      email: res.data.email,
      image: res.data.image,
    });
  }

  useEffect(() => {
    get();
  }, [id]);

  async function edit(values) {
    await axios.put(
      `https://6a703a6055c0ce38c32604ba.mockapi.io/staff/${id}`,
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
          onClick={() => navigate("/staffmanage")}
          className="btn p-0 mb-4"
          style={{
            color: "#A68B6A",
            border: "none",
          }}
        >
          ← Back to Staff Management
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
              Edit Staff Member
            </h1>

            <p
              className="mb-0"
              style={{ color: "#6F6861" }}
            >
              Update the staff member details below and save your changes.
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

                    {form.touched.staffName &&
                      form.errors.staffName && (
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

                    {form.touched.position &&
                      form.errors.position && (
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

                    {form.touched.phone &&
                      form.errors.phone && (
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

                    {form.touched.email &&
                      form.errors.email && (
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

                  {form.touched.image &&
                    form.errors.image && (
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
                    Save Changes
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

export default Editstaff;