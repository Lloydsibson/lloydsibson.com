import React, { useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { HomePage } from "./pages/1-HomePage";
import { AboutPage } from "./pages/2-AboutPage";
import { PortfolioPage } from "./pages/4-PortfolioPage";
import { ContactPage } from "./pages/5-ContactPage";
import CookieConsent from "./components/CookieConsent";
import { Footer } from "./components/Footer";
//import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  // LOADING ICON - ONCE PAGE AND ALL CONTENT HAS LOADED HIDE LOADING SCREEN
  window.addEventListener("load", function () {
    let loaComp = document.querySelector(".loading-screen");
    loaComp.classList.add("-show_page");
  });

  // document.addEventListener("readystatechange", (event) => {
  //   if (event.target.readyState === "complete") {

  //   }
  // });

  return (
    <>
      {/* <LoadingScreen /> */}
      <CookieConsent />
      <Router>
        <div className="page-scroll">
          <div className="page-container">
            <Nav />
            <main>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/portfolio" component={PortfolioPage} />
                <Route path="/contact" component={ContactPage} />
              </Switch>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
