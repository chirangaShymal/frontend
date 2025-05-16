import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";
import Navi from "../NaviB/Navi";
import axios from "axios";

function AddUser() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    gmail: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({ gmail: "", phone: "" });

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Sri Lankan phone number validation function
  const validatePhone = (phone) => {
    const phoneRegex = /^(07[0-9]{8})$/; // Matches 10-digit numbers starting with 07
    return phoneRegex.test(phone);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Validate email
    if (name === "gmail") {
      if (!validateEmail(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          gmail: "Invalid email format",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          gmail: "",
        }));
      }
    }

    // Validate phone number
    if (name === "phone") {
      if (!validatePhone(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: "Invalid Sri Lankan phone number (e.g., 0712345678)",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: "",
        }));
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (validate()) {
    //   sendRequest().then(() => history("/UserDetails"));
    // }

    sendRequest().then(() => history("/UserDetails"));
  };


    // Check validations before submitting
    const validate = () => {
    if (!validateEmail(inputs.gmail)) {
      setErrors({ ...errors, gmail: "Invalid email format" });
      return;
    }
    if (!validatePhone(inputs.phone)) {
      setErrors({ ...errors, phone: "Invalid Sri Lankan phone number" });
      return;
    }
  };
  /*  try {
      await sendRequest();
      history("/UserDetails");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };*/

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/users/", {
      name: String(inputs.name),
      gmail: String(inputs.gmail),
      phone: String(inputs.phone), // Ensure phone is saved as a string
      address: String(inputs.address),
    });
  };

  return (
    <div className="home-container">
      <Navi />
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name}
          required
        />
        <br />
        <br />

        <label>Gmail</label>
        <br />
       
        <input
          type="email"
          name="gmail"
          onChange={handleChange}
          value={inputs.gmail}
          required
        />
        {errors.gmail && <p style={{ color: "red" }}>{errors.gmail}</p>}
        <br />
        <br />

        <label>Phone</label>
        <br />
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          value={inputs.phone}
          required
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        <br />
        <br />

        <label>Address</label>
        <br />
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={inputs.address}
          required
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
      <div src="" alt="Home Inventory" className="home-image" /> 
    </div>
  );
}

export default AddUser;