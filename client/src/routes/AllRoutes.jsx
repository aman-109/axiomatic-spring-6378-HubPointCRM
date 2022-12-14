import React from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
import Productdetails from "../pages/Productdetails";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Productdetails/>}></Route>
    </Routes>
  );
};

export default AllRoutes;
