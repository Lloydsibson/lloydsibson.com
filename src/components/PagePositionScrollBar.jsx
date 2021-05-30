import React, { useEffect, useState } from "react";
// SASS
import "./PagePositionScrollBar.scss";

export const PagePositionScrollBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        //console.log(scrollTop, docHeight, winHeight);
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        scrollPercentRounded = `${scrollPercentRounded}%`;

        setScrollWidth(scrollPercentRounded);
        // document.querySelector(
        //   ".bar-container__bar"
        // ).style.width = `${scrollPercentRounded}%`;
      },
      false
    );
  }, []);
  return (
    <>
      <div className="bar-container">
        <div
          className="bar-container__bar"
          style={{ width: scrollWidth }}
        ></div>
      </div>
    </>
  );
};
