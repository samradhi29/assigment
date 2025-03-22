import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../styles/Listschools.css";

export default function Listschools() {
  const server = "https://schooldata-obk0.onrender.com";
  const location = useLocation();
  const { latitude, longitude } = location.state || {};
  const [schools, setSchools] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (latitude && longitude) {
      getSchoolData(latitude, longitude);
    } else {
      setError("Error: Latitude and Longitude not provided");
    }
  }, [latitude, longitude]);

  const getSchoolData = async (lat, lng) => {
    try {
      const response = await axios.get(
        `${server}/listSchools?userlatitude=${lat}&userlongitude=${lng}`
      );
      setSchools(response.data);
      setError("");
    } catch (error) {
      console.error("Error fetching schools:", error);
      setError("Failed to fetch school data. Please try again.");
    }
  };

  return (
    <div className="listschools-container">
      <h2>Nearby Schools</h2>
      {error && <p className="error-message">{error}</p>}
      {schools.length > 0 ? (
        <ul>
          {schools.map((school, index) => (
            <li key={index}>
              <strong>{school.name}</strong>
              <p>{school.address}</p>
              <p>Distance: {school.distance} km</p>
            </li>
          ))}
        </ul>
      ) : (
        !error && <p className="no-schools">No schools found near this location.</p>
      )}
    </div>
  );
}
