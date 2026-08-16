function ServiceCard({
  name,
  category,
  price,
  duration,
  description,
  image,
}) {
  return (
    <div className="col-md-4 text-center justify-content-center">
      <div
        className="card text-center justify-content-center border-0 h-100"
        style={{
          backgroundColor: "#FAF9F7",
          borderRadius: "0",
          overflow: "hidden",
          borderBottom: "3px solid #A68B6A",
        }}
      >
        {/* Service Image */}
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
          }}
        />

        <div className="card-body p-4">
          {/* Category */}
          <span
            className="small"
            style={{ color: "#A68B6A" }}
          >
            {category}
          </span>

          {/* Service Name */}
          <h5
            className="fw-bold mt-2"
            style={{ color: "#161412" }}
          >
            {name}
          </h5>

          {/* Description */}
          <p
            className="small mb-3"
            style={{ color: "#6F6861" }}
          >
            {description}
          </p>

          {/* Price + Duration */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <strong style={{ color: "#161412" }}>
              Rs. {price}
            </strong>

            <small style={{ color: "#6F6861" }}>
              {duration}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;