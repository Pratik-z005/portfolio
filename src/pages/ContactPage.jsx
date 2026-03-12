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
      <form className={css.container}>
        <div className={css.content}>
          <p>
            Contact If you have any questions or requests involving my work,
            feel free to contact me through any of my SNS or using the form
            below.
          </p>
        </div>

        <label>Full Name*</label>
        <input
          className={css.input}
          type="text"
          placeholder="Full Name"
          required
        />

        <br />

        <label>Organization</label>
        <input className={css.input} type="text" placeholder="Organization" />

        <br />

        <label>Email*</label>
        <input
          className={css.input}
          type="email"
          placeholder="Email"
          required
        />

        <br />

        <label>Phone number</label>
        <input className={css.input} type="number" placeholder="Phone number" />

        <br />

        <label>Message*</label>
        <textarea
          className={css.input}
          name=""
          id=""
          placeholder="Message"
          rows={5}
          required
        ></textarea>

        <br />

        <input className={css.input} id={css.submit} type="submit" />
      </form>

      <Footer />
    </>
  );
};

export default ContactPage;
