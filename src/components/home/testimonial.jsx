import React from "react";

const Testimonial = () => {
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Tailored Industry Experience</h2>
              <p className="px-lg-5 w-lg-50 mx-auto">
                Leading companies from various industries partner with Hyphen to
                help them grow and scale their business.
              </p>
              <div className="mt-5 industry-main">
                <div className="row">
                  <div className="tetimonial px-4">
                    <div>
                      <div className="d-flex align-items-center justify-content-center">
                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.0688 0.117188C7.86701 0.117188 0.408203 7.57741 0.408203 16.7778C0.408203 25.9796 7.86701 33.4384 17.0688 33.4384C26.2692 33.4384 33.7294 25.9782 33.7294 16.7778C33.7294 7.57741 26.2692 0.117188 17.0688 0.117188ZM12.9873 21.2517C12.9873 22.1521 12.2576 22.8803 11.3586 22.8803C10.4582 22.8803 9.72995 22.1521 9.72995 21.2517V14.308C9.72995 13.4076 10.4582 12.6779 11.3586 12.6779C12.2576 12.6779 12.9873 13.4076 12.9873 14.308V21.2517ZM24.4923 21.1345C24.4923 22.4075 23.7486 22.8634 22.4756 22.8634H16.6186C15.3456 22.8634 14.3139 21.8317 14.3139 20.5587V14.7977C14.3139 14.7977 14.1996 13.8394 15.2609 12.939C15.8607 12.4295 16.7513 11.4571 17.3736 10.2773C18.61 7.93306 19.3495 7.24998 19.9126 7.43345C21.9985 8.10947 20.9556 11.2017 20.2824 12.493H22.1876C23.4592 12.493 24.4923 13.5247 24.4923 14.7977V21.1345Z"
                            fill="#5D5DFF"
                          />
                        </svg>
                        <p className="m-0 fw-bold ms-3 fs-5 text-dark">
                          Testimonial
                        </p>
                      </div>
                      <h3 className="mt-4">Bilal Aslam</h3>
                      <p className="m-0 fs-7 fw-bold text-secondary">
                        Head of Finance <br />
                        Dhafrah PV2 Energy Company LLC
                      </p>
                      <p className="mt-4 fs-5 text-dark">
                        Selecting Hyphen over Big 4 was a riskier decision but I
                        am glad that it was worth taking.
                      </p>
                      <div className="mt-4">
                        <img src="assets/images/stars.png" />
                      </div>
                    </div>
                  </div>
                  <div className="w-lg-50 industry-white">
                    <div className="industry-white-block"></div>
                    <p className="industry-text-vertical text-start">
                      What they say <br />
                      about us?
                    </p>
                    <div className="bg-white p-3 pb-5">
                      <div className="row">
                        <div className="col-lg-4">
                          <h5 className="fw-bold text-start">Full Review</h5>
                        </div>
                        <div className="col-lg-8 text-secondary text-start">
                          After screening of multiple proposals, I selected
                          Hyphen for compliance assignment of ICOFR (Internal
                          Control over Financial Reporting) under the guidelines
                          of ADAA (Abu Dhabi Accountability Authority). The
                          proposal was crisp and concise. Selecting Hyphen over
                          Big 4 was a riskier decision but I am glad that it was
                          worth taking. Faheem and his team delivered timely in
                          fashion and by this time I had realised that Faheem
                          was a reliable business partner. I acknowledge that
                          approach was pragmatic, client oriented, focused with
                          clear objectivity. Hyphen supported us day/night
                          during the external review and in the end we had a
                          clean review report on internal controls by external
                          firm and credit goes to Faheem and his team.
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
