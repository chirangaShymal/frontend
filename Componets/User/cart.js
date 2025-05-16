import React, { useContext } from "react";
import { CartContext } from "../UserDetails/CartContext";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const history = useNavigate();

 /* const deleteHandler = async() =>{
    await axios.delete(`http://localhost:5000/cart/${_id}`)
    .then(res =>res.data);
      sendRequest().then(()=>history('/UserDetails'));
  };*/

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={() => navigate("/")}>Back to Store</button>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table border="1" width="100%">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>BIO</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>Rs{item.price}</td>
                <td>{item.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default CartPage;