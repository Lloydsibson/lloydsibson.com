import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { PagePositionScrollBar } from "./PagePositionScrollBar";

export const Nav = () => {
  const NavToggle = () => {
    const body = document.body;
    // const NavMenuIcon = document.getElementById("nav-icon");
    body.classList.toggle("menu-open");
    // NavMenuIcon.classList.toggle("menu-open");
  };

  return (
    <header className="nav-container">
      <PagePositionScrollBar />
      <div className="nav-container__name-container">
        <div className="logo-container">
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013440/img/logo-small.png"
            alt="Logo"
          />
        </div>
        <h2>
          Lloyd <span>Sibson</span>
        </h2>
      </div>
      <ul
        className="nav-container__links-container"
        style={{
          height: `${window.innerHeight}px`,
          top: `-${window.innerHeight}px`,
        }}
      >
        <li>
          <NavLink
            to={"/"}
            exact={true}
            onClick={NavToggle}
            activeClassName="selected"
          >
            Home
          </NavLink>
        </li>
        <li>
          {/* <a href="#Offline">About Me</a> */}
          <NavLink to={"/about"} onClick={NavToggle} activeClassName="selected">
            About
          </NavLink>
        </li>
        <li>
          {/* <a href="#Offline">Portfolio</a> */}
          <NavLink
            to={"/portfolio"}
            onClick={NavToggle}
            activeClassName="selected"
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className="contact"
            onClick={NavToggle}
            activeClassName="selected"
          >
            Contact
          </NavLink>
        </li>
        <div className="tech-stack-logos-container">
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3} />
          <FontAwesomeIcon icon={faSass} />
          <FontAwesomeIcon icon={faJsSquare} />
          <FontAwesomeIcon icon={faReact} />
        </div>
      </ul>
      <div id="nav-icon" onClick={NavToggle}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* <div id="nav-menu-icon">
        <FontAwesomeIcon icon={faBars} />
      </div> */}
    </header>
  );
};
