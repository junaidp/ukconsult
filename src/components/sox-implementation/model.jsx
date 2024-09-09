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
              <h1 className="fw-bold mb-2">Hybrid Model</h1>
              <p className="text-theme fs-4">
                Flexible Support for Mid-Tier Organizations
              </p>
              <p className="mt-4">
                This route is designed for mid-tier organizations with limited
                budgets but sufficient finance bandwidth to dedicate time to
                project implementation.
              </p>
              <div className="d-flex mt-4">
                <span className="me-2">
                  <img src="assets/images/list-check.png" alt="list-check" />
                </span>
                <p>
                  <span className="text-theme fw-bold">
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
                  <span className="text-theme fw-bold">Consultation</span>{" "}
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
