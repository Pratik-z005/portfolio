import React from "react";
import { useState, useEffect } from "react";

// react-router!
import { Link } from "react-router-dom";

// css!
import css from "./Navbar.module.css";
import "../index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";

// component!
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

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
          <Link to={"/"} className={css.links}>
            <li>Projects</li>
          </Link>
          <Link to={"/contact"} className={css.links}>
            <li>Contact</li>
          </Link>
        </ul>
        <div className={css.menuIcon}>
          <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
        </div>

        <Sidebar isOpen={isOpen} />

        <div className={darkMode ? "app dark" : "app"}>
          <FontAwesomeIcon
            className="mode"
            onClick={toggleDarkMode}
            icon={darkMode ? faSun : faMoon}
            size="x"
          />
        </div>
      </nav>

      <hr className="hr" />
    </>
  );
};

export default Navbar;
