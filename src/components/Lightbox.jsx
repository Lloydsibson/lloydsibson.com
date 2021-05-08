import "./Lightbox.scss";

export const Lightbox = () => {
  const lightboxToggle = () => {
    const lightboxContainer = document.querySelector(".lightbox-container");
    lightboxContainer.classList.toggle("-open");
  };
  return (
    <div className="lightbox-container" onClick={() => lightboxToggle()}>
      <div className="lightbox-container__content">
        <img className="lightbox-image" src="" alt="" />
      </div>
    </div>
  );
};
