import React from "react";

const Model = () => {
  return (
    <div>
      <section className="py-5 pb-0 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span className="blog">SOX compliance</span>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6">
              <h1 className="fw-bold mb-2 main-heading">Hybrid Model</h1>
              <h3 className="text-theme fw-bold">
                Flexible Support for Mid-Tier Organizations
              </h3>
              <h4 className="mt-4">
                This route is designed for mid-tier organizations with limited
                budgets but sufficient finance bandwidth to dedicate time to
                project implementation.
              </h4>
              <div className="d-flex mt-4">
                <span className="me-2">
                  <img src="assets/images/list-check.png" alt="list-check" />
                </span>
                <p>
                  <span className="text-theme fw-bolder">
                    Process flows and Risk Control Matrixes
                  </span>
                  <br />
                  Provide your finance team with industry-specific process flows
                  and Risk Control Matrixes, which can be customized to fit your
                  organization's unique needs.
                </p>
              </div>
              <div className="d-flex">
                <span className="me-2">
                  <img src="assets/images/list-check.png" alt="list-check" />
                </span>
                <p>
                  <span className="text-theme fw-bolder">Consultation</span>{" "}
                  <br />
                  We will offer hourly consultant engagement to provide expert
                  advice and review throughout the implementation process.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="assets/images/latest.png"
                alt="sox-img-model"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Model;
