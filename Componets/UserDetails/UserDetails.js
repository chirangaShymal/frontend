import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../User/User";
import Navi from "../NaviB/Navi";
import './UserDetails.css';
const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data).catch((err)=>console.log(err))
};
function UserDetails() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try{
      fetchHandler().then((response) => setUsers(response.data));
    }catch(err){
      console.log(err)
    }
    
  }, []);
  return (
    <div className="user-container">
      <Navi />
      <h1 className="user-title">User Details</h1>
  
      <div className="user-list">
        {users &&
          users.map((user) => (
            <div key={user.id} className="user-card">
              <User user={user} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default UserDetails;
