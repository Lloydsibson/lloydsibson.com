import React, { useEffect } from "react";
// SASS
import "./AppleWatch.scss";

export const GoogleNewsApi = () => {
  // RUN FUNCTION ONCE DOM HAS LOADED
  useEffect(() => {
    fetchGoogleNewsApi();
  });

  const fetchGoogleNewsApi = async () => {
    try {
      const fetchNews = await fetch(
        "https://google-news.p.rapidapi.com/v1/search?country=US&lang=en&q=Watches%20of%20switzerland%20group",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "google-news.p.rapidapi.com",
            "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`,
          },
        }
      );
      const returnedNews = await fetchNews.json();
      //console.log(returnedNews);
      const googleNewsTitleContainer = document.querySelector(".news-title");
      const googleNewsLinkContainer = document.querySelector(".news-link");

      const googleNewsTitle = await returnedNews.articles[0].title;
      const googleNewsLink = await returnedNews.articles[0].link;

      googleNewsTitleContainer.innerHTML = googleNewsTitle;
      googleNewsLinkContainer.href = `${googleNewsLink}`;
    } catch (e) {
      const googleNewsTitleContainer = document.querySelector(".news-title");
      googleNewsTitleContainer.innerText = "API LIMIT REACHED: 1 HOUR COOLDOWN";
      console.log(e, "Hit API Limit");
    }
  };

  return (
    <div className="google-news-wos">
      <div className="google-news-wos__card">
        <div className="google-news-title">
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1599594465/img/google-news-icon.png"
            alt="Google News Icon"
            title="Google News"
          />
          News
        </div>
        <div className="new-info-container">
          <a href="#0" className="news-link">
            <p className="news-title">Loading News...</p>
          </a>
        </div>
      </div>
    </div>
  );
};
