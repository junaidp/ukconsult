import React from "react";

const Trending = () => {
  return (
    <div>
      <section className="py-5 bg-light">
        <div className="container">
        <div class="row">
                <h2 class="mt-4 treding-heading text-theme">
                    Trending
                </h2>
                <h2 class="treding-headin-2">
                    Insights & Resources
                </h2>
            </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="bg-white rounded">
                <img
                  src="assets/images/blog-1.png"
                  className="img-fluid w-100"
                />
                <div className="p-3">
                <p className="my-3 blog-date">May 9, 2023</p>
                <h5 className="my-3 fw-bold">
                  Latest Trends in SOX Compliance
                </h5>
                <p>
                  Discover the evolving landscape of SOX compliance in the UK
                  and how your company can stay ahead.
                </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-white rounded">
                <img
                  src="assets/images/blog-2.png"
                  className="img-fluid w-100"
                />
                <div className="p-3">
                <p className="my-3 blog-date">May 9, 2023</p>
                <h5 className="my-3 fw-bold">
                  Best Practices for Effective Risk Management
                </h5>
                <p>
                  Discussing the shift from realistic designs to minimalistic,
                  flat designs.
                </p> 
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-white rounded">
                <img
                  src="assets/images/blog-3.png"
                  className="img-fluid w-100"
                />
                <div className="p-3">
                <p className="my-3 blog-date">May 9, 2023</p>
                <h5 className="my-3 fw-bold">Expert Opinions</h5>
                <p>
                  Exploring the significance of putting the user first in IT
                  projects
                </p>
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-5">
              <button className="btn btn-primary px-4 py-2">Load more</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trending;
