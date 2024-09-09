import React from "react";

const Newsletter = () => {
  return (
    <div>
      <section className="py-4 section-email">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="d-flex align-items-center">
                <img src="assets/images/email.png" className="img-fluid" />
                <h3 className="text-white fw-bold m-0 ms-3">
                  Sign up for our weekly round up and get the insights you need
                  to stay on top
                </h3>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="d-flex">
                <input
                  type="email"
                  className="form-control me-3"
                  id="FormControlInput1"
                  placeholder="name@example.com"
                />
                <button className="btn btn-white">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="border-left-theme ps-3">Reach out to us</h4>
              <h2 className="main-heading my-4">
                Contact Us Today For A Free Consultation
              </h2>
              <p className="text-secondary mt-4">
                Our team of experts is here to guide you through every step of
                your SOX compliance journey. Reach out to us for a no-obligation
                consultation and see how we can help your business achieve
                compliance efficiently and effectively.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="border rounded p-3">
                <div className="mb-3">
                  <label for="Name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Name"
                    placeholder="Arshad"
                  />
                </div>
                <div className="mb-3">
                  <label for="Surname" className="form-label">
                    Surname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Surname"
                    placeholder="Saeed"
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label for="Message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="Message"
                    rows="3"
                  ></textarea>
                </div>
                <button type="button" className="btn btn-dark w-100">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
