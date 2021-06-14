import React from "react";
import Slider from "react-slick";
import "./Clients.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Clients = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="testomonials-container clients">
      <div className="subheading-container">
        <h2>Companies & Clients</h2>
      </div>
      <Slider {...settings}>
        <div className="client-item">
          <h3>Rolex</h3>
        </div>
        <div className="client-item">
          <h3>Watches of Switzerland PLC</h3>
        </div>
        <div className="client-item">
          <h3>APUK</h3>
        </div>
        <div className="client-item">
          <h3>Bea Sports Injury Clinic</h3>
        </div>
        <div className="client-item">
          <h3>JMGB Accountancy Services</h3>
        </div>
        <div className="client-item">
          <h3>The Access Group</h3>
        </div>
        <div className="client-item">
          <h3>Asia Mart Online</h3>
        </div>
        <div className="client-item">
          <h3>No Ill Will</h3>
        </div>
        <div className="client-item">
          <h3>Ghosts Of Onyx</h3>
        </div>
      </Slider>
    </div>
  );
};
