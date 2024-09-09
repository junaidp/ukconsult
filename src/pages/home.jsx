import React from "react";
import Hero from "../components/home/hero";
import SOX from "../components/home/sox";
import Testimonial from "../components/home/testimonial";
import Approach from "../components/home/approach";
import Leadership from "../components/home/leadership";
import Newsletter from "../components/common/newsletter";
import Contact from "../components/common/contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <SOX />
      <Testimonial />
      <Approach />
      <Leadership />
      <Newsletter />
      <Contact />
    </div>
  );
};

export default Home;
