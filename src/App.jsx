import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./components/common/footer";
import SoxImplementation from "./pages/sox-implementation";
import Industries from "./pages/industries";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Webinar from "./pages/webinar"
import ExitIntentModal from "./components/ExitIntentModal"; // Add this import


const App = () => {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sox-implementation" element={<SoxImplementation />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/webinars" element={<Webinar />} />
        </Routes>
        <Footer />
        <ExitIntentModal /> {/* Add this line just before closing BrowserRouter */}
      </BrowserRouter>
    </div>
  );
};

export default App;
