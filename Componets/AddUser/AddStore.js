import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";
import Navi from "../NaviB/Navi";
import axios from "axios";

function AddStore() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    details: "",
  });

  const [errors, setErrors] = useState({}); // Store validation errors

  // Handle input changes
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Validate inputs
  const validate = () => {
    let newErrors = {};
    if (!inputs.name.trim()) newErrors.name = "Name is required";
    if (!inputs.price || isNaN(inputs.price) || Number(inputs.price) <= 0)
      newErrors.price = "Enter a valid price";
    if (!inputs.details.trim()) newErrors.bio = "Bio is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      sendRequest().then(() => history("/StoreDetails"));
    }
  };

  // Send API request
  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/invent/", {
        name: inputs.name,
        price: Number(inputs.price),
        details: inputs.details,
        
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <Navi />
      <h1>Add Inventory</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          //value={inputs.name}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <br />

        {/* Price Input */}
        <label>Price</label>
        <br />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          //value={inputs.price}
          required
        />
        {errors.price && <p className="error">{errors.price}</p>}
        <br />

        {/* Bio Input */}
        <label>Details</label>
        <br />
        <input
          type="text"
          name="details"
          onChange={handleChange}
          //value={inputs.details}
          required
        />
        {errors.bio && <p className="error">{errors.bio}</p>}
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddStore;
