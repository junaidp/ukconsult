import React from "react";

const Hero = () => {
  return (
    <div>
      <header className="container">
        <div className="row py-5 custom-reverse">
          <div className="col-lg-6">
            <div className="text-center">
              <img src="assets/images/header-img-3.png" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-5 header-2">
            <div className="mt-lg-5">
              <h2 className="border-left-theme ps-3 fw-bold">Industries We Serve</h2>
              <div className="mt-5">
                <h1 className="main-heading">
                  Expert Solutions Tailored to Your Industry's Needs
                </h1>
                <h3 className="fw-600">
                  Industry-Specific Expertise for Robust Financial Control
                </h3>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
