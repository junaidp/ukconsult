import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Hero = () => {
  // Formik setup
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
      console.log("Form values:", values);

      // Simulate email sending logic (or API call)
      alert(
        `Thank you ${values.name}, your message has been submitted! We will contact you at ${values.email}.`
      );

      // Reset the form after submission
      resetForm();
    },
  });

  return (
    <div>
      <header className="sox-header bg-light">
        <div className="position-relative">
          <div className="py-30 px-100">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="fw-bold text-black sox-heading">
                  SOX Implementation <br />
                  <span className="text-theme">Routes</span>
                </h1>
                <h3 className="my-3 text-black">
                  Tailored Solutions for Every Business Need
                </h3>
                <p className="pe-lg-5 fs-5 text-black lh-22">
                  At Hyphen, we offer three distinct routes to help your
                  organization achieve seamless SOX compliance, tailored to your
                  specific needs.
                </p>
                <ul className="mt-4 text-black ls-none">
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
                <div className="row justify-content-center">
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
                          Schedule a free Consultation
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
