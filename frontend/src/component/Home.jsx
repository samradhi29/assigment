import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">School Management</h1>

      <div className="home-buttons">
        <button onClick={() => navigate("/addschool")} className="home-button add">
           Add New School
        </button>

        <button onClick={() => navigate("/userdata")} className="home-button explore">
           Explore Nearby Schools
        </button>
      </div>
    </div>
  );
}
