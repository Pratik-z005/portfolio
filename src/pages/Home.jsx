import React from "react";

// components!
import Navbar from "../components/Navbar";
import ProjectCompo from "../components/ProjectCompo";
import Footer from "../components/Footer";

// css!
import "../index.css";

// project-images!
import FoodRecipeImg from "/src/assets/photos/food-black.png";
import GhibliImg from "/src/assets/photos/ghibli.png";

const Home = () => {
  const foodAppLink = "https://food-recipe-brown-one.vercel.app/";
  const ghibliAppLink = "https://my-ghibli-world.vercel.app/";
  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="information">
          I'm Pratik, an aspiring Full Stack Developer passionate about building
          modern web applications.
        </h2>
        <br />
        <h2>My Projects</h2>
        <br />
        <br />

        <ProjectCompo />
        <ProjectCompo pic={FoodRecipeImg} link={foodAppLink} />
        <ProjectCompo pic={GhibliImg} link={ghibliAppLink} />
      </div>

      <Footer />
    </>
  );
};

export default Home;
