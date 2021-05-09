import "./2-AboutPage.scss";
import CvTwoPage from "../static/lloyd-sibson-ba-front-end-developer-cv-2021.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { Testimonials } from "../components/Testimonials";
import { Clients } from "../components/Clients";

export const AboutPage = () => {
  return (
    <>
      <div className="page-title-container about">
        <div className="cv-hero-container">
          <div className="cv-hero-container__info-container">
            <h6>BA Front End Developer & Designer</h6>
            <h2>Lloyd Sibson</h2>
            <p>
              As a creative and skilled Front End Developer, I have successfully
              developed unique websites, complex user interfaces and components
              for luxury brands and products.
            </p>
            <div className="btn-primary">
              <a href={CvTwoPage} download>
                Download CV
              </a>
            </div>
          </div>
          <div className="cv-hero-container__image">
            <div
              className="profile-image"
              style={{
                backgroundImage:
                  "url(https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1620398786/img/profile-pic-large.jpg)",
              }}
            ></div>
            <div class="spinner">
              <div class="double-bounce1"></div>
              <div class="double-bounce2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-container">
        <div className="services-container__title">
          <h2>What I do</h2>
        </div>
        <div className="services-container__services">
          <div className="service-container">
            <FontAwesomeIcon
              icon={faDesktop}
              className="service-container__icon desktop"
            />
            <div className="service-container__info">
              <h4>Web Development</h4>
              <p>
                Developing beautiful websites and components using various
                languages, tools and frameworks. I like to code things from
                scratch, and enjoy bringing ideas to life in the browser.
              </p>
            </div>
          </div>
          <div className="service-container">
            <FontAwesomeIcon
              icon={faPencilAlt}
              className="service-container__icon pencil"
            />
            <div className="service-container__info">
              <h4>Graphic & UI Design</h4>
              <p>
                In addition to being a successful developer, I also have an
                entrepreneurial and creative design background. I value simple
                structure, clean design patterns, and thoughtful interactions.
              </p>
            </div>
          </div>
          <div className="service-container">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="service-container__icon cart"
            />
            <div className="service-container__info">
              <h4>Ecommerce</h4>
              <p>
                Developed for the largest prestige luxury jewellers and
                timepieces specialist in the UK. I was also the dedicated UK and
                USA Developer for Rolex and official E-commerce representative
                for The WOS Group.
              </p>
            </div>
          </div>
          <div className="service-container">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className="service-container__icon charity"
            />
            <div className="service-container__info">
              <h4>Charity</h4>
              <p>
                One of my personal projects is a voluntary role as the Front End
                Developer and Designer at Arclight, a non-profit charity founded
                in 2019 with a passion for music and education to help make a
                change in the local scene.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-container">
        <div className="skills-container__design-skills-container">
          <div className="skills-title-container">
            <h2>Design Skills</h2>
          </div>
          {/*  */}
          <div className="skills-inner-container">
            <div className="skills-inner-container__skill-title-container">
              <h4>Graphic Design</h4>
              <div className="skill-value">90%</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "90%" }}></div>
            </div>

            {/*  */}
            <div className="skills-inner-container__skill-title-container">
              <h4>UI Design</h4>
              <div className="skill-value">60%</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "60%" }}></div>
            </div>

            {/*  */}

            <div className="skills-inner-container__skill-title-container">
              <h4>Print Design</h4>
              <div className="skill-value">75%</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "75%" }}></div>
            </div>

            {/*  */}
            <div className="skills-inner-container__skill-title-container">
              <h4>Logo Design</h4>
              <div className="skill-value">80%</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "80%" }}></div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="skills-container__dev-skills-container">
          {" "}
          <div className="skills-title-container">
            <h2>Developer Skills</h2>
          </div>
          {/*  */}
          <div className="skills-inner-container">
            <div className="skills-inner-container__skill-title-container">
              <h4>HTML/CSS</h4>
              <div className="skill-value">90%</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "90%" }}></div>
            </div>
            {/*  */}
            <div className="skills-inner-container__skill-title-container">
              <h4>SASS</h4>
              <div className="skill-value">55%</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "55%" }}></div>
            </div>
            {/*  */}
            <div className="skills-inner-container__skill-title-container">
              <h4>JavaScript</h4>
              <div className="skill-value">65%</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "65%" }}></div>
            </div>
            {/*  */}
            <div className="skills-inner-container__skill-title-container">
              <h4>React</h4>
              <div className="skill-value">50%</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "50%" }}></div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <Clients />
    </>
  );
};
