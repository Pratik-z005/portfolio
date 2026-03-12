import React from "react";

// css!
import css from "./ProjectCompo.module.css";

const ProjectCompo = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.imgContainer}>{/* <img src="" alt="" /> */}</div>
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
