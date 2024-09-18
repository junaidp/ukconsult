import React from "react";
import Hero from "../components/home/hero";
import SOX from "../components/home/sox";
import Testimonial from "../components/home/testimonial";
import Approach from "../components/home/approach";
import Leadership from "../components/home/leadership";
import Newsletter from "../components/common/newsletter";
import Contact from "../components/common/contact";
import Checklist from "../components/sox-implementation/checklist";
import Blogs from "../components/common/blogs";
import Header from "../components/common/header";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Checklist />
      <SOX />
      <Testimonial />
      <Approach />
      <Leadership />
      <Blogs />
      <Newsletter newsletter={true} />
      <Contact />
    </div>
  );
};

export default Home;
