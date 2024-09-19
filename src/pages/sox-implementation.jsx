import React from "react";
import Hero from "../components/sox-implementation/hero";
import Quote from "../components/sox-implementation/Quote";
import Implementation from "../components/sox-implementation/implementation";
import Outputs from "../components/sox-implementation/outputs";
import Model from "../components/sox-implementation/model";
import AI from "../components/sox-implementation/ai";
import Checklist from "../components/common/checklist";
import Blogs from "../components/common/blogs";
import Newsletter from "../components/common/newsletter";
import Header from "../components/common/header";
import ConsultationDialog from "../components/common/consultation-dialog";

const SoxImplementation = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      {open && (
        <div className="model-parent" onClick={() => setOpen(false)}>
          <div className="model-wrap">
            <ConsultationDialog setOpen={setOpen} />
          </div>
        </div>
      )}
      <Header />
      <Hero />
      <Quote />
      <Implementation />
      <Outputs />
      <Model />
      <AI />
      <Checklist lightBg={true} />
      <Blogs />
      <Newsletter newsletter={true} setOpen={setOpen} industryPage={false} />
    </div>
  );
};

export default SoxImplementation;
