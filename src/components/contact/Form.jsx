import React from "react";
import TextField from "@mui/material/TextField";

const Form = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 card shadow rounded">
            <div className="row">
              <div
                className="col-6 position-relative"
                style={{ background: "#F47920" }}
              >
                <div className="row pt-5 pb-3 px-5">
                  <div className="col-12 text-start">
                    <h2 className="main-heading mb-3 text-white">
                      Get in Touch
                    </h2>
                    <h3 className="text-white mb-5">
                      Fill out the form below, and one of our experts will get
                      back to you promptly.
                    </h3>
                  </div>
                </div>

                <div className="row py-2 px-5">
                  <div className="col-12 text-white mb-50">
                    <div className="d-flex align-items-center">
                      <img src="assets/images/phone.png" alt="Phone" />
                      <p className="ps-4 mb-0">+44 7477 204632</p>
                    </div>
                  </div>

                  <div className="col-12 text-white mb-50">
                    <div className="d-flex align-items-center">
                      <img src="assets/images/email-.png" alt="Email" />
                      <p className="ps-4 mb-0">Info@hyphenAdvisory.com</p>
                    </div>
                  </div>

                  <div className="col-12 text-white mb-3 pb-5 mb-50">
                    <div className="d-flex align-items-center">
                      <img src="assets/images/address.png" alt="Address" />
                      <p className="ps-4 mb-0">
                        167-169 Great Portland Street, London
                      </p>
                    </div>
                  </div>

                  <div className="col-12 text-white mb-3 form-bottom">
                    <img
                      src="assets/images/touch-bottom.png"
                      alt="Decoration"
                    />
                  </div>
                </div>
              </div>
              {/* Right side: Form section */}
              <div className="col-6 py-5 px-5">
                <div className="row w-100">
                  <div className="col-6">
                    <div className="mb-4">
                      <TextField
                        id="standard-basic"
                        label="first Name"
                        variant="standard"
                        className="w-100"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-4">
                      <TextField
                        id="standard-basic"
                        label="last Name"
                        variant="standard"
                        className="w-100"
                      />
                    </div>
                  </div>
                </div>

                <div className="row w-100">
                  <div className="col-6">
                    <div className="mb-4">
                      <TextField
                        id="standard-basic"
                        label="work Email"
                        variant="standard"
                        className="w-100"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-4">
                      <TextField
                        id="standard-basic"
                        label="phone Number"
                        variant="standard"
                        className="w-100"
                      />
                    </div>
                  </div>
                </div>

                <div className="row w-100">
                  <div className="col-6">
                    <div className="mb-4">
                      <TextField
                        id="standard-basic"
                        label="company"
                        variant="standard"
                        className="w-100"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="mb-4">
                      <TextField
                        id="standard-basic"
                        label="Message"
                        variant="standard"
                        className="w-100"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-12 text-end">
                    <button
                      type="button"
                      className="btn btn-dark w-25"
                      style={{ height: "40px", fontWeight: "bold" }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
