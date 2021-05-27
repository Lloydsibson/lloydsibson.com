import React from "react";
import $ from "jquery";
// SASS
import "./AppleWatch.scss";

class WosStockApi extends React.Component {
  componentDidMount() {
    /////////////////////////////////////

    // ALPHA VANTAGE STOCK API
    var settings = {
      async: true,
      crossDomain: true,
      url: "https://alpha-vantage.p.rapidapi.com/query?symbol=WOSG.L&function=GLOBAL_QUOTE",
      method: "GET",
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": "3a302db610mshce2a0ed556c0ff5p19e6d3jsn4efe1def0de6",
      },
    };

    /////////////////////////////////////

    $.ajax(settings).done(function (response) {
      console.log(response);
      // console.log(response[ 'Global Quote' ][ '05. price' ]);

      // STOCK PRICE

      var stockPrice = response["Global Quote"]["05. price"];

      stockPrice = stockPrice.substring(0, 3);

      var elem = document.getElementById("stock-price");

      elem.innerHTML = stockPrice;

      ///////////////

      // STOCK DAY DIFFERENCE

      // var stockDayDiff = response["Global Quote"]["10. change percent"]

      // stockDayDiff = stockDayDiff.substring(0, 5)

      // var elemFour = document.getElementById("stock-day-average")

      // elemFour.innerHTML = stockDayDiff
    });
  }

  render() {
    return (
      <div className="wos-widget-api">
        <p id="market">
          <span style={{ fontWeight: "400" }}>WOSG.L</span>
        </p>
        <div id="stock-price">-</div>
        {/* <div id="stock-day-average">API LIMIT REACHED</div> */}
      </div>
    );
  }
}

export default WosStockApi;
