import "./4-PortfolioPage.scss";
import { Card } from "../components/Card";
import { Lightbox } from "../components/Lightbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
// import { faLink } from "@fortawesome/free-solid-svg-icons";
// import { faVideo } from "@fortawesome/free-solid-svg-icons";
// import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

export const PortfolioPage = () => {
  const CardData = [
    {
      image:
        "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1620419966/img/AFTM-a4-poster.png",
      cardType: "A4 Event Poster",
      cardSubTitle: "Adobe Photoshop",
      icon: faSearchPlus,
    },
    {
      image:
        "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1620422039/img/eventbrite-api.png",
      cardType: "Eventbrite API Integration",
      cardSubTitle: "Figma & JavaScript ES6",
      icon: faSearchPlus,
    },
    {
      image:
        "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1620419966/img/apuk-nav-design.png",
      cardType: "Mobile Nav Design",
      cardSubTitle: "Figma",
      icon: faSearchPlus,
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5db41714f991e52a4904af5f/1617378126936-NQ6HE8JEA7PVWXN31GJ4/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmihaE5rlzFBImxTetd_yW5btdZx37rH5fuWDtePBPDaHF5LxdCVHkNEqSYPsUQCdT/unisex-basic-softstyle-t-shirt-white-front-60673b49ef12c.jpg?format=800w",
      cardType: "T-Shirt Design",
      cardSubTitle: "Photoshop & Printful",
      icon: faSearchPlus,
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5db41714f991e52a4904af5f/1606669957396-6HM6WHW3K5OYB047L1QY/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmihaE5rlzFBImxTetd_yW5btdZx37rH5fuWDtePBPDaHF5LxdCVHkNEqSYPsUQCdT/mockup-62011df2.jpg?format=800w",
      cardType: "Mask Design (Covid)",
      cardSubTitle: "Photoshop & Printful",
      icon: faSearchPlus,
    },
    {
      image:
        "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013440/img/portfolio/jmgb.png",
      cardType: "JMGB Logo",
      cardSubTitle: "Adobe Photoshop",
      icon: faSearchPlus,
    },
  ];

  const LinkData = [
    {
      url: "https://www.figma.com/file/1KCPCSEHcV0lxoaFCzI1P8/Bea's-Sport-Clinic---Home-Page-Redesign?node-id=0%3A1",
      linkText: "Client Homepage (In Progress)",
      postedDate: new Date(2021, 4, 24),
      icon: faFigma,
    },
    {
      url: "https://www.figma.com/file/L963Av0kWVoSCZr6qGQNMY/Bea's-Sports-Clinic---Homepage---Layout-Redesign---Low-Fi-Wireframe",
      linkText: "Client Low Fi Wireframe",
      postedDate: new Date(2021, 4, 19),
      icon: faFigma,
    },
    {
      url: "https://www.figma.com/file/xawnaEYP9XECDnxihvXTNn/New-Website-%26-Theme-V2.1",
      linkText: "New Website Design",
      postedDate: new Date(2021, 4, 8),
      icon: faFigma,
    },
    {
      url: "https://www.arclightpromotions.co.uk/",
      linkText: "APUK Official Website",
      postedDate: new Date(2021, 3, 29),
      icon: faDesktop,
    },
    {
      url: "https://www.figma.com/file/kSUletznveK6k1NFJDhrUR/Monocode-Portfolio?node-id=0%3A1",
      linkText: "APUK - Mobile Nav Design",
      postedDate: new Date(2021, 3, 10),
      icon: faFigma,
    },
    {
      url: "https://codepen.io/lloydsibson/pen/bGBqKpN",
      linkText: "Eventbrite API",
      postedDate: new Date(2021, 1, 15),
      icon: faCodepen,
    },
    {
      url: "https://www.watches-of-switzerland.co.uk/rolex/servicing-your-rolex",
      linkText: "WOS - Servicing Your Rolex",
      postedDate: new Date(2021, 0, 15),
      icon: faDesktop,
    },
    {
      url: "https://www.mappinandwebb.com/rolex/contact-us",
      linkText: "M&W Rolex Map (Google)",
      postedDate: new Date(2020, 6, 22),
      icon: faDesktop,
    },
  ];

  // TAKES POSTED DATE AND WORKS OUT HOW MANY DAYS HAVE PASSED AGAINST CURRENT DATE
  const postedDate = (x) => {
    const postedDate = x;
    const now = new Date();

    var difference = now - postedDate;
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    var daysSince = Math.floor(difference / millisecondsPerDay);

    const today = (
      <p>
        <span>New</span>
        Posted Today
      </p>
    );

    const day1 = (
      <p>
        <span>New</span>
        Posted {daysSince} Day Ago
      </p>
    );

    const day2To14 = (
      <p>
        <span>New</span>
        Posted {daysSince} Days Ago
      </p>
    );

    const beyond = <p>Posted {daysSince} Days Ago</p>;

    if (daysSince === 0) {
      return today;
    } else if (daysSince === 1) {
      return day1;
    } else if (daysSince > 1 && daysSince < 14) {
      return day2To14;
    } else {
      return beyond;
    }
  };

  return (
    <>
      <div className="page-title-container">
        <h1>Portfolio</h1>
        <p>Selected Examples</p>
      </div>
      <div className="portfolio-container">
        {/* <div className="portfolio-container__filters-container">
          <ul>
            <li>Tag Filter Feature (Coming Soon)</li>
            <li>Web Development</li>
            <li>UI Design</li>
            <li>Logo Design</li>
            <li>Merchandise Design</li>
            <li>Posters</li>
            <li>Social Media Assets</li>
            <li>Video</li>
          </ul>
        </div> */}
        <div className="subheading-container">
          <h2>Images</h2>
        </div>
        <div className="portfolio-container__media-container">
          {CardData.map((CardData, id) => (
            <Card
              key={id}
              Image={CardData.image}
              CardType={CardData.cardType}
              CardSubTitle={CardData.cardSubTitle}
              Icon={CardData.icon}
            />
          ))}
        </div>
        <div className="portfolio-container__links-container">
          <div className="subheading-container">
            <h2>Links</h2>
          </div>
          <div className="links-container">
            {LinkData.map((LinkData, id) => (
              <div key={id} className="link-container">
                <FontAwesomeIcon icon={LinkData.icon} />
                <div className="link-container__info">
                  <a target="_blank" rel="noreferrer" href={LinkData.url}>
                    {LinkData.linkText}
                  </a>
                  <div className="posted-container">
                    {postedDate(LinkData.postedDate)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Lightbox />
    </>
  );
};
