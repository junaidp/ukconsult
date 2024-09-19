import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
  };
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="main-heading">Tailored Industry Experience</h1>
              <p className="px-lg-5 w-lg-50 mx-auto text-secondary fs-20 inter">
                Leading companies from various industries partner with Hyphen to
                help them grow and scale their business.
              </p>
              <div className="mt-5 industry-main">
                <Slider {...settings}>
                  <div>
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
                              d="M17.0708 0.121094C7.86897 0.121094 0.410156 7.58131 0.410156 16.7817C0.410156 25.9835 7.86897 33.4423 17.0708 33.4423C26.2711 33.4423 33.7313 25.9821 33.7313 16.7817C33.7313 7.58131 26.2711 0.121094 17.0708 0.121094ZM12.9892 21.2556C12.9892 22.156 12.2596 22.8842 11.3606 22.8842C10.4601 22.8842 9.7319 22.156 9.7319 21.2556V14.3119C9.7319 13.4115 10.4601 12.6818 11.3606 12.6818C12.2596 12.6818 12.9892 13.4115 12.9892 14.3119V21.2556ZM24.4943 21.1384C24.4943 22.4114 23.7505 22.8673 22.4775 22.8673H16.6205C15.3475 22.8673 14.3159 21.8356 14.3159 20.5626V14.8016C14.3159 14.8016 14.2015 13.8433 15.2629 12.9429C15.8627 12.4334 16.7532 11.461 17.3756 10.2812C18.6119 7.93697 19.3514 7.25389 19.9146 7.43736C22.0005 8.11338 20.9575 11.2056 20.2843 12.4969H22.1896C23.4612 12.4969 24.4943 13.5286 24.4943 14.8016V21.1384Z"
                              fill="#F47920"
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
                          Selecting Hyphen over Big 4 was a riskier decision but
                          I am glad that it was worth taking.
                        </p>
                        <div className="mt-4 d-flex justify-center">
                          <img src="assets/images/star.svg" />
                          <img src="assets/images/star.svg" />
                          <img src="assets/images/star.svg" />
                          <img src="assets/images/star.svg" />
                          <img src="assets/images/star.svg" />
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
                            Control over Financial Reporting) under the
                            guidelines of ADAA (Abu Dhabi Accountability
                            Authority). The proposal was crisp and concise.
                            Selecting Hyphen over Big 4 was a riskier decision
                            but I am glad that it was worth taking. Faheem and
                            his team delivered timely in fashion and by this
                            time I had realised that Faheem was a reliable
                            business partner. I acknowledge that approach was
                            pragmatic, client oriented, focused with clear
                            objectivity. Hyphen supported us day/night during
                            the external review and in the end we had a clean
                            review report on internal controls by external firm
                            and credit goes to Faheem and his team.
                            <br />
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="tetimonial2 px-4">
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
                              d="M17.0708 0.121094C7.86897 0.121094 0.410156 7.58131 0.410156 16.7817C0.410156 25.9835 7.86897 33.4423 17.0708 33.4423C26.2711 33.4423 33.7313 25.9821 33.7313 16.7817C33.7313 7.58131 26.2711 0.121094 17.0708 0.121094ZM12.9892 21.2556C12.9892 22.156 12.2596 22.8842 11.3606 22.8842C10.4601 22.8842 9.7319 22.156 9.7319 21.2556V14.3119C9.7319 13.4115 10.4601 12.6818 11.3606 12.6818C12.2596 12.6818 12.9892 13.4115 12.9892 14.3119V21.2556ZM24.4943 21.1384C24.4943 22.4114 23.7505 22.8673 22.4775 22.8673H16.6205C15.3475 22.8673 14.3159 21.8356 14.3159 20.5626V14.8016C14.3159 14.8016 14.2015 13.8433 15.2629 12.9429C15.8627 12.4334 16.7532 11.461 17.3756 10.2812C18.6119 7.93697 19.3514 7.25389 19.9146 7.43736C22.0005 8.11338 20.9575 11.2056 20.2843 12.4969H22.1896C23.4612 12.4969 24.4943 13.5286 24.4943 14.8016V21.1384Z"
                              fill="#F47920"
                            />
                          </svg>

                          <p className="m-0 fw-bold ms-3 fs-5 text-dark">
                            Testimonial
                          </p>
                        </div>
                        <h3 className="mt-4">MUAZZAM UR REHMAN </h3>
                        <p className="m-0 fs-7 fw-bold text-secondary">
                          CFO <br />
                          Taweelah RO Desalination Company
                        </p>
                        <p className="mt-4 fs-5 text-dark">
                          Their in-depth experience within the risk and business
                          domain not only enabled us to have appropriate
                          controls but also...
                        </p>
                        <div className="mt-4 d-flex justify-center">
                          <img src="assets/images/star.svg" />
                          <img src="assets/images/star.svg" />
                          <img src="assets/images/star.svg" />
                          <img src="assets/images/star.svg" />
                          <img src="assets/images/star.svg" />
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
                            We engaged Hyphen Consultancy - led by Faheem
                            Piracha - for the implementation of Internal Control
                            Over Financial Reporting. The team adopted a
                            structured and collaborative approach for the
                            successful execution of this important project.
                            Their in-depth experience within the risk and
                            business domain not only enabled us to have
                            appropriate controls but also provided opportunity
                            for us to improvise the efficiency and effectiveness
                            of underlying processes.
                            <span style={{ visibility: "hidden" }}>
                              business partner. I acknowledge that approach was
                              pragmatic, client oriented, focused with clear
                              objectivity. Hyphen supported us day/night during
                              the external review and in the end we had a clean
                              review report on internal controls by team.
                            </span>
                            <br />
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
