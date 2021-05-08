import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = ({ Image, CardType, CardSubTitle, Icon }) => {
  const lightboxToggle = (e) => {
    // GRAB URL FROM BACKGROUND AND MOVE IT INTO THE LIGHTBOX URL
    const backgroundURLRAW = e.target.style.backgroundImage;
    let backgroundURL = backgroundURLRAW.replace(`url("`, "");
    backgroundURL = backgroundURL.replace(`")`, "");
    const lightboximage = document.querySelector(".lightbox-image");
    lightboximage.setAttribute("src", backgroundURL);

    // console.log(e.target.previousSibling.previousElementSibling.textContent);
    if (
      e.target.previousSibling.previousElementSibling.textContent === "Image"
    ) {
      const lightboxContainer = document.querySelector(".lightbox-container");
      lightboxContainer.classList.toggle("-open");
    }

    // const lightboxContainer = document.querySelector(".lightbox-container");
    // lightboxContainer.classList.toggle("-open");
  };
  return (
    <figure className="card-container">
      <h4 className="card-container__title">{CardType}</h4>
      <div className="card-container__card-loading-icon lds-ripple">
        <div></div>
        <div></div>
      </div>
      <div
        onClick={(e) => lightboxToggle(e)}
        className="card-container__image"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      ></div>
      <p className="card-container__subtitle">{CardSubTitle}</p>
      <div className="card-container__icon">
        <FontAwesomeIcon icon={Icon} />
      </div>
    </figure>
  );
};
