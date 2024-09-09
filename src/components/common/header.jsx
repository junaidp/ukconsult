import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="assets/images/Logo.png" style={{ width: "180px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Who We Are
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sox-implementation">
                  SOX Implementation
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/industries">
                  Industries
                </Link>
              </li>
            </ul>
            <Link to="/sox-implementation">
              <button className="btn btn-primary">Contact Us</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
