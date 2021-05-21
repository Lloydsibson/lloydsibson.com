import "./BackToTop.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const BackToTop = () => {
  const BackToTopScroll = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div className="bk-to-top-container" onClick={BackToTopScroll}>
      <div className="bk-to-top-container__icon">
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </div>
  );
};
