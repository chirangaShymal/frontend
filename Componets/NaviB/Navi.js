import React from 'react'
import './Navi.css';
import AddUser from '../User/User';
import {Link} from 'react-router-dom';
function Navi() {
  return (
    
    <div className='sidebar'>
     
     
      <ul className='home-u1'>
      <li className='home-u1'>
       
      </li>
        <li className='home l1'>
            <Link to="/Home" className='active home-a'>
            <h3> HOME</h3>
            </Link>
        </li>
        <li className='home l1'>
           <Link to="/AddUser" className='active home-a'>
            <h3> ADD USERS</h3></Link>
        </li>
        <li className='home l1'>
        <Link to="/UserDetails" className='active home-a'>
            <h3> USER DETAILS</h3></Link>
        </li>
        <li>
        <Link to="/StoreDetails" className='active home-a'>
            <h3> STORE</h3></Link>
        </li>
        <li>
        <Link to="/CartDetails" className='active home-a'>
            <h3> CART</h3></Link>
        </li>
        <li>
        <Link to="/Home" className='active home-a'>
            <h3> LOGOUT</h3></Link>
        </li>
        <li>
        <Link to="/AddStore" className='active home-a'>
            <h3> INSERT</h3></Link>
        </li>
      </ul>
      <div  className='bg-image'>
          
          </div>
    </div>
  )
}

export default Navi
