import React from "react";

const AI = () => {
  return (
    <div>
      <section className="py-5 font-inter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="main-heading">
                Implementation through <br />{" "}
                <span className="text-theme">Artificial Intelligence</span>
              </h1>
            </div>
            <div className="col-lg-6">
              <img
                src="assets/images/sox-image-1.png"
                alt="sox-image-1"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <p className="fs-4 text-secondary">
                Suitable for mid-tier organizations with some internal control
                knowledge and limited budgets, this model leverages the power of
                AI for efficient implementation.
              </p>
              <div className="d-flex mt-4">
                <span className="me-2">
                  <img src="assets/images/list-check.png" alt="list-check" />
                </span>
                <p>
                  <span className="text-theme fw-bold">In-House AI Model</span>{" "}
                  <br />
                  Gain access to our in-house AI Model, which will generate
                  process flows and Risk Control Matrixes based on user input.
                </p>
              </div>
              <div className="d-flex">
                <span className="me-2">
                  <img src="assets/images/list-check.png" alt="list-check" />
                </span>
                <p>
                  <span className="text-theme fw-bold">Team</span>
                  <br />
                  Engage our team on an hourly basis for second-level reviews to
                  ensure accuracy and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AI;
