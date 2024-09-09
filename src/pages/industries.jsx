import React from "react";
import Hero from "../components/industries/hero";
import Industry from "../components/industries/industry";
import Trending from "../components/industries/trending";
import Contact from "../components/common/contact";
import NewsLetter from "../components/common/newsletter";

const Industries = () => {
  return (
    <div>
      <Hero />
      <Industry />
      <Trending />
      <Contact />
      <NewsLetter />
    </div>
  );
};

export default Industries;
