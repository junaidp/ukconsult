import React from "react";

const Headers = () => {
  return (
    <>
      <header className="site_header site_header_1 main_header">
        <div className="header_bottom stricky">
          <div className="container px-5">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-2 col-5">
                <div className="site_logo">
                  <a className="site_link" href="index.html">
                    <img
                      src="assets/images/site_logo/site_logo_3.png"
                      alt="Site Logo – Echo – IT Solutions & Technology, Business Consulting, Software Company Site Template"
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 col-2">
                <nav className="main_menu navbar navbar-expand-lg">
                  <div
                    className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                    id="main_menu_dropdown"
                  >
                    <ul className="main_menu_list unordered_list justify-content-center">
                      <li>
                        <a href="#home">Home</a>
                      </li>
                      <li>
                        <a href="#about">About Us</a>
                      </li>
                      <li>
                        <a href="#services">Services</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-xl-3 col-lg-3 col-5">
                <ul className="header_btns_group unordered_list justify-content-end">
                  <li>
                    <button
                      className="mobile_menu_btn visibility-hidden"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#main_menu_dropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i className="far fa-bars"></i>
                    </button>
                  </li>
                  <li>
                    <a className="btn btn-outline-light" href="#contact">
                      <span className="btn_label" href="#contact">
                        Get Started
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headers;
