import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Marketplace from "../pages/Marketplace";
// import Home from "../pages/Home";
import Productdetails from "../pages/Productdetails";

const AllRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />}></Route>
      <Route path="/products/:id" element={<Productdetails />}></Route>
      <Route path="/marketplace" element={<Marketplace />}></Route>

    </Routes>
  );
};

export default AllRoutes;
