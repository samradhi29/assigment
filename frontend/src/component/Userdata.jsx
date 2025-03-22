import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Userdata.css";

export default function Userdata() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/listschools", { state: { latitude, longitude } });
  };

  return (
    <div className="userdata-container">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setLatitude(e.target.value)}
          value={latitude}
          type="text"
          placeholder="Enter latitude"
          required
        />
        <input
          onChange={(e) => setLongitude(e.target.value)}
          value={longitude}
          type="text"
          placeholder="Enter longitude"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
