import React from "react";

const About = () => {
  return (
    <>
      <section className="intro_about_section pb-5">
        <div className="container">
          <div className="heading_block mb-0">
            <div className="row justify-content-lg-between">
              <div className="col-lg-5">
                <div className="heading_focus_text">
                  About
                  <span className="badge bg-secondary text-white">Echo 🙂</span>
                </div>
                <h2 className="heading_text mb-0">
                  Dedicated to driving innovation and success through tailored
                  digital solutions.{" "}
                </h2>
              </div>
              <div className="col-lg-6">
                <p className="heading_description mb-0">
                  At Echo Technologies, your success is our priority. We are
                  thrilled to be your partner in innovation, offering
                  cutting-edge solutions. Our mission is to empower your
                  business with technology that drives growth and success.
                  Explore our services to discover how we can turn your ideas
                  into reality. Let's build the future together!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="grid-22">
            <div className="iconbox_block bg-light">
              <div className="iconbox_icon bg-warning-subtle">
                <img
                  src="assets/images/icons/icon_clock.svg"
                  alt="Clock SVG Icon"
                />
              </div>
              <div className="">
                <h3 className="iconbox_title">Our History</h3>
                <p className="mb-0 ">
                  Since 2020 we have been a visionary and a reliable software
                  engineering partner for world-class brands.
                </p>
              </div>
            </div>
            <div className="iconbox_block bg-light">
              <div className="iconbox_icon bg-warning-subtle">
                <img
                  src="assets/images/icons/icon_dart_board_2.svg"
                  alt="Dart Board SVG Icon"
                />
              </div>
              <div className="">
                <h3 className="iconbox_title">Our Mission</h3>
                <p className="mb-0">
                  At Echo Technologies, our mission is to empower businesses
                  with innovative, reliable, and tailored tech solutions that
                  drive growth, enhance efficiency, and foster success in the
                  digital landscape.
                </p>
              </div>
            </div>
            <div className="iconbox_block bg-light">
              <div className="iconbox_icon bg-secondary-subtle">
                <img
                  src="assets/images/icons/icon_target.svg"
                  alt="Target SVG Icon"
                />
              </div>
              <div className="">
                <h3 className="iconbox_title">Our Vision</h3>
                <p className="mb-0">
                  To be a global leader in technology solutions, recognized for
                  our innovation, excellence, and commitment to empowering
                  businesses to thrive in the digital age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
