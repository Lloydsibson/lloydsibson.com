import "./1-HomePage.scss";
import { NavLink } from "react-router-dom";
// import CvTwoPage from "../static/lloyd-sibson-ba-front-end-developer-cv-2021.pdf";
import VideoBackground from "../components/VideoBackground";
import { HPCarousel } from "../components/HPCarousel";

export const HomePage = () => {
  const HomeLink = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <>
      <VideoBackground />
      <div className="homepage container">
        <div className="homepage-container__text-container">
          <div className="text-inner-container">
            <div className="hp-image"></div>
            <h1>
              Front End <span>Dev & Designer</span>
            </h1>
            <div id="type-text">
              <HPCarousel />
            </div>
          </div>
          <div className="">
            <h3>Founder of Monocode</h3>
            <p>
              I'm a innovative developer with a design background. By combining
              both these worlds my employers, or clients save time and have a
              truly consistent bespoke solution.
            </p>
            <div className="btn-container">
              <div className="btn-primary">
                <NavLink
                  to={"/contact"}
                  className="contact"
                  activeClassName="selected"
                  onClick={HomeLink}
                >
                  Start Your Project
                </NavLink>
                {/* <a href={CvTwoPage} download>
                  Download CV
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-container__image-container">
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1620401501/img/logo-homepage.png"
            alt="Monocode Logo"
          />
        </div>
      </div>
    </>
  );
};
