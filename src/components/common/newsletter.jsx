import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Must be a valid phone number")
      .required("Phone is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .max(1000, "Must be 1000 characters or less")
      .required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (isLoading) return;
    setIsLoading(true);

    emailjs
      .send("service_ijyrlcy", "template_3za67cj", values, "Y-d1kMGQ-xCp-FA22")
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
  };

  return (
    <div>
      <section className="py-4 section-email">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="d-flex align-items-center">
                <img
                  src="assets/images/email.png"
                  className="img-fluid"
                  alt=""
                />
                <h3 className="text-white fw-bold m-0 ms-3">
                  Sign up for our weekly round-up and get the insights you need
                  to stay on top.
                </h3>
              </div>
            </div>
            <div className="col-lg-5">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="d-flex">
                    <div className="me-3">
                      <Field
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-white"
                      disabled={isLoading || isSubmitting}
                    >
                      {isLoading ? "Loading..." : "Subscribe"}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="border-left-theme ps-3">Reach out to us</h4>
              <h2 className="main-heading my-4">
                Contact Us Today For A Free Consultation
              </h2>
              <p className="text-secondary mt-4">
                Our team of experts is here to guide you through every step of
                your SOX compliance journey.
              </p>
            </div>
            <div className="col-lg-6">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="border rounded p-3">
                    <div className="mb-3">
                      <label htmlFor="Name" className="form-label">
                        Name
                      </label>
                      <Field type="text" name="name" className="form-control" />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Phone" className="form-label">
                        Phone
                      </label>
                      <Field
                        type="text"
                        name="phone"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Email" className="form-label">
                        Email address
                      </label>
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Message" className="form-label">
                        Message
                      </label>
                      <Field
                        as="textarea"
                        name="message"
                        rows="3"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="error"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-dark w-100"
                      disabled={isLoading || isSubmitting}
                    >
                      {isLoading ? "Loading..." : "Submit"}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
