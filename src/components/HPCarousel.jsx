import React, { Component } from "react";
import Slider from "react-slick";
import "./HPCarousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class HPCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 3500,
      //responsive: [
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      // {
      //   breakpoint: 900,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      // {
      //   breakpoint: 700,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
      //],
    };
    return (
      <Slider {...settings}>
        <div className="hp-title">
          <h2>Developer</h2>
        </div>
        <div className="hp-title">
          <h2>Designer</h2>
        </div>
        <div className="hp-title">
          <h2>Creative</h2>
        </div>
      </Slider>
    );
  }
}
