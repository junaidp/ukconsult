import React from "react";

const Industry = () => {
  return (
    <div>
      <section>
        <div className="bg-light">
          <div className="container">
            <div className="row py-4 indus justify-content-center align-items-center industries-tabs">
              <ul
                id="newTabList"
                role="tablist"
                className="d-flex justify-center nav nav-tabs"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="newHomeTab"
                    data-bs-toggle="tab"
                    data-bs-target="#newHomeTabPane"
                    type="button"
                    role="tab"
                    aria-controls="newHomeTabPane"
                    aria-selected="true"
                  >
                    Manufacturing
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="newProfileTab"
                    data-bs-toggle="tab"
                    data-bs-target="#newProfileTabPane"
                    type="button"
                    role="tab"
                    aria-controls="newProfileTabPane"
                    aria-selected="false"
                  >
                    Telecom
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="newContactTab"
                    data-bs-toggle="tab"
                    data-bs-target="#newContactTabPane"
                    type="button"
                    role="tab"
                    aria-controls="newContactTabPane"
                    aria-selected="false"
                  >
                    Energy
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="newDisabledTab"
                    data-bs-toggle="tab"
                    data-bs-target="#newDisabledTabPane"
                    type="button"
                    role="tab"
                    aria-controls="newDisabledTabPane"
                    aria-selected="false"
                  >
                    Utilities
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="healthcare-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#healthcare-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="healthcare-tab-pane"
                    aria-selected="true"
                  >
                    Healthcare
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="real-estate-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#real-estate-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="real-estate-tab-pane"
                    aria-selected="false"
                  >
                    Real Estate
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="basic-materials-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#basic-materials-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="basic-materials-tab-pane"
                    aria-selected="false"
                  >
                    Basic Materials
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="technology-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#technology-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="technology-tab-pane"
                    aria-selected="false"
                  >
                    Technology
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="tab-content" id="newTabContent">
            <div
              className="tab-pane fade show active"
              id="newHomeTabPane"
              role="tabpanel"
              aria-labelledby="newHomeTab"
              tabindex="0"
            >
              <div className="bg-black">
                <div className="row p-5 justify-content-between">
                  <div className="col-lg-6 ms-lg-5 text-white mt-4">
                    <h2 className="fs-1 fw-bold text-white">
                      Manufacturing Industry
                    </h2>
                    <h4 className="my-3 text-white">
                      Optimizing Operations and Compliance in Manufacturing
                    </h4>
                    <p className="lh-38">
                      Manufacturing companies face unique challenges in
                      maintaining compliance and optimizing processes. Our
                      services focus on SOX compliance, process efficiency, and
                      operational risk management to help manufacturers
                      streamline operations and mitigate risks.
                    </p>
                    <div className="py-4"></div>
                  </div>
                  <div className="col-lg-5 text-end">
                    <img
                      src="assets/images/categories-image-manufacturing.png"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="newProfileTabPane"
              role="tabpanel"
              aria-labelledby="newProfileTab"
              tabindex="0"
            >
              <div className="bg-black">
                <div className="row p-5 justify-content-between">
                  <div className="col-lg-6 ms-lg-5 text-white mt-4">
                    <h2 className="fs-1 fw-bold text-white">
                      Manufacturing Industry
                    </h2>
                    <h4 className="my-3 text-white">
                      Optimizing Operations and Compliance in Manufacturing
                    </h4>
                    <p className="lh-38">
                      Manufacturing companies face unique challenges in
                      maintaining compliance and optimizing processes. Our
                      services focus on SOX compliance, process efficiency, and
                      operational risk management to help manufacturers
                      streamline operations and mitigate risks.
                    </p>
                    <div className="py-4"></div>
                  </div>
                  <div className="col-lg-5 text-end">
                    <img
                      src="assets/images/categories-image-manufacturing.png"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="newContactTabPane"
              role="tabpanel"
              aria-labelledby="newContactTab"
              tabindex="0"
            >
              <div className="bg-black">
                <div className="row p-5 justify-content-between">
                  <div className="col-lg-6 ms-lg-5 text-white mt-4">
                    <h2 className="fs-1 fw-bold text-white">
                      Manufacturing Industry
                    </h2>
                    <h4 className="my-3 text-white">
                      Optimizing Operations and Compliance in Manufacturing
                    </h4>
                    <p className="lh-38">
                      Manufacturing companies face unique challenges in
                      maintaining compliance and optimizing processes. Our
                      services focus on SOX compliance, process efficiency, and
                      operational risk management to help manufacturers
                      streamline operations and mitigate risks.
                    </p>
                    <div className="py-4"></div>
                  </div>
                  <div className="col-lg-5 text-end">
                    <img
                      src="assets/images/categories-image-manufacturing.png"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="newDisabledTabPane"
              role="tabpanel"
              aria-labelledby="newDisabledTab"
              tabindex="0"
            >
              <div className="bg-black">
                <div className="row p-5 justify-content-between">
                  <div className="col-lg-6 ms-lg-5 text-white mt-4">
                    <h2 className="fs-1 fw-bold text-white">
                      Manufacturing Industry
                    </h2>
                    <h4 className="my-3 text-white">
                      Optimizing Operations and Compliance in Manufacturing
                    </h4>
                    <p className="lh-38">
                      Manufacturing companies face unique challenges in
                      maintaining compliance and optimizing processes. Our
                      services focus on SOX compliance, process efficiency, and
                      operational risk management to help manufacturers
                      streamline operations and mitigate risks.
                    </p>
                    <div className="py-4"></div>
                  </div>
                  <div className="col-lg-5 text-end">
                    <img
                      src="assets/images/categories-image-manufacturing.png"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade show"
              id="healthcare-tab-pane"
              role="tabpanel"
              aria-labelledby="healthcare-tab"
              tabindex="0"
            >
              <div className="bg-black">
                <div className="row p-5 justify-content-between">
                  <div className="col-lg-6 ms-lg-5 text-white mt-4">
                    <h2 className="fs-1 fw-bold text-white">
                      Manufacturing Industry
                    </h2>
                    <h4 className="my-3 text-white">
                      Optimizing Operations and Compliance in Manufacturing
                    </h4>
                    <p className="lh-38">
                      Manufacturing companies face unique challenges in
                      maintaining compliance and optimizing processes. Our
                      services focus on SOX compliance, process efficiency, and
                      operational risk management to help manufacturers
                      streamline operations and mitigate risks.
                    </p>
                    <div className="py-4"></div>
                  </div>
                  <div className="col-lg-5 text-end">
                    <img
                      src="assets/images/categories-image-manufacturing.png"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="real-estate-tab-pane"
              role="tabpanel"
              aria-labelledby="real-estate-tab"
              tabindex="0"
            >
              <div className="bg-black">
                <div className="row p-5 justify-content-between">
                  <div className="col-lg-6 ms-lg-5 text-white mt-4">
                    <h2 className="fs-1 fw-bold text-white">
                      Manufacturing Industry
                    </h2>
                    <h4 className="my-3 text-white">
                      Optimizing Operations and Compliance in Manufacturing
                    </h4>
                    <p className="lh-38">
                      Manufacturing companies face unique challenges in
                      maintaining compliance and optimizing processes. Our
                      services focus on SOX compliance, process efficiency, and
                      operational risk management to help manufacturers
                      streamline operations and mitigate risks.
                    </p>
                    <div className="py-4"></div>
                  </div>
                  <div className="col-lg-5 text-end">
                    <img
                      src="assets/images/categories-image-manufacturing.png"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="basic-materials-tab-pane"
              role="tabpanel"
              aria-labelledby="basic-materials-tab"
              tabindex="0"
            >
              <div className="bg-black">
                <div className="row p-5 justify-content-between">
                  <div className="col-lg-6 ms-lg-5 text-white mt-4">
                    <h2 className="fs-1 fw-bold text-white">
                      Manufacturing Industry
                    </h2>
                    <h4 className="my-3 text-white">
                      Optimizing Operations and Compliance in Manufacturing
                    </h4>
                    <p className="lh-38">
                      Manufacturing companies face unique challenges in
                      maintaining compliance and optimizing processes. Our
                      services focus on SOX compliance, process efficiency, and
                      operational risk management to help manufacturers
                      streamline operations and mitigate risks.
                    </p>
                    <div className="py-4"></div>
                  </div>
                  <div className="col-lg-5 text-end">
                    <img
                      src="assets/images/categories-image-manufacturing.png"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="technology-tab-pane"
              role="tabpanel"
              aria-labelledby="technology-tab"
              tabindex="0"
            >
              ...
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industry;
