import React, { useEffect, useState } from "react";
// SASS
import "./AppleWatch.scss";

export const GoogleNewsApi = () => {
  const [googleNews, setGoogleNews] = useState("Fetching News...");
  const [googleLink, setGoogleLink] = useState("0#");

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

      const googleNewsTitle = await returnedNews.articles[0].title;
      const googleNewsLink = await returnedNews.articles[0].link;

      // SET STATE
      setGoogleNews(googleNewsTitle);
      setGoogleLink(googleNewsLink);
    } catch (e) {
      setGoogleNews("API LIMIT REACHED: 1 HOUR COOLDOWN");
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
          <a href={googleLink} className="news-link">
            <p className="news-title">{googleNews}</p>
          </a>
        </div>
      </div>
    </div>
  );
};
