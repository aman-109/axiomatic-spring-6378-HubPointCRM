import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Marketplace from "../pages/Marketplace";
// import Home from "../pages/Home";
import Productdetails from "../pages/Productdetails";
import Signup from "../pages/Signup";
import ForgetPassword from "../pages/ForgetPassword";
import Otp from "../pages/Otp";

const AllRoutes = () => {
  return (
    <Routes>



      <Route path="/" element={<Home />}></Route>

      <Route path="/products/:id" element={<Productdetails />}></Route>
      <Route path="/marketplace" element={<Marketplace />}></Route>

      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>

      <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
      <Route path="/otp" element={<Otp/>}></Route>



    </Routes>
  );
};

export default AllRoutes;
