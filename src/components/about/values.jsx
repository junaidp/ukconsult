import React from "react";

const Values = () => {
  return (
    <div>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="border-left-theme ps-3 fw-bold fs-42">Our Values</h2>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 mb-3">
              <h3 className="values-heading text-secondary fw-bold">
                Openness
              </h3>
              <p className="fs-5 mt-4 text-secondary">
                We encourage: Questioning conventions. Building strategic partnerships. Fostering innovation.
              </p>
            </div>
            <div className="col-lg-4 mb-3">
              <h3 className="values-heading text-secondary fw-bold">
                Balanced
              </h3>
              <p className="fs-5 mt-4 text-secondary">
                We believe in: Considering diverse viewpoints. Promoting a healthy work-life equilibrium. Understanding the client's perspective.
              </p>
            </div>
            <div className="col-lg-4 mb-3">
              <h3 className="values-heading text-secondary fw-bold">
                Honesty
              </h3>
              <p className="fs-5 mt-4 text-secondary">
                For us, this means: Delivering on promises without exaggeration. Acknowledging mistakes as opportunities for growth.
              </p>
            </div>
          </div>
        </div>
        <div className="py-4"></div>
      </section>
    </div>
  );
};

export default Values;
