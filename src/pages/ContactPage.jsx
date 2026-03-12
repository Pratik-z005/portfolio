import React from "react";

// components!
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// css!
import css from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className={css.container}>
        <div className={css.content}>
          <p>
            Contact If you have any questions or requests involving my work,
            feel free to contact me through any of my SNS or using the form
            below.
          </p>

          <label>Full Name</label>
          <input type="text" />

          <br />

          <label>Full Name</label>
          <input type="text" />

          <br />

          <label>Full Name</label>
          <input type="text" />

          <br />

          <label>Full Name</label>
          <input type="text" />

          <br />

          <label>Full Name</label>
          <textarea name="" id=""></textarea>
        </div>

        <br />

        <input type="submit" />
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
