import React from "react";
import Hero from "../components/about/hero";
import Values from "../components/about/values";
import Quote from "../components/about/quote";
import Leadership from "../components/about/leadership";
import Consultation from "../components/about/consultation";
import Newsletter from "../components/common/newsletter";

const About = () => {
  return (
    <div>
      <Hero />
      <Values />
      <Quote />
      <Leadership />
      <Consultation />
      <Newsletter />
    </div>
  );
};

export default About;
