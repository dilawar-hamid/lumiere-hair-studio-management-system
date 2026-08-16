function StaffCard({
  staffName,
  position,
  phone,
  email,
  image,
}) {
  return (
    <div className="col-md-4">
      <div
        className="card border-0 h-100"
        style={{
          backgroundColor: "#FAF9F7",
          borderBottom: "3px solid #A68B6A",
          overflow: "hidden",
        }}
      >
        {/* Staff Image */}
        <img
          src={image}
          alt={staffName}
          style={{
            width: "100%",
            height: "260px",
            objectFit: "cover",
          }}
        />

        <div className="card-body p-4">
          {/* Position */}
          <span
            className="small"
            style={{
              color: "#A68B6A",
            }}
          >
            {position}
          </span>

          {/* Staff Name */}
          <h5
            className="fw-bold mt-2 mb-3"
            style={{
              color: "#161412",
            }}
          >
            {staffName}
          </h5>

          {/* Contact Details */}
          <div
            className="pt-3"
            style={{
              borderTop: "1px solid #E6DDD3",
            }}
          >
            <p
              className="mb-2 small"
              style={{
                color: "#6F6861",
              }}
            >
              <strong style={{ color: "#161412" }}>
                Phone:
              </strong>{" "}
              {phone}
            </p>

            <p
              className="mb-0 small"
              style={{
                color: "#6F6861",
                wordBreak: "break-word",
              }}
            >
              <strong style={{ color: "#161412" }}>
                Email:
              </strong>{" "}
              {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffCard;