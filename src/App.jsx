import React from "react";
import Headers from "./components/Headers";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Commitment from "./components/Commitment";
import Policy from "./components/Policy";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chat from "./components/Chat";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <div className="page_wrapper">
        <Headers />
        <main className="page_content" id="home">
          <Hero />
          <div id="about" className="py-5"></div>
          <About />
          <Services />
          <Commitment />
          <Policy />
          <div className="py-5" id="port"></div>
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <Chat/>
      </div>
    </div>
  );
};

export default App;
