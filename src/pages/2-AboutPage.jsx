import "./2-AboutPage.scss";
import CvTwoPage from "../static/lloyd-sibson-ba-front-end-developer-cv-2021.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
// import { Testimonials } from "../components/Testimonials";
import { Clients } from "../components/Clients";

export const AboutPage = () => {
  const startDate = new Date(2018, 8, 17);
  const currentDate = new Date();
  const calcWorkingDays = (startDate, currentDate) => {
    // input given as Date objects
    let Weeks,
      DateDiff,
      Adjust = 0;
    if (currentDate < startDate) return -1; // error code if dates transposed
    let Weekday1 = startDate.getDay(); // day of week
    let Weekday2 = currentDate.getDay();
    Weekday1 = Weekday1 === 0 ? 7 : Weekday1; // change Sunday from 0 to 7
    Weekday2 = Weekday2 === 0 ? 7 : Weekday2;
    if (Weekday1 > 5 && Weekday2 > 5) Adjust = 1; // adjustment if both days on weekend
    Weekday1 = Weekday1 > 5 ? 5 : Weekday1; // only count weekdays
    Weekday2 = Weekday2 > 5 ? 5 : Weekday2;
    Weeks = Math.floor(
      (currentDate.getTime() - startDate.getTime()) / 604800000
    );
    if (Weekday1 < Weekday2) {
      //Equal to makes it reduce 5 days
      DateDiff = Weeks * 5 + (Weekday2 - Weekday1);
    } else {
      DateDiff = (Weeks + 1) * 5 - (Weekday1 - Weekday2);
    }
    DateDiff -= Adjust; // take into account both days on weekend
    return DateDiff + 1; // add 1 because dates are inclusive
  };

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
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-container">
        <div className="subheading-container">
          <h2>What I Do</h2>
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
          <div className="subheading-container">
            <h2>Design Skills</h2>
          </div>
          <div className="skills-inner-container">
            <div className="skills-inner-container__skill-title-container">
              <h4>Graphic Design</h4>
              <div className="skill-value">90%</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "90%" }}></div>
            </div>

            <div className="skills-inner-container__skill-title-container">
              <h4>UI Design</h4>
              <div className="skill-value">60%</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "60%" }}></div>
            </div>

            <div className="skills-inner-container__skill-title-container">
              <h4>Print Design</h4>
              <div className="skill-value">75%</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "75%" }}></div>
            </div>

            <div className="skills-inner-container__skill-title-container">
              <h4>Logo Design</h4>
              <div className="skill-value">80%</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
        <div className="skills-container__dev-skills-container">
          <div className="subheading-container">
            <h2>Developer Skills</h2>
          </div>
          <div className="skills-inner-container">
            <div className="skills-inner-container__skill-title-container">
              <h4>HTML/CSS</h4>
              <div className="skill-value">90%</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "90%" }}></div>
            </div>

            <div className="skills-inner-container__skill-title-container">
              <h4>SASS</h4>
              <div className="skill-value">55%</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "55%" }}></div>
            </div>

            <div className="skills-inner-container__skill-title-container">
              <h4>JavaScript</h4>
              <div className="skill-value">70%</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "70%" }}></div>
            </div>

            <div className="skills-inner-container__skill-title-container">
              <h4>React</h4>
              <div className="skill-value">50%</div>
            </div>
            <div className="skills-inner-container__skill-percentage-container">
              <div className="skill-percentage" style={{ width: "50%" }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="tech-stack-container">
        <div className="subheading-container">
          <h2>Current Tech Stack</h2>
        </div>
        <div className="tech-stack-container__info-container">
          <div className="tech-container">
            <div className="tech-container__tech-info">
              <h5>Github</h5>
              <p>Version Control</p>
            </div>
            <div className="tech-container__tech-info">
              <h5>React</h5>
              <p>UI Library</p>
            </div>
            <div className="tech-container__tech-info">
              <h5>SASS</h5>
              <p>CSS Preprocessor</p>
            </div>
          </div>

          <div className="tech-container">
            <div className="tech-container__tech-info">
              <h5>Webpack</h5>
              <p>Module Bundler</p>
            </div>
            <div className="tech-container__tech-info">
              <h5>Netlify</h5>
              <p>CI/CD</p>
            </div>
            <div className="tech-container__tech-info">
              <h5>Cloudflare</h5>
              <p>Internet Security</p>
            </div>
          </div>

          <div className="tech-container">
            <div className="tech-container__tech-info">
              <h5>Hotjar</h5>
              <p>Heat Maps (UX)</p>
            </div>
            <div className="tech-container__tech-info">
              <h5>Sentry </h5>
              <p>Error Handling</p>
            </div>
            <div className="tech-container__tech-info">
              <h5>G. Analytics</h5>
              <p>Trends (UX)</p>
            </div>
          </div>

          <div className="tech-container">
            <div className="tech-container__tech-info">
              <h5>Cloudinary</h5>
              <p>Image CDN</p>
            </div>

            <div className="tech-container__tech-info">
              <h5>Node</h5>
              <p>Server Environment</p>
            </div>

            <div className="tech-container__tech-info">
              <h5>Figma</h5>
              <p>Designing (UI)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tech-stack-container other">
        <div className="tech-stack-container__info-container">
          <div className="subheading-container">
            <h2>Other Tech I Know</h2>
          </div>
          <div className="info-inner-container">
            <div className="tech-container">
              <div className="tech-container__tech-info">
                <h5>JQuery</h5>
                <p>JS Library</p>
              </div>
              <div className="tech-container__tech-info">
                <h5>Bootstrap</h5>
                <p>CSS Framework</p>
              </div>
              <div className="tech-container__tech-info">
                <h5>SAP H5/H6</h5>
                <p>CMS</p>
              </div>
            </div>

            <div className="tech-container">
              <div className="tech-container__tech-info">
                <h5>WordPress</h5>
                <p>CMS</p>
              </div>
              <div className="tech-container__tech-info">
                <h5>Azure DevOps</h5>
                <p>CI/CD</p>
              </div>
              <div className="tech-container__tech-info">
                <h5>Monetate</h5>
                <p>A/B Testing</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tech-stack-container__fun-facts">
          <div className="subheading-container">
            <h2>Fun Facts</h2>
          </div>
          <div className="fun-facts-container">
            <div className="fun-facts-container__fun-facts">
              <FontAwesomeIcon icon={faHeart} />
              <h4>Happy Clients</h4>
              <span>136</span>
            </div>
            <div className="fun-facts-container__fun-facts">
              <FontAwesomeIcon icon={faClock} />
              <h4>Working Hours</h4>
              <span>{calcWorkingDays(startDate, currentDate) * 8}</span>
            </div>
          </div>
        </div>
      </div>
      <Clients />
    </>
  );
};
