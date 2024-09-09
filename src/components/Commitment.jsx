import React from "react";

const Commitment = () => {
  return (
    <>
      <section className="about_section section_space">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="about_image_1">
                <img
                  src="assets/images/about/about_image_9.webp"
                  alt="Echo - About Image"
                />
                <img
                  src="assets/images/about/about_image_11.webp"
                  data-parallax='{"y" : 80, "smoothness": 6}'
                  alt="Echo - About Image"
                />
                <img
                  src="assets/images/about/about_image_10.webp"
                  data-parallax='{"y" : -80, "smoothness": 6}'
                  alt="Echo - About Image"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about_content mt-80">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    We are 😃
                    <span className="badge bg-secondary text-white">Echo</span>
                  </div>
                  <h2 className="heading_text">
                    Our Commitment to Client Satisfaction
                  </h2>
                  <p className="heading_description mb-0">
                    At Echo, our commitment to client satisfaction is at the
                    core of everything we do. We understand clients' success.
                  </p>
                </div>
                <ul className="icon_list unordered_list_block mb-5">
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-solid fa-circle fa-fw"></i>
                    </span>
                    <span className="icon_list_text">
                      Grow your business the right way.
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-solid fa-circle fa-fw"></i>
                    </span>
                    <span className="icon_list_text">
                      Let business growth help your business grow.
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-solid fa-circle fa-fw"></i>
                    </span>
                    <span className="icon_list_text">
                      Helping you to get better.
                    </span>
                  </li>
                </ul>
                <ul className="btns_group unordered_list p-0 justify-content-start">
                  <li>
                    <a className="btn" href="#contact">
                      <span className="btn_label" data-text="Get Started">
                        Get Started
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commitment;
