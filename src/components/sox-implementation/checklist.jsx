import React from "react";

const Checklist = () => {
  return (
    <div>
      <section className="py-2 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="border-left-theme-2 ps-3 py-1">SOX Compliance Checklist</h2>
              <p className="text-secondary mt-4 fs-20">
                We've been working with SOX compliance since the beginning. We
                know how challenging it can be to plan and achieve SOX
                readiness. That's why we've prepared a straightforward checklist
                to help you ensure your company meets all SOX requirements.
              </p>
              <div className="mt-4">
                <button className="btn btn-primary rounded-pill px-4 position-relative down-btn">
                  Download
                </button>
                <p className="text-dark text-uppercase mt-3">
                  ensure your company meets all SOX requirements.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="assets/images/SOX.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checklist;
