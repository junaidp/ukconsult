import React from "react";
import { Link } from "react-router-dom";
import SmallScreenSidebar from "./small-screen-sidebar";

const Header = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  return (
    <>
      <div className="top-bar">
        <SmallScreenSidebar
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="assets/images/Logo.svg" className="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowSidebar(true)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
              <Link to="/contact">
                <button className="btn btn-primary">Contact Us</button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
