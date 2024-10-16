import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/adada_logo.png";
import "./HeaderStyle.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="ADADA Digital Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/get-quotes" className="get-quotes-btn">
            Get Quotes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
