import React from "react";
import { CardContent, Typography, Chip } from "@mui/material";
import parse from "html-react-parser";
import moment from "moment";

const Blog = ({ blog }) => {
  if (!blog) return <h1>Blog Not Found!</h1>;

  const { title, image, description, category, createdAt } = blog;

  return (
    <div>
      {image && <img src={image} alt={title} className="blog-image" />}
      <Typography variant="h5" className="blog-title mb-20">
        {title}
      </Typography>
      <div className="mt-20">
        <Chip
          label={category}
          color="primary"
          className="blog-category mb-20"
        />
      </div>
      <Typography variant="body2" className="blog-date">
        {moment(createdAt).format("MMMM Do YYYY")}
      </Typography>
      {description && (
        <div className="blog-description">{parse(description)}</div>
      )}
    </div>
  );
};

export default Blog;
