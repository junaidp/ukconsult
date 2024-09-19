import React from "react";

const Blogs = () => {
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 d-flex justify-content-center">
              <span className="blog">Blog</span>
            </div>
            <h1 className="mt-4 main-heading">Insights & Thought Leadership</h1>
            <p className="px-lg-5 fs-20 text-secondary">
              Stay informed with expert articles, industry updates, and in-depth
              analysis on SOX compliance and risk management.
            </p>
          </div>
          <div className="row mt-5 font-inter">
            <div className="col-lg-4">
              <div>
                <img
                  src="assets/images/blog-1.png"
                  className="img-fluid w-100"
                />
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
            <div className="col-lg-4">
              <div>
                <img
                  src="assets/images/blog-2.png"
                  className="img-fluid w-100"
                />
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
            <div className="col-lg-4">
              <div>
                <img
                  src="assets/images/blog-3.png"
                  className="img-fluid w-100"
                />
                <p className="my-3 blog-date">May 9, 2023</p>
                <h5 className="my-3 fw-bold">Expert Opinions</h5>
                <p>
                  Exploring the significance of putting the user first in IT
                  projects
                </p>
              </div>
            </div>
            <div className="col-12 text-center mt-56">
              <button className="btn btn-primary px-4 py-2">Load more</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
