import React from "react";

const Policy = () => {
  return (
    <>
      <hr className="bg-main" />
      <section className="policy_section mt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon">
                  <img
                    src="assets/images/icons/icon_user_check.svg"
                    alt="User Check SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">Expert Team Members</h3>
                  <p className="mb-0">
                    We take pride in assembling a <br /> diverse and highly
                    skilled.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon bg-warning-subtle">
                  <img
                    src="assets/images/icons/icon_headphone.svg"
                    alt="Headphone SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">Fastest Customer Service</h3>
                  <p className="mb-0">
                    We pride ourselves on providing the fastest customer service
                    industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon bg-secondary-subtle">
                  <img
                    src="assets/images/icons/icon_dollar.svg"
                    alt="Dollar SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">reasonable Pricing</h3>
                  <p className="mb-0">
                    We believe in providing reasonable pricing that offers
                    exceptional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Policy;
