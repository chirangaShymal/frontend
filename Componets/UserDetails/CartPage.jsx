// components/CartPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navi from "../NaviB/Navi";
import './StoreDetails.css';
import './CartPage.css';
const CartPage = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await axios.get(`http://localhost:5000/cart/`);
      setCart(response.data.data);
      console.log(response.data.data);
    };
    fetchCart();
  }, []);

  const deleteHandler = async (id,e) => {
    e.preventDefault();
    const windowConfirm = window.confirm("Are you sure to delete this item?");

    if (windowConfirm) {
      const deleteItem = await axios.delete(`http://localhost:5000/cart/${id}`);

      if(deleteItem){
        alert("Item deleted.");
        window.location.reload();
      }
    }
  };

  return (
    <div className="cart-container">
      <Navi />
      <h1 className="cart-title">Your Cart</h1>
      {cart ? (
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item._id} className="cart-item">
              <h3>{item.inventID.name}</h3>
              <h4>{item.inventID.details}</h4>
              <h4>Rs. {item.inventID.price}</h4>
              <button
                type="button"
                className="delete-btn"
                onClick={(e) => deleteHandler(item._id, e)}
              >
                Delete Item
              </button>
            </div>
          ))}
           <div src="" alt="Home Inventory" className="home-image" />
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
  
};

export default CartPage;
