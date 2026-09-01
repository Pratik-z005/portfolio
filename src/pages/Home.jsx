import React from "react";
import { useRef } from "react";

// components!
import Navbar from "../components/Navbar";
import ProjectCompo from "../components/ProjectCompo";
import Footer from "../components/Footer";

// react-router!
import { Link } from "react-router-dom";

// font awesome!
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRibbon } from "@fortawesome/free-solid-svg-icons";

// css!
import "../index.css";

// my image!
import myImg from "/src/assets/photos/Pratik Black_Suit.jpeg";

// project-images!
import FoodRecipeImg from "/src/assets/photos/food-black.png";
import GhibliImg from "/src/assets/photos/ghibli.png";

// project-demo!
import FoodRecipeVideo from "/src/assets/video/demo_flavours_.mp4";
import GhibliVideo from "/src/assets/video/final_ghibli_video.mp4";

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
          <div className="imgbox1">
            <img className="realImg" src={myImg} alt="myImg" />
          </div>

          <div className="info">
            <hr className="hr" />
            <h1 className="brand">Hey, I'm Pratik!</h1>
            <br />
            <hr className="hr" />
            <p className="objInfo">
              I'm an aspiring Full-Stack Developer from India, passionate about
              building, exploring, and learning through code. I enjoy turning
              ideas into modern web experiences, solving problems, experimenting
              with new technologies, and continuously sharpening my skills as I
              grow.
            </p>
            <Link className="links" to={"/about"}>
              <button className="btns">About Me</button>
            </Link>

            <hr className="hr" />
          </div>
          <div className="imgbox">
            <img className="realImg" src={myImg} alt="myImg" />
          </div>
        </div>

        <div className="linez">
          <div className="line"></div>
          <FontAwesomeIcon icon={faRibbon} size="2x" />
          <div className="line"></div>
        </div>

        <br />
        <h2>My Projects</h2>
        <br />
        <br />

        <ProjectCompo
          title={"My Ghibli World"}
          pic={GhibliImg}
          video={GhibliVideo}
          linked={ghibliAppLink}
          description={`My Ghibli World is a Ghibli-focused movie discovery platform where users can explore films, characters, genres, favorites, music, quizzes, and other interactive Ghibli-themed features—all in one place.`}
        />
        <ProjectCompo
          title={"Flavors of the World"}
          pic={FoodRecipeImg}
          video={FoodRecipeVideo}
          linked={foodAppLink}
          description={`Flavors of the World is a recipe discovery platform that brings popular dishes from around the globe into one place. Users can explore cuisines by country and category, search for recipes, discover what to cook for different occasions, and explore recipes through a simple, interactive interface.`}
        />
        <ProjectCompo
          title={`Gyanify — Smart India Hackathon (SIH)`}
          description={`Gyanify is an offline, gamified learning platform designed for students in rural areas. It aims to make learning more accessible, interactive, and enjoyable for students, even with limited or no internet connectivity.`}
        />
      </div>

      <Footer />
    </>
  );
};

export default Home;
