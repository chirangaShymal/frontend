import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Home from "./Componets/Home/Home";
import { Route, Routes } from "react-router-dom";
import AddUser from "./Componets/AddUser/AddUser";
import UserDetails from "./Componets/UserDetails/UserDetails";
import UpdateUser from "./Componets/UpdateUser/UpdateUser";
import AddStore from "./Componets/AddUser/AddStore";
import StoreDetails from "./Componets/UserDetails/StoreDetails";
import CartDetails from "./Componets/UserDetails/CartContext";
import { CartProvider } from "./Componets/UserDetails/CartContext";
import CartPage from "./Componets/UserDetails/CartPage";
import StoreProvider from "./Componets/User/Store";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/UserDetails" element={<UserDetails />} />
          <Route path="/UpdateUser/:id" element={<UpdateUser />} />
          <Route path="/AddStore" element={<AddStore />} />
          {/* <Route path="/CartDetails" element={<CartDetails/>}/> */}
          <Route path="/StoreDetails" element={<StoreDetails />} />
          <Route path="/CartDetails" element={<CartPage />} />
        </Routes>
      </React.Fragment>
      {/* <CartProvider>
        <Routes>
          <Route path="/StoreDetails" element={<StoreDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider> */}
      <StoreProvider>
        <Routes>
          {/* <Route path="/StoreDetails" element={<StoreDetails />} /> */}
        </Routes>
      </StoreProvider>
    </div>
  );
}

export default App;
