import { memo } from "react";

// css!
import "../index.css";

// react-router-dom!
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={isOpen ? "sidebar active" : "sidebar"}>
      <div className="boxUl">
        <Link className="links li" to={"/"}>
          Home
        </Link>

        <Link className="links li" to={"/about"}>
          About Me
        </Link>

        <Link className="links li" to={"/"}>
          Projects
        </Link>

        <Link className="links li" to={"/contact"}>
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default memo(Sidebar);
