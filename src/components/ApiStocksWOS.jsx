import React, { useEffect, useState } from "react";
// SASS
import "./AppleWatch.scss";

export const WosStockApi = () => {
  const [wosStockPrice, setWosStockPrice] = useState("-");

  // RUN FUNCTION ONCE DOM HAS LOADED
  useEffect(() => {
    fetchWosStockPrice();
  }, []);

  const fetchWosStockPrice = async () => {
    try {
      const fetchStockPrice = await fetch(
        "https://alpha-vantage.p.rapidapi.com/query?symbol=WOSG.L&function=GLOBAL_QUOTE",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
            "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`,
          },
        }
      );
      const returnedStockPrice = await fetchStockPrice.json();
      //console.log(returnedStockPrice);
      let stockPrice = returnedStockPrice["Global Quote"]["05. price"];
      stockPrice = stockPrice.substring(0, 3);
      // SET STATE
      setWosStockPrice(stockPrice);
    } catch (e) {
      setWosStockPrice("N/A");
      console.log(e, "Hit API Limit");
    }
  };

  return (
    <div className="wos-widget-api">
      <p id="market">
        <span>WOSG.L</span>
      </p>
      <div id="stock-price">{wosStockPrice}</div>
    </div>
  );
};
