import React from "react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import contact from "../assets/operator.png";
import "./Navbar.css"; // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          {/* <img src={logo} alt="Logo" className="logo" /> */}
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div className="contact-container">
          <img src={contact} alt="image" className="contact-image" />
          <div className="contact-info">
            <div style={{ fontWeight: "bold" }}>Call Any time</div>
            <div> +91 1234567890</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <RouterLink to={to} className="nav-link" activeStyle={{ color: "#4299E1" }}>
      {children}
    </RouterLink>
  );
};

export default Navbar;
