import React, { useEffect } from "react";
// SASS
import "./PagePositionScrollBar.scss";

export const PagePositionScrollBar = () => {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var scrollTop = window.scrollY;
        var docHeight = document.body.offsetHeight;
        var winHeight = window.innerHeight;
        //console.log(scrollTop, docHeight, winHeight);
        var scrollPercent = scrollTop / (docHeight - winHeight);
        var scrollPercentRounded = Math.round(scrollPercent * 100);
        document.querySelector(
          ".bar-container__bar"
        ).style.width = `${scrollPercentRounded}%`;
      },
      false
    );
  }, []);
  return (
    <>
      <div className="bar-container">
        <div className="bar-container__bar"></div>
      </div>
    </>
  );
};
