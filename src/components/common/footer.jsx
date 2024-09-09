import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="mt-3">
                <a href="#">
                  <img
                    src="assets/images/footer-icon/X Logo.png"
                    className="me-2"
                  />
                </a>
                <a href="#">
                  <img
                    src="assets/images/footer-icon/Logo Instagram.png"
                    className="me-2"
                  />
                </a>
                <a href="#">
                  <img
                    src="assets/images/footer-icon/Logo YouTube.png"
                    className="me-2"
                  />
                </a>
                <a href="#">
                  <img
                    src="assets/images/footer-icon/LinkedIn.png"
                    className="me-2"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div>
                <p className="fw-bold">Use cases</p>
              </div>
              <ul className="mt-3">
                <li>
                  <a href="#">UI design</a>
                </li>
                <li>
                  <a href="#">UX design</a>
                </li>
                <li>
                  <a href="#">Wireframing</a>
                </li>
                <li>
                  <a href="#">Diagramming</a>
                </li>
                <li>
                  <a href="#">Brainstorming</a>
                </li>
                <li>
                  <a href="#">Online whiteboard</a>
                </li>
                <li>
                  <a href="#">Team collaboration</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <div>
                <p className="fw-bold">Explore</p>
              </div>
              <ul className="mt-3">
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Prototyping</a>
                </li>
                <li>
                  <a href="#">Development features</a>
                </li>
                <li>
                  <a href="#">Design systems</a>
                </li>
                <li>
                  <a href="#">Collaboration features</a>
                </li>
                <li>
                  <a href="#">Design process</a>
                </li>
                <li>
                  <a href="#">FigJam</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <div>
                <p className="fw-bold">Resources</p>
              </div>
              <ul className="mt-3">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Best practices</a>
                </li>
                <li>
                  <a href="#">Colors</a>
                </li>
                <li>
                  <a href="#">Color wheel</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
                <li>
                  <a href="#">Resource library</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
