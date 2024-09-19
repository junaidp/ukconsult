import React from "react";

const Industry = () => {
  let [currentButton, setCurrentButton] = React.useState(
    "Manufacturing Industry"
  );
  let buttonArray = [
    "Manufacturing Industry",
    "Telecom Industry",
    "Energy",
    "Utilities",
    "Healthcare",
    "Real Estate",
    "Basic Materials",
    "Technology",
  ];
  let array = [
    {
      heading: "Manufacturing Industry",
      subHeading: "Driving Efficiency Through Tailored SOX Compliance",
      description:
        "Hyphen Consulting provides tailored SOX compliance solutions for manufacturing firms, ensuring that your operational processes align with financial reporting requirements, enhancing efficiency, and minimizing risks.",
      blogs: [
        {
          title:
            "Optimizing Financial Controls in the Manufacturing Sector A deep dive into the challenges and solutions for SOX compliance in manufacturing.",
          description:
            "Case Study: Streamlining Compliance for a Global Manufacturer Learn how Hyphen Consulting helped a leading manufacturer achieve SOX compliance while improving operational efficiency.",
        },
      ],
    },
    {
      heading: "Telecom Industry",
      subHeading: "Ensuring Regulatory Compliance in a Rapidly Evolving Sector",
      description:
        "With deep expertise in the telecom sector, our team understands the unique regulatory and compliance challenges. We help telecom companies establish robust internal controls to meet SOX requirements while maintaining operational agility.",
      blogs: [
        {
          title:
            "Navigating SOX Compliance in the Telecom Industry Explore the key considerations for telecom companies in maintaining SOX compliance.",
          description:
            "Enhancing Internal Controls for a Major Telecom Provider Discover how we supported a telecom giant in strengthening its compliance framework.",
        },
      ],
    },
    {
      heading: "Energy",
      subHeading: "Powering Compliance with Industry-Specific Solutions",
      description:
        "Energy companies operate in a dynamic and highly regulated environment. We offer SOX compliance services that address the specific risks and complexities of the energy sector, ensuring your controls are both effective and efficient.",
      blogs: [
        {
          title:
            "Risk Management in the Energy Sector: A SOX Perspective Understanding the role of SOX compliance in managing risks for energy companies.",
          description:
            " Whitepaper: Compliance Best Practices for the Energy Industry Download our comprehensive guide to SOX compliance in the energy sector.",
        },
      ],
    },
    {
      heading: "Utilities",
      subHeading:
        "Reliable Compliance for Consistent and Transparent Operations",
      description:
        "Hyphen Consulting’s experience in the utilities sector enables us to provide customized SOX compliance solutions that address the sector’s unique operational and regulatory challenges, ensuring consistent and reliable financial reporting.",
      blogs: [
        {
          title:
            "Effective SOX Implementation in Utilities How utilities can streamline their compliance processes and improve financial reporting.",

          description:
            "Case Study: Strengthening Compliance for a Leading Utility Company Read about our approach to enhancing compliance for a top player in the utilities sector.",
        },
      ],
    },
    {
      heading: "Healthcare",
      subHeading: "Safeguarding Financial Integrity in Healthcare Systems",
      description:
        "In the healthcare industry, compliance is critical. We help healthcare organizations navigate the complexities of SOX, ensuring that financial controls are robust and in line with industry standards, without compromising on patient care.",
      blogs: [
        {
          title:
            "SOX Compliance in Healthcare: Protecting Financial Integrity The importance of strong financial controls in maintaining the integrity of healthcare organizations.",
          description:
            "Whitepaper: Building a Resilient Compliance Framework in Healthcare Our guide to achieving and maintaining SOX compliance in the healthcare sector.",
        },
      ],
    },
    {
      heading: "Real Estate",
      subHeading: "Building Robust Financial Controls for Real Estate Firms",
      description:
        "Real estate companies face unique challenges in financial reporting and compliance. Our tailored SOX services help you implement and maintain effective internal controls that support your business’s growth and stability.",
      blogs: [
        {
          title:
            "Financial Reporting Challenges in Real Estate Understanding and overcoming the unique SOX compliance challenges faced by real estate firms.",
          description:
            "Case Study: Enhancing Financial Controls for a Real Estate Developer Explore how we helped a major developer achieve SOX compliance and improve financial processes.",
        },
      ],
    },
    {
      heading: "Basic Materials",
      subHeading:
        "Streamlining Processes for Stronger Compliance in Basic Materials",
      description:
        "For companies in the basic materials sector, Hyphen Consulting offers SOX compliance services that focus on streamlining operations, reducing risks, and ensuring that your financial reporting is accurate and compliant with regulatory standards.",
      blogs: [
        {
          title:
            "Streamlining SOX Compliance in the Basic Materials Industry Key strategies for achieving SOX compliance in the basic materials sector.",
          description:
            "Case Study: SOX Compliance Transformation in Basic Materials Read how we supported a leading company in the basic materials industry through a full SOX transformation.",
        },
      ],
    },
    {
      heading: "Technology",
      subHeading: "Agile SOX Solutions for the Fast-Paced Tech Industry",
      description:
        "The fast-paced technology sector requires agile and robust compliance solutions. We provide SOX services designed to help tech companies manage risks and maintain accurate financial reporting amidst rapid growth and innovation.",
      blogs: [
        {
          title:
            "Navigating SOX Compliance in the Tech Industry The role of SOX in supporting growth and innovation in technology companies.",
          description:
            "Whitepaper: Leveraging SOX for Competitive Advantage in Tech Download our whitepaper on how tech companies can use SOX compliance to their advantage",
        },
      ],
    },
  ];

  let [selectedItem, setSelectedItem] = React.useState({});

  React.useEffect(() => {
    setSelectedItem(array?.find((items) => items?.heading === currentButton));
  }, [currentButton]);

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
                {buttonArray?.map((button, ind) => {
                  return (
                    <li className="nav-item" role="presentation" key={ind}>
                      <button
                        className={`nav-link ${
                          currentButton === button ? "active" : ""
                        }`}
                        id="newHomeTab"
                        data-bs-toggle="tab"
                        data-bs-target="#newHomeTabPane"
                        type="button"
                        role="tab"
                        aria-controls="newHomeTabPane"
                        aria-selected="true"
                        onClick={() => setCurrentButton(button)}
                      >
                        {button}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 overflow-x-hidden">
          <div className="tab-content" id="newTabContent">
            <div className="tab-pane fade show active" tabIndex="0">
              <div className="bg-black">
                <div className="row p-5 justify-content-between">
                  <div className="col-lg-6 ms-lg-5 text-white mt-4">
                    <h2 className="fs-1 fw-bold text-white">
                      {selectedItem?.heading}
                    </h2>
                    <h4 className="my-3 text-white">
                      {selectedItem?.subHeading}
                    </h4>
                    <p className="lh-38">{selectedItem?.description}</p>
                    <div className="py-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs */}
      <div>
        <section className="py-5 bg-light">
          <div className="container">
            <div class="row">
              <h2 class="mt-4 treding-heading text-theme">Trending</h2>
              <h2 class="treding-headin-2">Insights & Resources</h2>
            </div>
            <div className="row mt-5">
              {selectedItem?.blogs?.map((blog, ind) => {
                return (
                  <div className="col-lg-4" key={ind}>
                    <div className="bg-white rounded">
                      <img
                        src="assets/images/blog-1.png"
                        className="img-fluid w-100"
                      />
                      <div className="p-3">
                        <p className="my-3 blog-date">May 9, 2023</p>
                        <h5 className="my-3 fw-bold">{blog?.title}</h5>
                        <p>{blog?.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="col-12 text-center mt-5">
                <button className="btn btn-primary px-4 py-2">Load more</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Industry;
