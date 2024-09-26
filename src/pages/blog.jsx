import React from "react";
import Header from "../components/common/header";
import SingleBlog from "../components/blog/index";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

const Blog = () => {
  const location = useLocation();
  const [blog, setBlog] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://hyphen-back.vercel.app/api/v1/blogs/${id}`
      );
      const data = await response.json();
      setBlog(data.blog);
      setLoading(false);
    } catch (error) {
      toast.error("Error fetching blog");
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <Header />
      <section className="py-5">
        <div className="container">
          <div className="row">
            {loading ? (
              <div className="p-20">
                <CircularProgress />
              </div>
            ) : (
              <SingleBlog blog={blog} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
