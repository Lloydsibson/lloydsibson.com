import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";

import { BackToTop } from "./BackToTop";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <BackToTop />
      <ul>
        <li>
          <a href="https://github.com/Lloydsibson">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lloyd-sibson/">Linkedin</a>
        </li>
        <li>
          <a href="https://codepen.io/lloydsibson/pens/public">CodePen</a>
        </li>
        <li>
          <a href="https://www.figma.com/file/kSUletznveK6k1NFJDhrUR/Monocode-Portfolio?node-id=0%3A1">
            Figma
          </a>
        </li>
      </ul>
      <div className="footer-container__legal">
        <p>
          © {new Date().getFullYear()} All rights reserved. Lloyd Sibson. V2.1
        </p>
        <div className="tech-stack-logos-container">
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3} />
          <FontAwesomeIcon icon={faSass} />
          <FontAwesomeIcon icon={faJsSquare} />
          <FontAwesomeIcon icon={faReact} />
        </div>
      </div>
    </footer>
  );
};
