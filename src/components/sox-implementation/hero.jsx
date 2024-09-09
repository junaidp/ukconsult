import React from "react";

const Hero = () => {
  return (
    <div>
      <header className="sox-header">
        <div className="position-relative">
          <img
            src="assets/images/new.png"
            alt="Snow"
            style={{ width: "100%" }}
          />

          <div className="top-left" style={{ padding: "30px 100px" }}>
            <div className="row">
              <div className="col-lg-6">
                <h1 className="fw-bold text-white sox-heading">
                  SOX Implementation <br />
                  <span className="text-theme">Routes</span>
                </h1>
                <h3 className="my-3 text-white">
                  Tailored Solutions for Every Business Need
                </h3>
                <p
                  className="pe-lg-5 fs-5 text-white"
                  style={{ lineHeight: "22px" }}
                >
                  At Hyphen, we offer three distinct routes to help your
                  organization achieve seamless SOX compliance, tailored to your
                  specific needs.
                </p>
                <ul className="mt-4 text-white" style={{ listStyle: "none" }}>
                  <li>
                    <p>
                      <span className="me-2">
                        <img
                          src="assets/images/list-check.png"
                          alt="list-check"
                        />
                      </span>
                      Full Implementation
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="me-2">
                        <img
                          src="assets/images/list-check.png"
                          alt="list-check"
                        />
                      </span>
                      Hybrid Model
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="me-2">
                        <img
                          src="assets/images/list-check.png"
                          alt="list-check"
                        />
                      </span>
                      Implementation through Artificial Intelligence
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="row justify-content-center">
                  <div className="col-8">
                    <div className="border rounded bg-white p-4">
                      <div className="mb-3">
                        <label for="Name" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="Name-"
                          placeholder="Arshad"
                        />
                      </div>
                      <div className="mb-3">
                        <label for="email" className="form-label">
                          Work Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email-"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div className="mb-3">
                        <label for="Company" className="form-label">
                          Company
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="Company"
                          placeholder="Company"
                        />
                      </div>
                      <div className="mb-3">
                        <label for="Message" className="form-label">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="Message-"
                          rows="2"
                        ></textarea>
                      </div>
                      <button type="button" className="btn btn-primary w-100">
                        Schedule a free Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
