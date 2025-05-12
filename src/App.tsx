import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Services from "./pages/Service";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/services" element={<Services />} />
            {/* <Route path="/contact" element={<Contact />} />  */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
