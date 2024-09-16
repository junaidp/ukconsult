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
                Transparency
              </h3>
              <p className="fs-5 mt-4 text-secondary">
                We are fully honest and transparent regarding the competence and
                experience about our Consultants and provide references,
                certificates and proof of work backing that up.
              </p>
            </div>
            <div className="col-lg-4 mb-3">
              <h3 className="values-heading text-secondary fw-bold">
                Accountability
              </h3>
              <p className="fs-5 mt-4 text-secondary">
                We feel accountable from their first day till the last how our
                Consultants perform and whether they are able to meet the
                expectations and impact necessary.
              </p>
            </div>
            <div className="col-lg-4 mb-3">
              <h3 className="values-heading text-secondary fw-bold">
                Impact Driven
              </h3>
              <p className="fs-5 mt-4 text-secondary">
                We participate only on engagements where there is a clear path
                towards a positive impact our Consultants may support and
                contribute to.
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
