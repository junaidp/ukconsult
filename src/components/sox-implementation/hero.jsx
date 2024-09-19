import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const Hero = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Work Email is required"),
      phone: Yup.string().required("Phone is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (isLoading) return;
      setIsLoading(true);
      emailjs
        .send(
          "service_ijyrlcy",
          "template_3za67cj",
          values,
          "Y-d1kMGQ-xCp-FA22"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            resetForm();
            toast.success("Message sent successfully!");
          },
          (err) => {
            console.log("FAILED...", err);
            toast.error("Failed to send message. Please try again later.");
          }
        )
        .finally(() => {
          setIsLoading(false);
        });
    },
  });

  return (
    <div>
      <section className="py-5 pb-0 bg-light sox-header">
        <div className="container">
          <div className="sox-hero">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="fw-bold text-black sox-heading main-heading text-white no-wrap">
                  SOX Implementation <br />
                  <span className="text-theme">Routes</span>
                </h1>
                <h3 className="my-3 text-black text-white">
                  Tailored Solutions for Every Business Need
                </h3>
                <h4 className="pe-lg-5 fs-5 text-black lh-22 text-white fs-24">
                  At Hyphen, we offer three distinct routes to help your
                  organization achieve seamless SOX compliance, tailored to your
                  specific needs.
                </h4>
                <ul className="mt-4 text-black ls-none text-white p-0">
                  <li>
                    <p>
                      <span className="me-2">
                        <img
                          src="assets/images/list-check.png"
                          alt="list-check"
                        />
                      </span>
                      Full Implementation
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="me-2">
                        <img
                          src="assets/images/list-check.png"
                          alt="list-check"
                        />
                      </span>
                      Hybrid Model
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="me-2">
                        <img
                          src="assets/images/list-check.png"
                          alt="list-check"
                        />
                      </span>
                      Implementation through Artificial Intelligence
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="row justify-content-center sox-form">
                  <div className="col-8">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="border rounded bg-white p-4">
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              formik.touched.name && formik.errors.name
                                ? "is-invalid"
                                : ""
                            }`}
                            id="name"
                            {...formik.getFieldProps("name")}
                          />
                          {formik.touched.name && formik.errors.name ? (
                            <div className="invalid-feedback">
                              {formik.errors.name}
                            </div>
                          ) : null}
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Work Email
                          </label>
                          <input
                            type="email"
                            className={`form-control ${
                              formik.touched.email && formik.errors.email
                                ? "is-invalid"
                                : ""
                            }`}
                            id="email"
                            {...formik.getFieldProps("email")}
                          />
                          {formik.touched.email && formik.errors.email ? (
                            <div className="invalid-feedback">
                              {formik.errors.email}
                            </div>
                          ) : null}
                        </div>
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">
                            Phone
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              formik.touched.phone && formik.errors.phone
                                ? "is-invalid"
                                : ""
                            }`}
                            id="phone"
                            {...formik.getFieldProps("phone")}
                          />
                          {formik.touched.phone && formik.errors.phone ? (
                            <div className="invalid-feedback">
                              {formik.errors.phone}
                            </div>
                          ) : null}
                        </div>
                        <div className="mb-3">
                          <label htmlFor="message" className="form-label">
                            Message
                          </label>
                          <textarea
                            className={`form-control ${
                              formik.touched.message && formik.errors.message
                                ? "is-invalid"
                                : ""
                            }`}
                            id="message"
                            rows="2"
                            {...formik.getFieldProps("message")}
                          ></textarea>
                          {formik.touched.message && formik.errors.message ? (
                            <div className="invalid-feedback">
                              {formik.errors.message}
                            </div>
                          ) : null}
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                          SCHEDULE A FREE CONSULTATION
                        </button>
                      </div>
                    </form>
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
