import React from "react";
import parse from "html-react-parser";
import { toast } from "react-toastify";
import { Chip, CircularProgress } from "@mui/material";
import moment from "moment";

const Blogs = () => {
  const [blogs, setBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://hyphen-back.vercel.app/api/v1/blogs/getAll`
      );
      const data = await response.json();
      setBlogs(data.blogs);
      setLoading(false);
    } catch (error) {
      toast.error("Error fetching blogs");
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <section className="py-5">
        {loading ? (
          <div>
            <CircularProgress />
          </div>
        ) : (
          <div className="container">
            <div className="row text-center">
              <div className="col-12 d-flex justify-content-center">
                <span className="blog">Blog</span>
              </div>
              <h1 className="mt-4 main-heading">
                Insights & Thought Leadership
              </h1>
              <p className="px-lg-5 fs-20 text-secondary">
                Stay informed with expert articles, industry updates, and
                in-depth analysis on SOX compliance and risk management.
              </p>
            </div>
            <div className="row mt-5 font-inter">
              {blogs?.map((blog, ind) => (
                <div className="col-lg-4" key={ind}>
                  <div className="bg-white rounded">
                    <img
                      src="assets/images/blog-1.png"
                      className="img-fluid w-100"
                    />
                    <div className="p-3">
                      <p className="my-3 blog-date">
                        {moment.utc(blog.updatedAt).format("MMMM Do YYYY")}
                      </p>
                      <Chip label={blog.category}/>
                      <h5 className="my-3 fw-bold">{blog?.title}</h5>
                      <p>{parse(blog?.description)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blogs;
