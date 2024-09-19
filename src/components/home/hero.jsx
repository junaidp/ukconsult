import React from "react";

const Hero = ({ setOpen }) => {
  let [array, setArray] = React.useState([
    {
      selected: true,
      id: 1,
      name: "25+ global Projects",
      description:
        "Conducted over 25 Internal Control and Finance Process Improvement engagements across more than 5 countries.",
    },
    {
      selected: false,
      id: 2,
      name: "Sectoral expertise",
      description:
        "Specialist in complex industries, including Telecom and Utilities.",
    },
    {
      selected: false,
      id: 3,
      name: "SOX Leadership",
      description:
        "Principal Consultant has extensive experience heading the Internal Control department of a European multinational telecom company and the world's largest resource company.",
    },
    {
      selected: false,
      id: 4,
      name: "Reliable Partner",
      description:
        "Successfully implemented an Internal Control Framework in the world's largest desalination and solar power company.",
    },
  ]);

  function handleClick(id) {
    setArray((pre) =>
      pre?.map((item) =>
        item?.id === id
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  }

  return (
    <div>
      <header className="overflow-x-hidden">
        <div className="row">
          <div className="col-lg-6  home-hero">
            <h1 className="main-heading ">
              <span className="no-wrap">Sarbanes Oxley (SOX)</span>{" "}
              Implementation Specialists
            </h1>
            <h4 className="fs-4 my-4">
              Big 4 Expertise at a Fraction of the Cost.
            </h4>
            <p className="text-secondary fs-5">
              SOX compliance is coming to the UK. Trust our experts, with global
              experience, to guide your company to full compliance efficiently
              and effectively.
            </p>
            <button
              className="btn btn-primary btn-shadow px-4 py-2 mt-4"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => setOpen(true)}
            >
              SCHEDULE A CONSULTATION
            </button>
          </div>
          <div className="col-lg-6 home-hero-img">
            <div className="text-center">
              <img src="assets/images/header-img.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </header>
      <section className="pb-4">
        <div className="container-fluid p-0">
          <img src="assets/images/divider.png" className="img-fluid w-100" />
        </div>
        <h2
          className="fw-normal w-lg-50 text-center mx-auto my-5 home-hero-quote"
        >
          We have the right people with the right expertise and a single vision
          – <span className="fw-bold">your success.</span>
        </h2>
        <div className="container-fluid p-0 divider-bottom">
          <img src="assets/images/divider.png" className="img-fluid w-100" />
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="border-left-theme ps-3 fw-bold">
                Why Partner with Us?
              </h4>
              <h2 className="main-heading my-4">
                Global Experience in SOX Compliance
              </h2>
              <p className="text-secondary fs-20">
                Our team has been entrenched in SOX since its inception. We have
                a deep understanding of the complexity and expectations of
                planning and delivering SOX readiness and compliance services.
              </p>
            </div>
            <div className="col-lg-12 font-inter">
              <div className="row">
                <div className="col-lg-6">
                  <ul
                    className="nav nav-tabs w-lg-50"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${
                          array?.find((item) => item?.selected === true)?.id ===
                          1
                            ? "active"
                            : ""
                        }`}
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected="true"
                        onClick={() => handleClick(1)}
                      >
                        25+ global Projects
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${
                          array?.find((item) => item?.selected === true)?.id ===
                          3
                            ? "active"
                            : ""
                        }`}
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="profile-tab-pane"
                        aria-selected="false"
                        onClick={() => handleClick(3)}
                      >
                        SOX Leadership
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${
                          array?.find((item) => item?.selected === true)?.id ===
                          2
                            ? "active"
                            : ""
                        }`}
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="contact-tab-pane"
                        aria-selected="false"
                        onClick={() => handleClick(2)}
                      >
                        Sectoral expertise
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${
                          array?.find((item) => item?.selected === true)?.id ===
                          4
                            ? "active"
                            : ""
                        }`}
                        id="disabled-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#disabled-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="disabled-tab-pane"
                        aria-selected="false"
                        onClick={() => handleClick(4)}
                      >
                        Reliable Partner
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <div className="row justify-content-center partner-box">
                    <div className="col-md-10">
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="home-tab-pane"
                          tabIndex="0"
                        >
                          <div className="nav-card rounded">
                            <div className="nav-card-header py-3 ps-3">
                              <h2 className="text-white">
                                {array?.find((item) => item?.selected)?.name}
                              </h2>
                            </div>
                            <div className="p-5 fs-20">
                              {
                                array?.find((item) => item?.selected === true)
                                  ?.description
                              }
                            </div>
                          </div>
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
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="border-left-theme ps-3 fw-bold">Our Services</h4>
              <h2 className="main-heading my-4">
                Hyphen SOX Compliance Services
              </h2>
              <p className="text-secondary fs-20">
                The complexity and volume of SOX compliance requirements can
                place significant stress on your internal teams. Partner with
                Hyphen to manage risk and streamline your SOX compliance program
              </p>
            </div>
            <div className="col-12">
              <div className="row mt-5">
                <div className="col-lg-6">
                  <div className="mb-4">
                    <h5 className="fw-bold text-primary fs-20">
                      Full Implementation
                    </h5>
                    <p className="text-secondary">
                      Our Full Implementation service offers a comprehensive
                      solution where our experienced team fully integrates with
                      your organization to design, implement, and manage your
                      entire SOX framework. From initial assessment to final
                      execution, we handle every aspect, ensuring that your
                      company not only meets compliance standards but also
                      builds a robust internal control system that enhances
                      overall business performance.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-4">
                    <h5 className="fw-bold text-primary fs-20">Hybrid Model</h5>
                    <p className="text-secondary">
                      The Hybrid Model gives you the flexibility to take control
                      of your SOX compliance with our industry-specific Risk
                      Control Matrix (RCM) as your guide. This model is perfect
                      for companies that prefer a hands-on approach, allowing
                      your team to implement the framework at your own pace. And
                      if you need support along the way, our consultants are
                      available on an hourly basis to assist with any challenges
                      you encounter.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-4">
                    <h5 className="fw-bold text-primary fs-20">
                      AI Implementation
                    </h5>
                    <p className="text-secondary">
                      AI-Driven Implementation for Budget-Conscious
                      Organizations. You will gain access to our in-house AI
                      Model, which will generate process flows and Risk Control
                      Matrixes based on user input.
                    </p>
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

export default Hero;
