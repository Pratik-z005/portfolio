import React from "react";

// react-router!
import { Routes, Route } from "react-router-dom";

// components!
import Navbar from "./components/Navbar";

// pages!
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
