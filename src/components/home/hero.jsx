import React from "react";

const Hero = () => {
  return (
    <div>
      <header className="">
        <div className="row pt-5 ">
          <div className="col-lg-6" style={{ paddingLeft: '140px' }}>
            <h1 className="main-heading">
              Sarbanes Oxley (SOX) Implementation Specialists
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
            >
              Schedule a Consultation
            </button>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <img src="assets/images/header-img.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </header>
      <section class="pb-4">
        <div class="container-fluid p-0">
          <img src="assets/images/divider.png" class="img-fluid w-100" />
        </div>
        <h2 class="fw-normal w-lg-50 text-center mx-auto my-5">
          We have the right people with the right expertise and a single vision – <span class="fw-bold">your success.</span>
        </h2>
        <div class="container-fluid p-0 divider-bottom">
          <img src="assets/images/divider.png" class="img-fluid w-100" />
        </div>
      </section>
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h4 class="border-left-theme ps-3 fw-bold">Why Partner with Us?</h4>
              <h2 class="main-heading my-4">
                Global Experience in SOX Compliance
              </h2>
              <p class="text-secondary fs-20">
                Our team has been entrenched in SOX since its inception. We have a deep understanding of the complexity and
                expectations of planning and delivering SOX readiness and compliance services.
              </p>
            </div>
            <div class="col-lg-12 font-inter">
              <div class="row">
                <div class="col-lg-6">
                  <ul class="nav nav-tabs w-lg-50" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                        type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">25+ global
                        Projects</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                        type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">SOX
                        Leadership</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                        type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Sectoral
                        Expertise</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane"
                        type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Reliable
                        Partner</button>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <div class="row justify-content-center">
                    <div class="col-md-10">
                      <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                          tabindex="0">
                          <div class="nav-card rounded">
                            <div class="nav-card-header py-3 ps-3">
                              <h2 class="text-white">
                                25+ global Projects
                              </h2>
                            </div>
                            <div class="p-5 fs-20">
                              Consultants having extensive experience heading the Internal Control department of a
                              <b>European multinational</b> telecom company and the <b>world's largest resource company.</b>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                          tabindex="0">
                          <div class="nav-card rounded">
                            <div class="nav-card-header py-3 ps-3">
                              <h5 class="text-white">
                                SOX Leadership
                              </h5>
                            </div>
                            <div class="p-5 fs-20">
                              Consultants having extensive experience heading the Internal Control department of a
                              <b>European multinational</b> telecom company and the <b>world's largest resource company.</b>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab"
                          tabindex="0">
                          <div class="nav-card rounded">
                            <div class="nav-card-header py-3 ps-3">
                              <h5 class="text-white">
                                Sectoral Expertise
                              </h5>
                            </div>
                            <div class="p-5 fs-20">
                              Consultants having extensive experience heading the Internal Control department of a
                              <b>European multinational</b> telecom company and the <b>world's largest resource company.</b>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab"
                          tabindex="0">
                          <div class="nav-card rounded">
                            <div class="nav-card-header py-3 ps-3">
                              <h5 class="text-white">
                                Reliable Partner
                              </h5>
                            </div>
                            <div class="p-5 fs-20">
                              Consultants having extensive experience heading the Internal Control department of a
                              <b>European multinational</b> telecom company and the <b>world's largest resource company.</b>
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
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h4 class="border-left-theme ps-3 fw-bold">Our Services</h4>
              <h2 class="main-heading my-4">
                Hyphen SOX Compliance Services
              </h2>
              <p class="text-secondary fs-20">
                The complexity and volume of SOX compliance requirements can place significant stress on your internal teams. Partner with Hyphen to manage risk and streamline your SOX compliance program
              </p>
            </div>
            <div class="col-12">
              <div class="row mt-5">
                <div class="col-lg-6">
                  <div class="mb-4">
                    <h5 class="fw-bold text-primary fs-20">
                      Full Implementation
                    </h5>
                    <p class="text-secondary">
                      Our Full Implementation service offers a comprehensive solution where our experienced team fully
                      integrates with your organization to design, implement, and manage your entire SOX framework. From
                      initial assessment to final execution, we handle every aspect, ensuring that your company not only
                      meets compliance standards but also builds a robust internal control system that enhances overall
                      business performance.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                <div class="mb-4">
                    <h5 class="fw-bold text-primary fs-20">
                      Hybrid Model
                    </h5>
                    <p class="text-secondary">
                      The Hybrid Model gives you the flexibility to take control of your SOX compliance with our
                      industry-specific Risk Control Matrix (RCM) as your guide. This model is perfect for companies that
                      prefer a hands-on approach, allowing your team to implement the framework at your own pace. And if you
                      need support along the way, our consultants are available on an hourly basis to assist with any
                      challenges you encounter.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-4">
                    <h5 class="fw-bold text-primary fs-20">
                      AI Implementation
                    </h5>
                    <p class="text-secondary">
                      AI-Driven Implementation for Budget-Conscious Organizations. You will gain access to our in-house AI Model, which will generate process flows and Risk Control Matrixes based on user input.
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
