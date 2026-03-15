import React from "react";

// css!
import css from "./ProjectCompo.module.css";

const ProjectCompo = ({ pic, link }) => {
  return (
    <>
      <div className={css.container}>
        <div className={css.imgContainer}>
          <a href={link} target="_blank">
            <img className={css.img} src={pic} alt="" />
          </a>
        </div>
        <div className={css.infoContainer}>
          <h3>title</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
            porro.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectCompo;
