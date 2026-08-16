import { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "../components/ServiceCard";

function Services() {
  const [services, setServices] = useState([]);

  const API_URL =
    "https://6a703a6055c0ce38c32604ba.mockapi.io/services";

  async function getServices() {
    try {
      const res = await axios.get(API_URL);

      setServices(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.log("Error fetching services:", error);
      setServices([]);
    }
  }

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div
      className="py-5"
      style={{
        minHeight: "80vh",
        backgroundColor: "#FAF9F7",
      }}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
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
            Our Services
          </h1>

          <p
            className="mb-0 mx-auto"
            style={{
              color: "#6F6861",
              maxWidth: "600px",
            }}
          >
            Discover our professional salon services designed to help you
            look and feel your best.
          </p>
        </div>

        {/* Services Cards */}
        <div className="row g-4">
        {services.map((item) => (
            <ServiceCard
            key={item.id}
            name={item.serviceName}
            category={item.category}
            price={item.price}
            duration={item.duration}
            description={item.description}
            image={item.image}
            />
        ))}
        </div>

        {/* Empty State */}
        {services.length === 0 && (
          <div className="text-center py-5">
            <h4
              className="fw-bold"
              style={{ color: "#161412" }}
            >
              No services available
            </h4>

            <p style={{ color: "#6F6861" }}>
              Please check back later.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Services;