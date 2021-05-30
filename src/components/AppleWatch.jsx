import React, { useState, useEffect } from "react";
import { WosStockApi } from "./ApiStocksWOS";
import { GoogleNewsApi } from "./ApiGoogleNewsWOS";
// SASS
import "./AppleWatch.scss";

export const AppleWatch = () => {
  const [watchDate, setWatchDate] = useState("Date");
  const [watchDay, setWatchDay] = useState("Day");
  const [watchTime, setWatchTime] = useState("00:00");

  useEffect(() => {
    const dateAndTime = new Date();
    const currentDay = dateAndTime.getDay();
    // SETS WATCH DATE
    setWatchDate(dateAndTime.getDate().toString());

    // WATCH DAY
    switch (currentDay) {
      case 0:
        // code block
        setWatchDay("Sun");
        break;

      case 1:
        // code block
        setWatchDay("Mon");
        break;

      case 2:
        // code block
        setWatchDay("Tue");
        break;

      case 3:
        // code block
        setWatchDay("Wed");
        break;

      case 4:
        // code block
        setWatchDay("Thur");
        break;

      case 5:
        // code block
        setWatchDay("Fri");
        break;

      case 6:
        // code block
        setWatchDay("Sat");
        break;

      default:
      // code block
      // DO NOTHING
    }
    //UPDATES EVERY 1 SECOND
    setInterval(() => {
      let dateAndTime = new Date();
      let currentHour = dateAndTime.getHours();
      let currentMinutes = dateAndTime.getMinutes();
      currentMinutes = ("0" + currentMinutes).slice(-2);
      let watchTimeAndMinutes = `${currentHour}:${currentMinutes}`;
      setWatchTime(watchTimeAndMinutes);
    }, 1000);
  }, []);

  return (
    <div className="smart-watch-container">
      <div className="smart-watch-container__inner-container">
        <img
          loading="lazy"
          src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1609536150/img/apple-watch-mock-up.png"
          alt="Watch Face"
          title="Smart Watch"
        />
        <div className="smart-watch-widgets">
          <div className="smart-watch__date-container">
            <div className="smart-watch__date-container__day">{watchDay}</div>
            <div className="smart-watch__date-container__date">{watchDate}</div>
          </div>
          <div className="smart-watch__date-container__time">{watchTime}</div>
          <GoogleNewsApi />
          <WosStockApi />
        </div>
      </div>
    </div>
  );
};
