import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import servicevalidation from "../validation/servicevalidation";

function Editservice() {
  const { id } = useParams();
  const navigate = useNavigate();

  const form = useFormik({
    initialValues: {
      serviceName: "",
      category: "",
      price: "",
      duration: "",
      description: "",
      image: "",
    },

    validationSchema: servicevalidation,

    onSubmit: (values) => edit(values),
  });

  async function get() {
    const res = await axios.get(
      `https://6a703a6055c0ce38c32604ba.mockapi.io/services/${id}`
    );

    form.setValues({
      serviceName: res.data.serviceName,
      category: res.data.category,
      price: res.data.price,
      duration: res.data.duration,
      description: res.data.description,
      image: res.data.image,
    });
  }

  useEffect(() => {
    get();
  }, [id]);

  async function edit(values) {
    await axios.put(
      `https://6a703a6055c0ce38c32604ba.mockapi.io/services/${id}`,
      values
    );

    navigate("/servicemanage");
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

        {/* Page Heading */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">

            <button
              type="button"
              onClick={() => navigate("/servicemanage")}
              className="btn p-0 mb-4"
              style={{
                color: "#A68B6A",
                border: "none",
              }}
            >
              ← Back to Service Management
            </button>

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
              style={{
                color: "#161412",
              }}
            >
              Edit Service
            </h1>

            <p
              className="mb-0"
              style={{
                color: "#6F6861",
              }}
            >
              Update the service details below and save your changes.
            </p>

          </div>
        </div>

        {/* Form */}
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div
              className="p-4 p-md-5"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E6DDD3",
              }}
            >
              <form onSubmit={form.handleSubmit}>

                <div className="row">

                  {/* Service Name */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Service Name
                    </label>

                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="e.g. Haircut"
                      name="serviceName"
                      onBlur={form.handleBlur}
                      value={form.values.serviceName}
                      onChange={form.handleChange}
                    />

                    {form.touched.serviceName &&
                      form.errors.serviceName && (
                        <div className="text-danger small mt-1">
                          {form.errors.serviceName}
                        </div>
                      )}
                  </div>

                  {/* Category */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Category
                    </label>

                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="e.g. Hair Care"
                      name="category"
                      onBlur={form.handleBlur}
                      value={form.values.category}
                      onChange={form.handleChange}
                    />

                    {form.touched.category &&
                      form.errors.category && (
                        <div className="text-danger small mt-1">
                          {form.errors.category}
                        </div>
                      )}
                  </div>

                  {/* Price */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Price
                    </label>

                    <input
                      type="number"
                      className="form-control py-2"
                      placeholder="Enter service price"
                      name="price"
                      onBlur={form.handleBlur}
                      value={form.values.price}
                      onChange={form.handleChange}
                    />

                    {form.touched.price &&
                      form.errors.price && (
                        <div className="text-danger small mt-1">
                          {form.errors.price}
                        </div>
                      )}
                  </div>

                  {/* Duration */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Duration
                    </label>

                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="e.g. 30 Minutes"
                      name="duration"
                      onBlur={form.handleBlur}
                      value={form.values.duration}
                      onChange={form.handleChange}
                    />

                    {form.touched.duration &&
                      form.errors.duration && (
                        <div className="text-danger small mt-1">
                          {form.errors.duration}
                        </div>
                      )}
                  </div>

                </div>

                {/* Description */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Description
                  </label>

                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write a short description about this service..."
                    name="description"
                    onBlur={form.handleBlur}
                    value={form.values.description}
                    onChange={form.handleChange}
                  />

                  {form.touched.description &&
                    form.errors.description && (
                      <div className="text-danger small mt-1">
                        {form.errors.description}
                      </div>
                    )}
                </div>

                {/* Image URL */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Service Image URL
                  </label>

                  <input
                    type="url"
                    className="form-control py-2"
                    placeholder="https://example.com/service-image.jpg"
                    name="image"
                    onBlur={form.handleBlur}
                    value={form.values.image}
                    onChange={form.handleChange}
                  />

                  <small style={{ color: "#A68B6A" }}>
                    Update the image link if needed.
                  </small>

                  {form.touched.image &&
                    form.errors.image && (
                      <div className="text-danger small mt-1">
                        {form.errors.image}
                      </div>
                    )}
                </div>

                {/* Actions */}
                <div
                  className="d-flex justify-content-end gap-3 pt-3"
                  style={{
                    borderTop: "1px solid #E6DDD3",
                  }}
                >
                  <button
                    type="button"
                    className="btn px-4"
                    onClick={() => navigate("/servicemanage")}
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

export default Editservice;