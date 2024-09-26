import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

const Newsletter = ({ newsletter, setOpen, industryPage }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

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

  const handleSubmit = async (values, { resetForm }) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await axios.post(
        "https://hyphen-back.vercel.app/api/v1/consultation",
        values
      );
      toast.success(
        "Thank you for expressing interest in our product! We’re thrilled to provide you with a personalised demo. Our team will be in touch shortly to schedule a demonstration tailored to your needs. Stay tuned"
      );
      resetForm();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveEmail = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    if (!isValid || email === "") {
      toast.error("Email is Incorrect");
    }

    if (isValid && email !== "") {
      if (isLoading) return;

      setIsLoading(true);
      try {
        await axios.post("https://hyphen-back.vercel.app/api/v1/newsLetter", {
          email,
        });
        toast.success(
          "Thank you for subscribing! We will notify you of new updates."
        );
        setEmail("");
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error("An error has occurred");
      }
    }
  };

  return (
    <div>
      {newsletter && (
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
                  <h2 className="text-white fw-bold m-0 ms-3">
                    Sign up for our weekly round-up and get the insights you
                    need to stay on top.
                  </h2>
                </div>
              </div>
              <div className="col-lg-5 newsletter-form">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form className="d-flex gap-2">
                      <div className="me-3 w-75">
                        <Field
                          type="email"
                          name="email"
                          placeholder="name@example.com"
                          className="form-control"
                          onChange={(event) => setEmail(event.target.value)}
                          value={email}
                        />
                      </div>
                      <button
                        className="btn btn-white px-4 lato"
                        onClick={handleSaveEmail}
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
      )}

      {newsletter && (
        <section className="bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="fw-bold">
                  {industryPage
                    ? "See How We Can Help Your Industry"
                    : "Ready to Ensure SOX Compliance?"}
                </h2>
                <p className="px-lg-5 fs-20">
                  {industryPage
                    ? "Former Big 4 Consultants, Now on Your Team"
                    : " Take the first step towards robust internal controls and   secure financial reporting."}
                </p>
                <div className="mt-4">
                  <button
                    className="btn btn-primary px-4 py-2"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setOpen(true)}
                  >
                    SCHEDULE A FREE CONSULTATION
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-5">
        <div className="container">
          <div className="row gap-95">
            <div className="col-lg-5">
              <h4 className="border-left-theme ps-3 fw-bold">
                Reach out to us
              </h4>
              <h1 className="main-heading my-4">
                Contact Us Today For A Free Consultation
              </h1>
              <p className="text-secondary mt-4 fs-20">
                Our team of experts is here to guide you through every step of
                your SOX compliance journey. Reach out to us for a no-obligation
                consultation and see how we can help your business achieve
                compliance efficiently and effectively.
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
