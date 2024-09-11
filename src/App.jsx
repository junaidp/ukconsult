import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home";
import About from "./pages/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import SoxImplementation from "./pages/sox-implementation";
import Industries from "./pages/industries";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sox-implementation" element={<SoxImplementation />} />
          <Route path="/industries" element={<Industries />} />
        </Routes>
        <hr />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
