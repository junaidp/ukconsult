import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import classNames from "classnames";

const Contact = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .max(50, "Must be 50 characters or less")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
      .required("Phone number is required"),
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
          toast.success(
            "Thank you for expressing interest in our services! We’re thrilled to provide you with a personalised demo. Our team will be in touch shortly to schedule a demonstration tailored to your needs. Stay tuned"
          );
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
    <>
      <section className="contact_section section_space bg-light" id="contact">
        <div className="container">
          <div className="section_space pb-0">
            <div className="row justify-content-lg-between">
              <div className="col-lg-7">
                <div className="contact_form mb-0">
                  <h3 className="details_item_info_title mb-1">
                    Send Us A Message
                  </h3>
                  <p className="mb-5">
                    Give us a chance to serve and bring magic to your brand.
                  </p>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting, errors, touched }) => (
                      <Form>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                className="input_title"
                                htmlFor="input_name"
                              >
                                Full Name
                              </label>
                              <Field
                                id="input_name"
                                className={classNames("form-control", {
                                  "border-error": errors.name && touched.name,
                                })}
                                type="text"
                                name="name"
                              />
                              <ErrorMessage
                                name="name"
                                component="div"
                                className="error"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                className="input_title"
                                htmlFor="input_email"
                              >
                                Your Email
                              </label>
                              <Field
                                id="input_email"
                                className={classNames("form-control", {
                                  "border-error": errors.email && touched.email,
                                })}
                                type="email"
                                name="email"
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="error"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label
                                className="input_title"
                                htmlFor="input_phone"
                              >
                                Your Phone
                              </label>
                              <Field
                                id="input_phone"
                                className={classNames("form-control", {
                                  "border-error": errors.phone && touched.phone,
                                })}
                                type="tel"
                                name="phone"
                              />
                              <ErrorMessage
                                name="phone"
                                component="div"
                                className="error"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label
                                className="input_title"
                                htmlFor="input_textarea"
                              >
                                Message
                              </label>
                              <Field
                                as="textarea"
                                id="input_textarea"
                                className={classNames("form-control", {
                                  "border-error":
                                    errors.message && touched.message,
                                })}
                                name="message"
                                cols="30"
                                rows="10"
                              />
                              <ErrorMessage
                                name="message"
                                component="div"
                                className="error"
                              />
                            </div>
                            <button
                              className="btn"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              <span className="btn_label">
                                {isLoading ? "Loading..." : "Send Message"}
                              </span>
                            </button>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="gmap_canvas ps-lg-5">
                  <iframe src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
