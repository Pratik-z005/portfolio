import React from "react";

// components!
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// css!
import css from "./AboutPage.module.css";

// assets!
import Profile from "/src/assets/photos/Pratik Black_Suit.jpeg";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className={css.container}>
        <div className={css.flexContainer}>
          <div className={css.imgContainer}>
            <img className={css.img} src={Profile} alt="" />
          </div>
          <div className={css.nameContainer}>
            <h1>Pratik Kamble</h1>
          </div>
        </div>

        <div className={css.content}>
          <p>
            I'm from India, and an aspiring Full-Stack Developer passionate
            about building modern web applications and constantly improving my
            problem-solving and development skills.
            <br />
            <br />
            Currently pursuing my Bachelor's in Computer Engineering at SPPU
            University, Pune.I enjoy building responsive web applications and
            continuously improving my skills in modern web technologies.
            <br />
            <br />
            What I enjoy most about web development is the ability to combine
            problem-solving with creativity. I like building responsive and
            scalable applications while continuously learning modern
            technologies and improving my development skills.
          </p>
        </div>
      </div>

      <div className={css.educationBox}>
        <p className={css.para}>
          <span>Education & certifications</span>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          sunt autem et tempore ex velit, nesciunt porro, labore ratione a
          recusandae adipisci praesentium repellat, quia aliquam reprehenderit
          amet fuga minima quos! Quidem atque aliquid harum minus sit cumque rem
          velit unde blanditiis corrupti est animi vel mollitia nisi itaque
          libero, quisquam corporis, voluptatem, repellat reprehenderit quae
          veniam laboriosam! Consequatur at voluptatem eos similique. Alias
          molestiae sequi corrupti commodi possimus corporis nisi dolorem
          pariatur, porro laudantium nam eos velit tempore officia reiciendis
          nihil nostrum, magnam perferendis sint nulla. Iste nobis libero quidem
          doloribus. Enim delectus voluptatibus hic sequi architecto tempora
          iste.
        </p>
      </div>

      <div className={css.container}>
        <div className={css.content}>
          <p>
            <span>Some facts about me...</span>
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            ab molestiae impedit ipsum, labore iste architecto aperiam tempora
            odit, quas magnam? Fuga maiores fugiat quasi velit? Odio, minima hic
            consectetur, deleniti necessitatibus sapiente error eum enim
            corporis dolorem non quibusdam, cumque optio harum cum quae est
            nostrum illum eius velit!\
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
