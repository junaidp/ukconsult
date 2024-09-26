import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("First Name is required"),
      lastname: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Work Email is required"),
      phone: Yup.string().required("Phone Number is required"),
      company: Yup.string().required("Company is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (isLoading) return;
      setIsLoading(true);
      try {
        await axios.post("https://hyphen-back.vercel.app/api/v1/users",values);
        toast.success("Message sent successfully!");
        resetForm();
      } catch (error) {
        toast.error("Failed to send message. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <section className="py-5 contact-form-wrap">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 card shadow rounded">
            <div className="contact-form">
              <div className="flex-1 bg-main">
                <div className="row pt-5 pb-3 px-5">
                  <div className="col-12 text-start">
                    <h2 className="main-heading mb-3 text-white">
                      Get in Touch
                    </h2>
                    <h3 className="text-white mb-5">
                      Fill out the form below, and one of our experts will get
                      back to you promptly.
                    </h3>
                  </div>
                </div>

                <div className="row py-2 px-5">
                  <div className="col-12 text-white mb-50">
                    <div className="d-flex align-items-center">
                      <img src="assets/images/phone.png" alt="Phone" />
                      <p className="ps-4 mb-0">+44 7477 204632</p>
                    </div>
                  </div>

                  <div className="col-12 text-white mb-50">
                    <div className="d-flex align-items-center">
                      <img src="assets/images/email-.png" alt="Email" />
                      <p className="ps-4 mb-0">Info@hyphenAdvisory.com</p>
                    </div>
                  </div>

                  <div className="col-12 text-white mb-3 pb-5 mb-50">
                    <div className="d-flex align-items-center">
                      <img src="assets/images/address.png" alt="Address" />
                      <p className="ps-4 mb-0">
                        167-169 Great Portland Street, London
                      </p>
                    </div>
                  </div>

                  <div className="col-12 text-white mb-3 form-bottom">
                    <img
                      src="assets/images/touch-bottom.png"
                      alt="Decoration"
                    />
                  </div>
                </div>
              </div>
              {/* Right side: Form section */}
              <div className="py-5 px-5 flex-1">
                <form onSubmit={formik.handleSubmit}>
                  <div className="row w-100">
                    <div className="col-6">
                      <div className="mb-4">
                        <TextField
                          id="firstname"
                          label="First Name"
                          variant="standard"
                          className="w-100"
                          name="firstname"
                          value={formik.values.firstname}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.firstname &&
                            Boolean(formik.errors.firstname)
                          }
                          helperText={
                            formik.touched.firstname && formik.errors.firstname
                          }
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-4">
                        <TextField
                          id="lastname"
                          label="Last Name"
                          variant="standard"
                          className="w-100"
                          name="lastname"
                          value={formik.values.lastname}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.lastname &&
                            Boolean(formik.errors.lastname)
                          }
                          helperText={
                            formik.touched.lastname && formik.errors.lastname
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row w-100">
                    <div className="col-6">
                      <div className="mb-4">
                        <TextField
                          id="email"
                          label="Work Email"
                          variant="standard"
                          className="w-100"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.email && Boolean(formik.errors.email)
                          }
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-4">
                        <TextField
                          id="phone"
                          label="Phone Number"
                          variant="standard"
                          className="w-100"
                          name="phone"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.phone && Boolean(formik.errors.phone)
                          }
                          helperText={
                            formik.touched.phone && formik.errors.phone
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row w-100">
                    <div className="col-6">
                      <div className="mb-4">
                        <TextField
                          id="company"
                          label="Company"
                          variant="standard"
                          className="w-100"
                          name="company"
                          value={formik.values.company}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.company &&
                            Boolean(formik.errors.company)
                          }
                          helperText={
                            formik.touched.company && formik.errors.company
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="mb-4">
                        <TextField
                          id="message"
                          label="Message"
                          variant="standard"
                          className="w-100"
                          name="message"
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.message &&
                            Boolean(formik.errors.message)
                          }
                          helperText={
                            formik.touched.message && formik.errors.message
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-12 text-end">
                      <button
                        type="submit"
                        className="btn btn-dark w-25 contact-form-btn h-40 bold"
                        disabled={isLoading}
                      >
                        {isLoading ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
