import React, { useEffect, useState } from "react";
// SASS
import "./CookieConsent.scss";

const CookieConsent = () => {
  const [cookieMessage, setCookieMessage] = useState(true);

  //RUN FUNCTION ONCE DOM HAS LOADED
  useEffect(() => {
    if (localStorage.getItem("Lloydsibson.com-CookiePolicy") === "accepted") {
      // DO NOTHING
    } else {
      //SETS FADE IN DELAY WITH OPACITY CSS
      setTimeout(() => {
        setCookieMessage(false);
      }, 1500);
    }
  }, []);

  const CookieHandler = () => {
    localStorage.setItem('Lloydsibson.com-CookiePolicy', 'accepted');
    setCookieMessage(true);
  };

  return (
    <div id="cookie-message" className={cookieMessage ? "-close" : ""}>
      <div className="cookie-container">
        <div className="cookie-container__cookies-left">
          <span>Cookie Policy</span>
          Cookies are used to improve the website experience and help to
          understand how it can be made better. By continuing to use the site
          you agree that you are happy to receive all cookies. If you would like
          to turn off cookies you can manage cookies in your browser settings.
        </div>
        <div className="cookie-container__cookies-right">
          <div id="cookie-accept" onClick={CookieHandler}>
            Continue
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
