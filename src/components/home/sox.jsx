import React from "react";

const SOX = () => {
  return (
    <div>
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="fw-bold fs-42">Partner with Hyphen to simplify SOX compliance</h2>
              <p className="px-lg-5 text-secondary fs-20">
                Enhance the efficiency, accuracy and security of your SOX
                program.
              </p>
              <div className="mt-4">
                <button
                  className="btn btn-primary px-4 py-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Schedule a FREE Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SOX;
