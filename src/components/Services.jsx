import React from "react";

const Services = () => {
  return (
    <>
      <section className="service_section py-5 xb-hidden pb-0" id="services">
        <div className="container">
          <div className="heading_block text-center">
            <div className="heading_focus_text">
              Our
              <span className="badge bg-secondary text-white">Specialize</span>
            </div>
            <h2 className="heading_text mb-0">Featured Services</h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="service_block">
                <div className="service_image">
                  <img
                    src="assets/images/services/service_image_1.webp"
                    alt="IT Management Services"
                  />
                </div>
                <div className="service_content">
                  <h3 className="service_title">
                    <a href="#">Web and Mobile App development </a>
                  </h3>
                  <div className="links_wrapper">
                    <a className="icon_block" href="#">
                      <i className="fa-regular fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service_block">
                <div className="service_image">
                  <img
                    src="assets/images/services/service_image_2.webp"
                    alt="IT Management Services"
                  />
                </div>
                <div className="service_content">
                  <h3 className="service_title">
                    <a href="#">Custom Software Development </a>
                  </h3>
                  <div className="links_wrapper">
                    <a className="icon_block" href="#">
                      <i className="fa-regular fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service_block">
                <div className="service_image">
                  <img
                    src="assets/images/services/service_image_3.webp"
                    alt="IT Management Services"
                  />
                </div>
                <div className="service_content">
                  <h3 className="service_title">
                    <a href="#">UI/UX design services </a>
                  </h3>
                  <div className="links_wrapper">
                    <a className="icon_block" href="#">
                      <i className="fa-regular fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service_block">
                <div className="service_image">
                  <img
                    src="assets/images/services/service_image_4.webp"
                    alt="IT Management Services"
                  />
                </div>
                <div className="service_content">
                  <h3 className="service_title">
                    <a href="#">Digital Marketing</a>
                  </h3>
                  <div className="links_wrapper">
                    <a className="icon_block" href="#">
                      <i className="fa-regular fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service_block">
                <div className="service_image">
                  <img
                    src="assets/images/services/service_image_5.webp"
                    alt="IT Management Services"
                  />
                </div>
                <div className="service_content">
                  <h3 className="service_title">
                    <a href="#">Analytics & optimization</a>
                  </h3>
                  <div className="links_wrapper">
                    <a className="icon_block" href="#">
                      <i className="fa-regular fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
