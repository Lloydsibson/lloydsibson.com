import "./4-PortfolioPage.scss";
import { Card } from "../components/Card";
import { Lightbox } from "../components/Lightbox";
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
    // {
    //   image:
    //     "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1620419966/img/reawaken-eventbrite-banner-new-version.png",
    //   cardType: "Eventbrite Banner",
    //   cardSubTitle: "Adobe Photoshop",
    //   icon: faSearchPlus,
    // },
    // {
    //   image:
    //     "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1595526500/img/rac-logo.png",
    //   cardType: "RAC Logo",
    //   cardSubTitle: "Adobe Photoshop",
    //   icon: faSearchPlus,
    // },
    // {
    //   image:
    //     "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013643/img/portfolio/amo-cards.png",
    //   cardType: "AMO ID Cards",
    //   cardSubTitle: "Photoshop & Printful",
    //   icon: faSearchPlus,
    // },
  ];

  return (
    <>
      <div className="page-title-container">
        <h1>Portfolio</h1>
        <p>Recent Examples</p>
        {/* <p>Previous Work</p> */}
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
          <div className="link-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.figma.com/file/L963Av0kWVoSCZr6qGQNMY/Bea's-Sports-Clinic---Homepage---Layout-Redesign---Low-Fi-Wireframe"
            >
              Client Homepage Redesign (Low Fi Wireframe)
            </a>
          </div>
          <div className="link-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.arclightpromotions.co.uk/"
            >
              APUK Official Website
            </a>
          </div>
          <div className="link-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.figma.com/file/kSUletznveK6k1NFJDhrUR/Monocode-Portfolio?node-id=0%3A1"
            >
              APUK - Mobile Nav Design (Figma)
            </a>
          </div>
          <div className="link-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.figma.com/file/xawnaEYP9XECDnxihvXTNn/New-Website-%26-Theme-V2.1"
            >
              New Website Design (Figma)
            </a>
          </div>
          <div className="link-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://codepen.io/lloydsibson/pen/bGBqKpN"
            >
              Eventbrite API (Codepen)
            </a>
          </div>
        </div>
      </div>
      <Lightbox />
    </>
  );
};
