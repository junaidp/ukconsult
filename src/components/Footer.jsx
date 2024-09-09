import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="site_footer footer_layout_1">
        <div
          className="content_box"
          style={{
            backgroundImage: "url('assets/images/shapes/bg_pattern_3.svg')",
          }}
        >
          <div className="container">
            <div className="diract_contact_links text-white">
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon">
                  <img
                    src="assets/images/icons/icon_mail.svg"
                    alt="Mail SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">Write to us</h3>
                  <p className="mb-0">info@echotechnologies.co</p>
                </div>
              </div>
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon">
                  <img
                    src="assets/images/icons/icon_calling.svg"
                    alt="Calling Check SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title"> Call Us </h3>
                  <p className="mb-0">+49 176 70512348</p>
                </div>
              </div>
            </div>
            <div className="footer_main_content">
              <div className="row justify-content-lg-between">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="footer_widget pe-md-3">
                    <h2 className="footer_info_title">Newsletter</h2>
                    <p>
                      Sign up to Echo weekly newsletter to get the latest
                      updates.
                    </p>
                    <form className="footer_newslatter" action="#">
                      <label for="footer_mail_input">
                        <img
                          src="assets/images/icons/icon_mail_2.svg"
                          alt="Mail SVG Icon"
                        />
                      </label>
                      <input
                        id="footer_mail_input"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                      <button type="submit">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                    <ul className="social_links_block unordered_list">
                      <li>
                        <a href="#!">Facebook</a>
                      </li>
                      <li>
                        <a href="#!">Twitter</a>
                      </li>
                      <li>
                        <a href="#!">Linkdin</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="footer_widget">
                    <h3 className="footer_info_title">Services</h3>
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <a href="#!">
                          <span className="icon_list_text">
                            Web App Developement
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <span className="icon_list_text">
                            Mobile App Development
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <span className="icon_list_text">
                            Custom Software Development
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <span className="icon_list_text">
                            Digital Marketing
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <span className="icon_list_text">
                            Analytics & Optamization
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <span className="icon_list_text">UI/UX</span>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <span className="icon_list_text">Data Security</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                  <div className="footer_widget">
                    <h3 className="footer_info_title">Information</h3>
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <a href="#about">
                          <span className="icon_list_text">About Echo</span>
                        </a>
                      </li>
                      <li>
                        <a href="#contact">
                          <span className="icon_list_text">Contact</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
