import React from "react";

// react-router!
import { Link } from "react-router-dom";

// css!
import css from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={css.navbar}>
        <Link to={"/"} className={css.links}>
          <div className={css.logo}>Pratik Kamble</div>
        </Link>
        <ul>
          <Link to={"/about"} className={css.links}>
            <li>About</li>
          </Link>
          <Link to={"/contact"} className={css.links}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
