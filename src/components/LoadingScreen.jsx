import React from "react";
import "./LoadingScreen.scss";

class LoadingScreen extends React.Component {
  componentDidMount() {
    setTimeout(function () {
      let loaComp = document.querySelector(".loading-screen");
      loaComp.classList.add("-show_page");
    }, 3000);
  }

  render() {
    return (
      <div className="loading-screen">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default LoadingScreen;
