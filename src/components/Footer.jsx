import React from "react";

// css!
import "../index.css";

// font-awesome!
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <a
          href="https://github.com/Pratik-z005"
          target="_blank"
          rel="noopener noreferrer"
          className="links"
        >
          <FontAwesomeIcon
            className="icons"
            icon={faGithub}
            style={{ color: "#000" }}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/pratik-kamble-ba8915338"
          target="_blank"
          rel="noopener noreferrer"
          className="links"
        >
          <FontAwesomeIcon className="icons" icon={faLinkedinIn} />
        </a>

        <a
          href="https://instagram.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="icons"
            icon={faInstagram}
            style={{ color: "#000" }}
          />
        </a>
      </footer>
    </>
  );
};

export default Footer;
