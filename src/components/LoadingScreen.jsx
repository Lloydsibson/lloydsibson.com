import React from "react";
import "./LoadingScreen.scss";

class LoadingScreen extends React.Component {
  componentDidMount() {
    let loaComp = document.querySelector(".loading-screen");
    loaComp.classList.add("-show_page");
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
