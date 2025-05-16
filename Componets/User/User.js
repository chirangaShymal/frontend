import React from 'react'
import './User.css';
// import Navi from '../NaviB/Navi';
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios';

function User({user}) {
  const {_id,name,gmail,phone,address} = user;

  const sendRequest = async()=>{
    await axios.post("http://localhost:5000/users").then(res => res.data);
  };

 const history = useNavigate();

  const deleteHandler = async() =>{
    await axios.delete(`http://localhost:5000/users/${_id}`)
    .then(res =>res.data);
      sendRequest().then(()=>history('/UserDetails'));
  };
  return (
    
    <div>
      
      <div className='d1'>
      <br></br>
      <h1> ID:{_id}</h1>
      <h1> Name:{name}</h1>
      <h1> GMAIL:{gmail}</h1>
      <h1> PHONE:{phone}</h1>
      <h1> ADDRESS:{address}</h1>
      <button><Link to={`/UpdateUser/${_id}`}>UPDATE</Link></button>
     {/* <button onClick={deleteHandler}>DELETE</button>*/}
      </div>
      <img className='image' />
    </div>
  )
}

export default User
