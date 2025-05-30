import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

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
        onSubmit: async (values, { resetForm }) => {
            if (isLoading) return;
            setIsLoading(true);
            try {
                await axios.post("https://hyphen-back.vercel.app/api/v1/consultation", values);
                toast.success(
                    "Thank you for expressing interest in our product! We’re thrilled to provide you with a personalised demo. Our team will be in touch shortly to schedule a demonstration tailored to your needs. Stay tuned"
                );
                resetForm();
            } catch (error) {
                toast.error("Failed to send message. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        },
    });

    return (
        <div>
            <section className="py-5 pb-0 bg-light sox-header">
                <div className="container">
                    <div className="sox-hero">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3 className="my-3 text-black text-white">
                                    Explore Our Webinars on Internal Controls, SOX & Risk Culture
                                </h3>
                                <h4 className="pe-lg-5 fs-5 text-black lh-22 text-white fs-24">
                                    From cultural change in SOX to practical implementation of internal controls, our webinars bring you real-world strategies, thought leadership, and conversations that matter to CFOs, auditors, and compliance professionals.
                                </h4>
                                <h1 className="fw-bold text-black sox-heading main-heading text-white no-wrap">
                                    Why Join Our
                                    <br />
                                    <span className="text-theme">Webinars?</span>
                                </h1>
                                <ul className="mt-4 text-black ls-none text-white p-0">
                                    <li>
                                        <p>
                                            <span className="me-2">
                                                <img
                                                    src="assets/images/list-check.png"
                                                    alt="list-check"
                                                />
                                            </span>
                                            Gain actionable insights on governance, internal audit, SOX, ESG
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
                                            Sessions led by experts with global & local experience
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
                                            Designed for CFOs, Audit Leads, Risk Managers, and Policy Teams
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
                                            Access to replays & summaries for easy reference
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
                                                        className={`form-control ${formik.touched.name && formik.errors.name
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
                                                        className={`form-control ${formik.touched.email && formik.errors.email
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
                                                        className={`form-control ${formik.touched.phone && formik.errors.phone
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
                                                        className={`form-control ${formik.touched.message && formik.errors.message
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
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary w-100"
                                                    disabled={isLoading}
                                                >
                                                    {isLoading
                                                        ? "Sending..."
                                                        : "Register for Upcoming Webinars"}
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
