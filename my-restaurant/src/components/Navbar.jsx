
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false); // Manage collapse state

  // Function to handle collapsing and expanding the navbar
  const handleNavCollapse = () => {
    const navbar = document.getElementById("navbarSupportedContent");
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
      setCollapsed(true); // Set navbar as collapsed
    } else {
      setCollapsed(false); // Set navbar as expanded
    }
  };

  return (
    <nav className="header_section navbar navbar-expand-lg custom_nav-container">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand" href="/">
          <span>nextbite</span>
        </a>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={collapsed ? "false" : "true"}
          aria-label="Toggle navigation"
          onClick={() => setCollapsed(!collapsed) }// Toggle collapse state
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className={`collapse navbar-collapse ${collapsed ? "" : "show"}` } id="navbarSupportedContent">
          {/* Navbar Links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/" aria-current="page" onClick={handleNavCollapse}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu" onClick={handleNavCollapse}>
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavCollapse}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book" onClick={handleNavCollapse}>
                Book Table
              </Link>
            </li>
          </ul>

          {/* User Options */}
          <div className="user_option">
            <Link to="/signin" className="user_link" >
              <i className="fa fa-user" aria-hidden="true"></i>
            </Link>
            <a className="cart_link" href="/">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </a>
            <form className="form-inline">
              <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
            <Link to="/menu" className="order_online">
              Order Online
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
