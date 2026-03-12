import React from "react";

// components!
import Navbar from "../components/Navbar";
import ProjectCompo from "../components/ProjectCompo";
import Footer from "../components/Footer";

// css!
import "../index.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="information">
          I'm Pratik, an aspiring Full Stack Developer passionate about building
          modern web applications.
        </h2>
        <h2>My Projects</h2>

        <ProjectCompo />
        <ProjectCompo />
        <ProjectCompo />
      </div>

      <Footer />
    </>
  );
};

export default Home;
