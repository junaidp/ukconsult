import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className={`contact-info ${showSidebar && "active"}`}>
      <img
        className="close"
        src="assets/images/close.png"
        onClick={() => setShowSidebar(false)}
      />

      <div className="sidebar-main-wrap">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 sidebar-icon-wrap">
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/"
              onClick={() => setShowSidebar(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/about"
              onClick={() => setShowSidebar(false)}
            >
              Who We Are
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/sox-implementation"
              onClick={() => setShowSidebar(false)}
            >
              SOX Implementation
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/industries"
              onClick={() => setShowSidebar(false)}
            >
              Industries
            </Link>
          </li>
        </ul>
        <Link to="/contact" onClick={() => setShowSidebar(false)}>
          <button className="btn btn-primary">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
