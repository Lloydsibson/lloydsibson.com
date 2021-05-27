import React from "react";
// SASS
import "./AppleWatch.scss";

class GoogleNewsApi extends React.Component {
  componentDidMount() {
    fetch(
      "https://google-news.p.rapidapi.com/v1/search?country=US&lang=en&q=Watches%20of%20switzerland%20group",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "google-news.p.rapidapi.com",
          "x-rapidapi-key":
            "3a302db610mshce2a0ed556c0ff5p19e6d3jsn4efe1def0de6",
        },
      }
    )
      .then((resp) => resp.json()) // Transform the data into json
      .then(function (data) {
        //console.log(data);
        //console.log(data.articles[0].title)

        let googleNewsTitleContainer = document.querySelector(".news-title");
        // let googleNewsDateContainer = document.querySelector(".news-date")
        let googleNewsLinkContainer = document.querySelector(".news-link");

        let googleNewsTitle = data.articles[0].title;
        // let googleNewsDate = data.articles[0].published;
        let googleNewsLink = data.articles[0].link;

        // googleNewsDate = googleNewsDate.substring(
        //   0,
        //   googleNewsDate.indexOf(" 20") + 5
        // )

        googleNewsTitleContainer.innerHTML = googleNewsTitle;
        // googleNewsDateContainer.innerHTML = googleNewsDate
        googleNewsLinkContainer.href = `${googleNewsLink}`;
      })
      .catch((err) => {
        console.log(err);
      });

    ///////////////////////////////////////////////

    // NEWS API - https://newsapi.org/

    //     var url = 'http://newsapi.org/v2/everything?' +
    //     'q=watches-of-switzerland-group&' +
    //     // 'sources=google-news&' +
    //     // 'sortBy=popularity&' +
    //     'apiKey=174bf18b5fee4f16bf6beebd35fddec3';

    // var req = new Request(url);

    // fetch(req)
    // .then(function(response) {
    //   console.log(response.json());
    // })

    ///////////////////////////////////////////////
  }

  render() {
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
              <p className="news-title">API LIMIT REACHED: 1 HOUR COOLDOWN</p>
            </a>
            {/* <p className="news-date">API LIMIT REACHED</p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleNewsApi;
