import React from "react";
// SASS
import "./CookieConsent.scss";

class CookieConsent extends React.Component {
  componentDidMount() {
    // const cookieMessage = document.querySelector(".cookie-container")
    const cookieMessage = document.getElementById("cookie-message");
    const cookieClick = document.getElementById("cookie-accept");

    cookieClick.addEventListener("click", function () {
      document.cookie =
        "LloydsCookiePolicyMessage=Closed; path=/; expires=Wed, 01 Jan 2022 09:00:00 GMT;";
      cookieMessage.classList.add("-close");
    });
    if (document.cookie.indexOf("LloydsCookiePolicyMessage=Closed") >= 0) {
      // DO NOTHING
      cookieMessage.classList.add("-close");
    } else {
      cookieMessage.classList.remove("-close");
    }
    //SETS FADE IN DELAY WITH OPACITY CSS
    setTimeout(function () {
      cookieMessage.classList.remove("-hide");
    }, 1500);
  }
  render() {
    return (
      <div id="cookie-message" className="-hide">
        <div className="cookie-container">
          <div className="cookie-container__cookies-left">
            <span>Cookie Policy</span>
            Cookies are used to improve the website experience and help to
            understand how it can be made better. By continuing to use the site
            you agree that you are happy to receive all cookies. If you would
            like to turn off cookies you can manage cookies in your browser
            settings.
          </div>
          <div className="cookie-container__cookies-right">
            <div id="cookie-accept">Continue</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CookieConsent;
