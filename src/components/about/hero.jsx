import React from "react";

const Hero = () => {
  return (
    <div>
      <header className="container">
        <div className="row py-5 custom-reverse">
          <div className="col-lg-6">
            <div className="text-center">
              <img src="assets/images/Images (2).png" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-5 header-2">
            <div className="mt-lg-5">
              <h2 className="border-left-theme ps-3 fw-bold ml-42 who-are-we-text">
                Who Are We?
              </h2>
              <div className="ps-lg-5 mt-5">
                <h1 className="main-heading no-wrap">We are Hyphen.</h1>
                <h3 className="fw-600">
                  Openness, Balanced and Honesty driven
                  consultancy.
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
