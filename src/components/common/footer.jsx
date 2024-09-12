import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="pt-5 bg-light footer-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div >
                <a href="#">
                  <img
                      src="assets/images/logo-ver.png" className={"logo-footer"}
                  />
                </a>
                <p >
                  Hyphen is an award-winning Uk based, dynamic advisory firm offering services that are flexible and scalable to meet the specific needs of our clients of all sizes and industries. Committed to providing real solutions that offer practical and efficient improvements to processes, procedures and operations.
                </p>


              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div>
                <p className="fw-bold">Routes</p>
              </div>
              <ul className="mt-3">
                <li>
                  <a href="#">Full Implementation</a>
                </li>
                <li>
                  <a href="#">Hybrid Model</a>
                </li>
                <li>
                  <a href="#">Implementation Through AI </a>
                </li>

              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <div>
                <p className="fw-bold">Industries</p>
              </div>
              <ul className="mt-3">
                <li>
                  <a href="#">Manufacturing</a>
                </li>
                <li>
                  <a href="#">Healthcare</a>
                </li>
                <li>
                  <a href="#">Telecom</a>
                </li>
                <li>
                  <a href="#">Utilities</a>
                </li>
                <li>
                  <a href="#">Technology</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <div>
                <p className="fw-bold fs-3">Follow Us:  </p>
              </div>
              <ul className="mt-3">
                <li>
                  <a href="#">
                    <img
                        src="assets/images/footer-icon/LinkedIn.png"
                        className="me-2"
                    />
                  </a>
                </li>
              </ul>
              <ul className={"address-box"}>
                <li  className={"ms-3"}>
                  <p>
                    167-169 Great Portland Street
                    <br/>

                    London

                    +44 7477 204632
                  </p>

                </li>
                <li className={"ms-3"}>
                  <p>


                    +44 7477 204632
                  </p>

                </li>
              </ul>
            </div>
          </div>


          <div className={"row mt-4"}>
            <div className={"col-lg-4"}>
              <p className={"fw-bold"}>
                Copyright © 2024 Hyphen Advisory. All rights reserved.
              </p>
            </div>
            <div className={"col-lg-4"}>
              <p className={"fw-bold"}>
                Privacy Policy
              </p>
            </div>
            <div className={"col-lg-4"}>
              <p className={"fw-bold"}>
                Terms of Use
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
