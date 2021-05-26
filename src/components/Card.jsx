import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = ({ Image, CardType, CardSubTitle, Icon }) => {
  const lightboxToggle = (e) => {
    // GRAB URL FROM BACKGROUND AND MOVE IT INTO THE LIGHTBOX URL
    const backgroundURLRAW = e.currentTarget.style.backgroundImage;
    let backgroundURL = backgroundURLRAW.replace(`url("`, "");
    backgroundURL = backgroundURL.replace(`")`, "");
    const lightboximage = document.querySelector(".lightbox-image");
    lightboximage.setAttribute("src", backgroundURL);
    const lightboxContainer = document.querySelector(".lightbox-container");
    lightboxContainer.classList.add("-open");
    // FIX FOR SAFARI TRANSFORM ON HTML VIDEO
    const pageContainer = document.querySelector(".page-container");
    pageContainer.classList.add("-open");
  };

  const lightboxToggleZoomIcon = (e) => {
    // GRAB URL FROM BACKGROUND AND MOVE IT INTO THE LIGHTBOX URL
    const backgroundURLRAW =
      e.currentTarget.previousElementSibling.previousElementSibling.style
        .backgroundImage;
    let backgroundURL = backgroundURLRAW.replace(`url("`, "");
    backgroundURL = backgroundURL.replace(`")`, "");
    const lightboximage = document.querySelector(".lightbox-image");
    lightboximage.setAttribute("src", backgroundURL);
    const lightboxContainer = document.querySelector(".lightbox-container");
    lightboxContainer.classList.add("-open");
    // FIX FOR SAFARI TRANSFORM ON HTML VIDEO
    const pageContainer = document.querySelector(".page-container");
    pageContainer.classList.add("-open");
  };

  return (
    <figure className="card-container">
      <h4 className="card-container__title">{CardType}</h4>
      <div className="card-container__card-loading-icon spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
      <div
        className="card-container__image"
        onClick={(e) => lightboxToggle(e)}
        style={{
          backgroundImage: `url(${Image})`,
        }}
      ></div>
      <p className="card-container__subtitle">{CardSubTitle}</p>
      <div
        className="card-container__icon"
        onClick={(e) => lightboxToggleZoomIcon(e)}
      >
        <FontAwesomeIcon icon={Icon} />
      </div>
    </figure>
  );
};
