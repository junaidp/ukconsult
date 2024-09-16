import React from "react";
import Hero from "../components/home/hero";
// import section_1 from "../components/home/section_1";
import SOX from "../components/home/sox";
import Testimonial from "../components/home/testimonial";
import Approach from "../components/home/approach";
import Leadership from "../components/home/leadership";
import Newsletter from "../components/common/newsletter";
import Contact from "../components/common/contact";
import Checklist from "../components/sox-implementation/checklist";
import Blogs from "../components/common/blogs";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <section_1 /> */}
      <Checklist />
      <SOX />
      <Testimonial />
      <Approach />
      <Leadership />
      <Blogs />
      <Newsletter />
      <Contact />
    </div>
  );
};

export default Home;
