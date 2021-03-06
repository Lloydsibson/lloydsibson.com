import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { PagePositionScrollBar } from "./PagePositionScrollBar";

import { WeatherAPI } from "./ApiWeather";

export const Nav = () => {
  const body = document.body;
  const NavToggle = () => {
    body.classList.toggle("menu-open");
  };

  const NavItemToggle = () => {
    body.classList.toggle("menu-open");
    body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <header className="nav-container">
      <PagePositionScrollBar />
      <div className="nav-container__name-container">
        <div className="logo-container">
          <WeatherAPI />
          <img
            id="nav-logo"
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013440/img/logo-small.png"
            alt="Logo"
          />
        </div>
        <h2 id="nav-title">
          Lloyd <span>Sibson</span>
        </h2>
      </div>
      <ul
        className="nav-container__links-container"
        style={{
          height: `${window.innerHeight + 1}px`,
          top: `-${window.innerHeight}px`,
        }}
      >
        <li>
          <NavLink
            to={"/"}
            exact={true}
            onClick={NavItemToggle}
            activeClassName="selected"
          >
            Home
          </NavLink>
        </li>
        <li>
          {/* <a href="#Offline">About Me</a> */}
          <NavLink
            to={"/about"}
            onClick={NavItemToggle}
            activeClassName="selected"
          >
            About
          </NavLink>
        </li>
        <li>
          {/* <a href="#Offline">Portfolio</a> */}
          <NavLink
            to={"/portfolio"}
            onClick={NavItemToggle}
            activeClassName="selected"
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className="contact"
            onClick={NavItemToggle}
            activeClassName="selected"
          >
            Contact
          </NavLink>
        </li>
        <div className="tech-stack-logos-container">
          <a href="https://github.com/Lloydsibson">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/lloyd-sibson/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://codepen.io/lloydsibson/">
            <FontAwesomeIcon icon={faCodepen} />
          </a>
          <a href="https://www.figma.com/file/kSUletznveK6k1NFJDhrUR/Monocode-Portfolio?node-id=0%3A1">
            <FontAwesomeIcon icon={faFigma} />
          </a>
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
