import React from "react";

const Hero = () => {
  return (
    <div>
      <header className="container">
        <div className="row py-5">
          <div className="col-lg-6">
            <h1 className="main-heading">
              Sarbanes Oxley (SOX) Implementation Specialists
            </h1>
            <h4 className="fs-4 my-4">
              Big 4 Expertise at a Fraction of the Cost.
            </h4>
            <p className="text-secondary fs-5">
              SOX compliance is coming to the UK. Trust our experts, with global
              experience, to guide your company to full compliance efficiently
              and effectively.
            </p>
            <button
              className="btn btn-primary btn-shadow px-4 py-2 mt-4"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Schedule a Consultation
            </button>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <img src="assets/images/header-img.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
