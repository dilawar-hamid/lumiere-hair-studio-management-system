import axios from "axios";
import { useEffect, useState } from "react";
import StaffCard from "../components/StaffCard";

function Staff() {
  const [staff, setStaff] = useState([]);

  const API_URL =
    "https://6a703a6055c0ce38c32604ba.mockapi.io/staff";

  async function getStaff() {
    try {
      const res = await axios.get(API_URL);

      setStaff(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.log(error);
      setStaff([]);
    }
  }

  useEffect(() => {
    getStaff();
  }, []);

  return (
    <>
      {/* Hero / Header */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#FAF9F7",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <p
                className="text-uppercase fw-semibold mb-2"
                style={{
                  fontSize: "12px",
                  letterSpacing: "2px",
                  color: "#A68B6A",
                }}
              >
                MEET OUR TEAM
              </p>

              <h1
                className="fw-bold mb-3"
                style={{
                  color: "#161412",
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                }}
              >
                The people behind your style.
              </h1>

              <p
                className="mb-0"
                style={{
                  color: "#6F6861",
                  fontSize: "17px",
                  maxWidth: "650px",
                }}
              >
                Meet our professional salon team, dedicated to helping you
                look and feel your best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Cards */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="container">
          <div className="row g-4">
            {staff.length > 0 ? (
              staff.map((item) => (
                <StaffCard
                  key={item.id}
                  staffName={item.staffName}
                  position={item.position}
                  phone={item.phone}
                  email={item.email}
                  image={item.image}
                />
              ))
            ) : (
              <div className="col-12">
                <div
                  className="text-center py-5"
                  style={{
                    backgroundColor: "#FAF9F7",
                    border: "1px solid #E6DDD3",
                  }}
                >
                  <h4
                    className="fw-bold mb-2"
                    style={{
                      color: "#161412",
                    }}
                  >
                    No staff members found
                  </h4>

                  <p
                    className="mb-0"
                    style={{
                      color: "#6F6861",
                    }}
                  >
                    Staff members will appear here once they are added.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Staff;