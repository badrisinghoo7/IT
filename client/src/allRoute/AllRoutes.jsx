import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Service from "../pages/Service";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us-page" element={<AboutUs />} />
      <Route path="/contact-us-page" element={<Contact />} />
      <Route path="/services" element={<Service />} />
    </Routes>
  );
};

export default AllRoutes;
