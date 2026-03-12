import React from "react";

// components!
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// css!
import css from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className={css.container}>
        <div className={css.flexContainer}>
          <div className={css.imgContainer}>{/* <img src="" alt="" /> */}</div>
          <div className={css.nameContainer}>
            <h1>Pratik Kamble</h1>
          </div>
        </div>

        <div className={css.content}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            ab molestiae impedit ipsum, labore iste architecto aperiam tempora
            odit, quas magnam? Fuga maiores fugiat quasi velit? Odio, minima hic
            consectetur, deleniti necessitatibus sapiente error eum enim
            corporis dolorem non quibusdam, cumque optio harum cum quae est
            nostrum illum eius velit!\
          </p>
        </div>
      </div>

      <div className={css.educationBox}>
        <p className={css.para}>
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
