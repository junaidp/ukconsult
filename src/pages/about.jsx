import React from "react";
import Hero from "../components/about/hero";
import Values from "../components/about/values";
import Quote from "../components/about/quote";
import Leadership from "../components/about/leadership";
import Consultation from "../components/about/consultation";
import Newsletter from "../components/common/newsletter";
import Header from "../components/common/header";
import ConsultationDialog from "../components/common/consultation-dialog";

const About = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      {open && (
        <div className="model-parent" onClick={() => setOpen(false)}>
          <div className="model-wrap" onClick={(e) => e.stopPropagation()}>
            <ConsultationDialog setOpen={setOpen} />
          </div>
        </div>
      )}
      <Header />
      <Hero />
      <Values />
      <Quote />
      <Leadership />
      <Consultation setOpen={setOpen} />
      <Newsletter newsletter={false} setOpen={setOpen} industryPage={false} />
    </div>
  );
};

export default About;
