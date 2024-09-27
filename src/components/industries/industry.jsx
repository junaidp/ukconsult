import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// Utility function to strip HTML tags
const stripHtml = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

const Industry = () => {
  const navigate = useNavigate();
  const [currentButton, setCurrentButton] = useState("Manufacturing Industry");
  const [selectedItem, setSelectedItem] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = React.useState(false);

  // Button array
  const buttonArray = [
    "Manufacturing Industry",
    "Telecom Industry",
    "Energy",
    "Utilities",
    "Healthcare",
    "Real Estate",
    "Basic Materials",
    "Technology",
  ];

  // Static array (without blogs)
  const array = [
    {
      heading: "Manufacturing Industry",
      subHeading: "Driving Efficiency Through Tailored SOX Compliance",
      description:
        "Hyphen Consulting provides tailored SOX compliance solutions for manufacturing firms, ensuring that your operational processes align with financial reporting requirements, enhancing efficiency, and minimizing risks.",
    },
    {
      heading: "Telecom Industry",
      subHeading: "Ensuring Regulatory Compliance in a Rapidly Evolving Sector",
      description:
        "With deep expertise in the telecom sector, our team understands the unique regulatory and compliance challenges. We help telecom companies establish robust internal controls to meet SOX requirements while maintaining operational agility.",
    },
    {
      heading: "Energy",
      subHeading: "Powering Compliance with Industry-Specific Solutions",
      description:
        "Energy companies operate in a dynamic and highly regulated environment. We offer SOX compliance services that address the specific risks and complexities of the energy sector, ensuring your controls are both effective and efficient.",
    },
    {
      heading: "Utilities",
      subHeading:
        "Reliable Compliance for Consistent and Transparent Operations",
      description:
        "Hyphen Consulting’s experience in the utilities sector enables us to provide customized SOX compliance solutions that address the sector’s unique operational and regulatory challenges, ensuring consistent and reliable financial reporting.",
    },
    {
      heading: "Healthcare",
      subHeading: "Safeguarding Financial Integrity in Healthcare Systems",
      description:
        "In the healthcare industry, compliance is critical. We help healthcare organizations navigate the complexities of SOX, ensuring that financial controls are robust and in line with industry standards, without compromising on patient care.",
    },
    {
      heading: "Real Estate",
      subHeading: "Building Robust Financial Controls for Real Estate Firms",
      description:
        "Real estate companies face unique challenges in financial reporting and compliance. Our tailored SOX services help you implement and maintain effective internal controls that support your business’s growth and stability.",
    },
    {
      heading: "Basic Materials",
      subHeading:
        "Streamlining Processes for Stronger Compliance in Basic Materials",
      description:
        "For companies in the basic materials sector, Hyphen Consulting offers SOX compliance services that focus on streamlining operations, reducing risks, and ensuring that your financial reporting is accurate and compliant with regulatory standards.",
    },
    {
      heading: "Technology",
      subHeading: "Agile SOX Solutions for the Fast-Paced Tech Industry",
      description:
        "The fast-paced technology sector requires agile and robust compliance solutions. We provide SOX services designed to help tech companies manage risks and maintain accurate financial reporting amidst rapid growth and innovation.",
    },
  ];

  // Fetch blogs based on the current industry
  const fetchBlogs = async (category) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://hyphen-back.vercel.app/api/v1/blogs?category=${category}`
      );
      const data = await response.json();
      setBlogs(data.blogs);
      setLoading(false);
    } catch (error) {
      toast.error("Error fetching blogs");
      setLoading(false);
    }
  };

  // Update selected item and fetch blogs when the category changes
  useEffect(() => {
    const selected = array.find((item) => item.heading === currentButton);
    setSelectedItem(selected);
    fetchBlogs(currentButton);
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
                {buttonArray.map((button, ind) => (
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
                ))}
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
            <div className="row">
              <h2 className="mt-4 treding-heading text-theme">Trending</h2>
              <h2 className="treding-headin-2">Insights & Resources</h2>
            </div>
            <div className="row mt-5">
              {loading ? (
                <h1>Loading....</h1>
              ) : blogs?.length === 0 ? (
                <h1>No Blogs To Show In This Category</h1>
              ) : (
                blogs?.map((blog, ind) => (
                  <div
                    className="col-lg-4 pointer"
                    key={ind}
                    onClick={() => navigate(`/blog?id=${blog?._id}`)}
                  >
                    <div className="bg-white img-rounded">
                      <img src={blog?.image} className="img-fluid w-100" />
                      <div className="p-3">
                        <p className="my-3 blog-date">
                          {moment.utc(blog.updatedAt).format("MMMM Do YYYY")}
                        </p>
                        <h5 className="my-3 fw-bold">{blog?.title}</h5>
                        {stripHtml(blog?.description).length > 200
                          ? `${stripHtml(blog?.description).slice(0, 200)}...`
                          : parse(blog?.description)}{" "}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Industry;
