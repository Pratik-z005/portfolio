import React from "react";

// components!
import Navbar from "../components/Navbar";
import ProjectCompo from "../components/ProjectCompo";
import Footer from "../components/Footer";

// react-router!
import { Link } from "react-router-dom";

// css!
import "../index.css";

// my image!
import myImg from "/src/assets/photos/Pratik Black_Suit.jpeg";

// project-images!
import FoodRecipeImg from "/src/assets/photos/food-black.png";
import GhibliImg from "/src/assets/photos/ghibli.png";

const Home = () => {
  const foodAppLink = "https://food-recipe-brown-one.vercel.app/";
  const ghibliAppLink = "https://my-ghibli-world.vercel.app/";
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <div className="box">
          <div className="info">
            <h1 className="brand">Hey, I'm Pratik!</h1>
            <br />
            <p className="objInfo">
              I'm a software engineer, open-source creator, and former
              professional chef. I've been making websites since 1998 and
              writing on this blog for over ten years! Everything on this site
              is written by me, not AI.
            </p>
            <Link className="links" to={"/about"}>
              <button className="btns">About Me</button>
            </Link>
          </div>
          <div className="imgbox">
            <img className="realImg" src={myImg} alt="myImg" />
          </div>
        </div>

        <br />
        <h2>My Projects</h2>
        <br />
        <br />

        <ProjectCompo
          title={"My Ghibli World"}
          pic={GhibliImg}
          link={ghibliAppLink}
        />
        <ProjectCompo
          title={"Flavors of the World"}
          pic={FoodRecipeImg}
          link={foodAppLink}
        />
        <ProjectCompo />
      </div>

      <Footer />
    </>
  );
};

export default Home;
