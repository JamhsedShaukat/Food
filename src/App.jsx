import React, { useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";

const App = () => {
  const [login,setLogin]=useState(false);
  return (
    <>
    {login?<LoginPopUp setLogin={setLogin}/>:<></>}
      <div className="app">
        <NavBar setLogin={setLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/PlaceOrder" element={<PlaceOrder />} />
        </Routes>
      </div>
        <Footer />
    </>
  );
};

export default App;
