import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const WebinarDialog = ({ setShowWebinarDialog, selectedWebinarId }) => {
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
                await axios.post("https://hyphen-back.vercel.app/api/v1/webinarUser", { ...values, id: selectedWebinarId });
                toast.success(
                    "Registration successful! You've been registered for the webinar."
                );
                resetForm();
                setShowWebinarDialog(false)
            } catch (error) {
                toast.error("Failed to send message. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        },
    });
    return (
        <div className="col-lg-12">
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
                            <div className='d-flex gap-2 justify-content-between'>
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    disabled={isLoading}
                                >
                                    {isLoading
                                        ? "Sending..."
                                        : "Register"}
                                </button>
                                <button
                                    className="btn btn-danger w-100"
                                    onClick={() => setShowWebinarDialog(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default WebinarDialog