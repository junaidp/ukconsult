import React from "react";
import Hero from "../components/sox-implementation/hero";
import Quote from "../components/sox-implementation/Quote";
import Implementation from "../components/sox-implementation/implementation";
import Outputs from "../components/sox-implementation/outputs";
import Model from "../components/sox-implementation/model";
import AI from "../components/sox-implementation/ai";
import Checklist from "../components/sox-implementation/checklist";
import Blogs from "../components/common/blogs";
import Contact from "../components/common/contact";
import Newsletter from "../components/common/newsletter";

const SoxImplementation = () => {
  return (
    <div>
      <Hero />
      <Quote />
      <Implementation />
      <Outputs />
      <Model />
      <AI />
      <Checklist />
      <Blogs />
      <Contact />
      <Newsletter />
    </div>
  );
};

export default SoxImplementation;
