import React from "react";
import Hero from "../components/industries/hero";
import Industry from "../components/industries/industry";
import Contact from "../components/common/contact";
import NewsLetter from "../components/common/newsletter";
import Header from "../components/common/header";

const Industries = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Industry />
      <Contact />
      <NewsLetter newsletter={true} />
    </div>
  );
};

export default Industries;
