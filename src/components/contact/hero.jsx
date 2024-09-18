import React from "react";

const Hero = () => {
  return (
    <div>
      <header className="overflow-x-hidden">
        <div className="row">
          <div className="col-lg-6  home-hero">
            <h4 className="border-left-theme ps-3">Get in Touch</h4>
            <h1 className="main-heading">How Can We Assist You? </h1>
            <h4 className="fs-4 my-4">
              We’re here to help your organization navigate the complexities of
              SOX compliance.{" "}
            </h4>
            <p className="text-secondary fs-5">
              Our consultants are on hand to offer solutions tailored to your
              industry and organizational needs.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <img
                src="assets/images/header-img-new.png"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
