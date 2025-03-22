import { useState } from "react";
import axios from "axios";
import "../styles/School.css";

function School() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    latitude: "",
    longitude: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/addschool",
        formData
      );
      setMessage(response.data.message);
      setFormData({ name: "", address: "", latitude: "", longitude: "" });
    } catch (err) {
      setMessage("Failed to add school");
    }
  };

  return (
    <div className="school-container">
      <h2>Add a New School</h2>
      <form onSubmit={handleSubmit} className="school-form">
        <input
          type="text"
          name="name"
          placeholder="School Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="latitude"
          placeholder="Latitude"
          value={formData.latitude}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="longitude"
          placeholder="Longitude"
          value={formData.longitude}
          onChange={handleChange}
          required
        />
        <button type="submit">Add School</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default School;
