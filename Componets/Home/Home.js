import React from 'react';
import Navi from '../NaviB/Navi';
import './Home.css'


export default function Home() {

  

  return (
    <div className="home-container">
      <Navi /> 
      
      <h5 className="home-text">
        To create a seamless, efficient, and user-friendly Home Inventory System that helps individuals and families track, manage, and organize their household items digitally, reducing clutter, enhancing security, and simplifying home management.
      </h5>

      {/* Add the image */}
      <div className="home-image-container">
        <div src="" alt="Home Inventory" className="home-image" />
      </div>
    </div>
  )
}
