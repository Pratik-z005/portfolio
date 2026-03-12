import React from "react";

// css!
import "../index.css";

// lucide-react!
import { Github, Linkedin, Instagram } from "lucide-react";

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
          <div className="icon">
            <Github />
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/pratik-kamble-ba8915338"
          target="_blank"
          rel="noopener noreferrer"
          className="links"
        >
          <div className="icon">
            <Linkedin />
          </div>
        </a>

        <div className="icon">
          <Instagram />
        </div>
      </footer>
    </>
  );
};

export default Footer;
