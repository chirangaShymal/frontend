import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navi from "../NaviB/Navi";

function UpdateUser() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/users/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.data));
    };

    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios.put(`http://localhost:5000/users/${id}`, {
      name: String(inputs.name),
      gmail: String(inputs.gmail),
      phone: Number(inputs.phone),
      address: String(inputs.address),
    });
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest();
    if (sendRequest()) {
      history("/UserDetails");
    }
  };

  return (
    <div>
      <Navi />
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br></br>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name}
          required
        ></input>
        <br></br>
        <br></br>
        <label>Gmail</label>
        <br></br>
        <input
          type="gmail"
          name="gmail"
          onChange={handleChange}
          value={inputs.gmail}
          required
        ></input>
        <br></br>
        <br></br>
        <label>Phone</label>
        <br></br>
        <input
          type="text"
          name="age"
          onChange={handleChange}
          value={inputs.phone}
          required
        ></input>
        <br></br>
        <br></br>
        <label>Address</label>
        <br></br>
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={inputs.address}
          required
        ></input>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UpdateUser;
