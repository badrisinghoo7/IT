import React from "react";
import "./Footer.css";
import { IoMdTime } from "react-icons/io";
import { IoArrowRedoOutline } from "react-icons/io5";
import logo from "../assets/logo-2-removebg-preview.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            suscipit repudiandae fuga exercitationem maxime deleniti atque,
            cumque expedita veritatis animi!
          </h3>
        </div>
        <div className="solutions">
          <h1>IT Solutions</h1>
          <div>
            <a>
              <IoArrowRedoOutline />
              IT Management
            </a>
            <a>
              <IoArrowRedoOutline />
              SEO Optimizations
            </a>
            <a>
              <IoArrowRedoOutline />
              Web Developement
            </a>
            <a>
              <IoArrowRedoOutline />
              Cyber Security
            </a>
            <a>
              <IoArrowRedoOutline /> Data Security
            </a>
          </div>
        </div>
        <div className="quick-links">
          <h1>Quick Links</h1>
          <div>
            <a href="/About-us-page">
              {" "}
              <IoArrowRedoOutline />
              About Us
            </a>
            <a>
              {" "}
              <IoArrowRedoOutline />
              Our Services
            </a>
            <a>
              {" "}
              <IoArrowRedoOutline />
              Contact Us
            </a>
            <a>
              {" "}
              <IoArrowRedoOutline />
              Blog
            </a>
            <a>
              {" "}
              <IoArrowRedoOutline />
              FAQ
            </a>
            <a>
              <IoArrowRedoOutline />
              Our Team
            </a>
          </div>
        </div>
        <div className="contact">
          <h1>Contact Us</h1>

          <div>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <h1>Opening Time</h1>
            <div className="opening">
              <IoMdTime />
              <p style={{ marginLeft: "10px", color: "white" }}>
                Mon-Sat 10:00 AM - 4.00PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
