import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import CartProvider from "./Componets/Cart/CartContext"; // Ensure the path is correct

// // Use ReactDOM.createRoot instead of render
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <CartProvider>
//     <App />
//   </CartProvider>
// );
// import React from "react";
// import ReactDOM from "react-dom/client";  // For React 18 and later
// import App from "./App";
// import CartProvider from "./Componets/Cart/CartContext"; // Adjust path if needed
// import { BrowserRouter } from "react-router-dom";  // Import BrowserRouter

// const root = ReactDOM.createRoot(document.getElementById("root"));  // Create the root element

// root.render(
//   <BrowserRouter>  {/* Wrap App with BrowserRouter to provide routing context */}
//     <CartProvider>
//       <App />
//     </CartProvider>
//   </BrowserRouter>
// );


