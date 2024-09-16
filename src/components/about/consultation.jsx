import React from "react";

const Consultation = () => {
  return (
    <div>
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="fw-bold">"Former Big 4 Consultants, Now on Your Team"</h2>
              <p className="px-lg-5 text-secondary">
              Bringing world-class consulting from the Big 4 to your doorstep—without the Big 4 price tag.
              </p>
              <div className="mt-4">
                <button
                  className="btn btn-primary px-4 py-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Schedule a Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
