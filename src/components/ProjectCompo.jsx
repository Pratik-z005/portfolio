import React from "react";

// react-router!
import { Link } from "react-router-dom";

// css!
import css from "./ProjectCompo.module.css";

const ProjectCompo = ({ pic, link, title, description }) => {
  return (
    <>
      <div className={css.container}>
        <div className={css.imgContainer}>
          <a href={link} target="_blank">
            <img className={css.img} src={pic} alt="" />
          </a>
        </div>
        <div className={css.infoContainer}>
          <h3>{title}</h3>
          <br />
          <p className={css.description}>{description}</p>
          <div className="siteLinks">
            <button className={css.grayBtns}>
              <Link className="links">Site</Link>
            </button>
            <button className={css.grayBtns}>
              <Link className="links">Code</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCompo;
