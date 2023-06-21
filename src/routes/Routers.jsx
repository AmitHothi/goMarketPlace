import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/mainPages/Login";
import Register from "../pages/mainPages/Register";
import DashBoard from "../pages/mainPages/DashBoard";
import Definitions from "../pages/sideBarPages/otherPages/Definitions";
import Events from "../pages/sideBarPages/otherPages/Events";
import Order from "../pages/sideBarPages/otherPages/Order";
import Payments from "../pages/sideBarPages/otherPages/Payments";
import Products from "../pages/sideBarPages/productPage/Products";
import Shipments from "../pages/sideBarPages/otherPages/Shipments";
import Editproduct from "../pages/sideBarPages/productPage/EditProduct";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/DashBoard" element={<DashBoard />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Order" element={<Order />} />
      <Route path="/Shipments" element={<Shipments />} />
      <Route path="/Payments" element={<Payments />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Definitions" element={<Definitions />} />
      <Route path="/EditProduct" element={<Editproduct />} />
    </Routes>
  );
};

export default Routers;
