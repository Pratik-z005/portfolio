import React from "react";
import { useRef } from "react";

// react-router!
import { Link } from "react-router-dom";

// css!
import css from "./ProjectCompo.module.css";

const ProjectCompo = ({ pic, video, linked, title, description }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <>
      <div className={css.container}>
        <div
          className={css.imgContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img className={css.img} src={pic} alt="" />

          <video ref={videoRef} muted loop preload="auto" className={css.video}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className={css.infoContainer}>
          <h3>{title}</h3>
          <br />
          <p className={css.description}>{description}</p>
          <div className="siteLinks">
            <button className={css.grayBtns}>
              <a href={linked} className="links">
                Site
              </a>
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
