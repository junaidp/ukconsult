import React from "react";

const Approach = () => {
  return (
    <div>
      <section className="py-5 mt-5">
        <div className="container-fluid px-lg-4">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="main-heading underline-approach">Our Approach</h1>
              <h2 className="px-lg-5">A Structured Path to SOX Compliance</h2>
            </div>
          </div>
          <div className="row mt-4 justify-content-center">
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-3">
              <div className="approach-card pb-3 px-3 pt-5 h-100 shadow">
                <h2 className="text-black fw-bold"><span className="border-text">Plan</span></h2>
                <p>
                  We start by forming a Project Steering Committee, mapping
                  business processes with financial statements, and finalizing
                  process owners. Stakeholders are briefed, and detailed project
                  timelines are set.
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-3">
              <div className="approach-card pb-3 px-3 pt-5 h-100 shadow">
                <h2 className="text-black fw-bold"><span className="border-text">Assess As Is</span></h2>
                <p>
                  We document current business processes, map objectives, risks,
                  and controls, assign control ownership, and identify any
                  control gaps.
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-3">
              <div className="approach-card pb-3 px-3 pt-5 h-100 shadow">
                <h2 className="text-black fw-bold"><span className="border-text">Bridge the Gap</span></h2>
                <p>
                  We recommend additional controls to address gaps, communicate
                  with stakeholders, and present solutions to the Project
                  Steering Committee.
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-3">
              <div className="approach-card pb-3 px-3 pt-5 h-100 shadow">
                <h2 className="text-black fw-bold"><span className="border-text">Implement</span></h2>
                <p>
                  Detailed action steps are established, performance is
                  monitored, and implementation effectiveness is assessed.
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-3">
              <div className="approach-card pb-3 px-3 pt-5 h-100 shadow">
                <h2 className="text-black fw-bold"><span className="border-text">Test</span></h2>
                <p>
                  We recommend additional controls to address gaps, communicate
                  with stakeholders, and present solutions to the Project
                  Steering Committee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;
