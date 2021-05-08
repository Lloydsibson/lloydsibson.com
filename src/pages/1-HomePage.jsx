import "./1-HomePage.scss";
import CvTwoPage from "../static/lloyd-sibson-ba-front-end-developer-cv-2021.pdf";

export const HomePage = () => {
  // // TYPE EFFECT ON TEXT
  // setTimeout(function () {
  //   // array with texts to type in typewriter
  //   let dataText = ["Developer", "Designer", "Creative"];

  //   // type one text in the typwriter
  //   // keeps calling itself until the text is finished
  //   function typeWriter(text, i, fnCallback) {
  //     // check if text isn't finished yet
  //     if (i < text.length) {
  //       // add next character to ID
  //       document.getElementById("type-text").innerHTML =
  //         text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

  //       // wait for a while and call this function again for next character
  //       setTimeout(function () {
  //         typeWriter(text, i + 1, fnCallback);
  //       }, 100);
  //     }
  //     // text finished, call callback if there is a callback function
  //     else if (typeof fnCallback == "function") {
  //       // call callback after timeout
  //       setTimeout(fnCallback, 1500);
  //     }
  //   }
  //   // start a typewriter animation for a text in the dataText array
  //   function StartTextAnimation(i) {
  //     if (typeof dataText[i] == "undefined") {
  //       // DO NOTHING
  //     }
  //     // check if dataText[i] exists
  //     if (i < dataText.length) {
  //       // text exists! start typewriter animation
  //       typeWriter(dataText[i], 0, function () {
  //         // after callback (and whole text has been animated), start next text
  //         StartTextAnimation(i + 1);
  //       });
  //     }
  //   }
  //   // start the text animation
  //   StartTextAnimation(0);
  // }, 1900);
  return (
    <div className="homepage container">
      <div className="homepage-container__text-container">
        <div className="text-inner-container">
          <h1>
            Front End <span>Dev & Designer</span>
          </h1>
          {/* <div id="type-text"></div> */}
        </div>
        <h3>Founder of Monocode</h3>
        <p>
          I'm a innovative developer with a design background. By combining both
          these worlds my employers, or clients save time and have a truly
          consistent bespoke solution.
        </p>
        <div className="btn-primary">
          <a href={CvTwoPage} download>
            Download CV
          </a>
        </div>
      </div>
      <div className="homepage-container__image-container">
        {/* <div className="hp-image"></div> */}
        <img
          src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1620401501/img/logo-homepage.png"
          alt="Monocode Logo"
        />
      </div>
    </div>
  );
};
