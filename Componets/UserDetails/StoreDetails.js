
import React, { useEffect, useState } from "react";
import axios from "axios";
import './StoreDetails.css'
import Navi from '../NaviB/Navi';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // Store cart items

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/invent/");
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (productId) => {
    try {
      const response = await axios.post("http://localhost:5000/cart", { inventID: productId });

      if (response.status === 200) {
        alert("Product added to cart!");
        
        // Optionally update the cart state (if needed for UI updates)
        setCart((prevCart) => [...prevCart, productId]);
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Error adding product to cart");
    }
  };

  return (
    
    <div>
      <Navi/>
    <div className="container">
      <h1 className="head">Product Page</h1>
      <div className="table-container">
      <table border="1" width="100%">
        <thead>
          <tr>
            
            <th>Product Name</th>
            <th>Details</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
      
        <tbody>
        {products.map((product) => (
              <tr key={product._id} >
           <td> <h3>{product.name}</h3></td>
           <td> <p>{product.details}</p></td>
           <td> <p>Rs {product.price}</p></td>
           <td> <button onClick={() => addToCart(product._id)}>Add to Cart</button></td>
          </tr>
        ))}
        </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ProductPage;