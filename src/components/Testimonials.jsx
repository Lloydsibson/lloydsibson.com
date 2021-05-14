import React, { Component } from "react";
import Slider from "react-slick";
import "./Testimonials.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
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
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };
    return (
      <div className="testomonials-container">
        {/* <div className="testomonials-container__title">
          <h2>Testimonials</h2>
        </div> */}
        <Slider {...settings}>
          <div className="review-item">
            <div className="review-container">
              <div className="review-container__image-container">
                <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1583323291/img/cam-review.jpg"
                  alt="Reviewer"
                />
                <div className="spinner">
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
                </div>
              </div>
              <div className="review-container__text-container">
                <p>
                  Awesome team to work with, have done an incredible job on my
                  website and the ongoing design. Would 10/10 recomend!!
                </p>
              </div>
              <div className="review-container__client-details">
                <h5>Cameron Hamilton</h5>
                <p>Arclight Promotions</p>
              </div>
            </div>
          </div>
          <div className="review-item">
            <div className="review-container">
              <div className="review-container__image-container">
                <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1583323291/img/bea-review.jpg"
                  alt="Reviewer"
                />
                <div className="spinner">
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
                </div>
              </div>
              <div className="review-container__text-container">
                <p>
                  Such creative and perfectionist team, Lloyd has been doing a
                  great job with my website, highly recommend to anyone.
                </p>
              </div>
              <div className="review-container__client-details">
                <h5>Beatriz Meireles</h5>
                <p>Bea Sports Injury Clinic</p>
              </div>
            </div>
          </div>
          <div className="review-item">
            <div className="review-container">
              <div className="review-container__image-container">
                <img
                  src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1579535402/img/j-review.jpg"
                  alt="Reviewer"
                />
                <div className="spinner">
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
                </div>
              </div>
              <div className="review-container__text-container">
                <p>
                  A great guy to work with. He did a fantastic job on my new
                  logo and marketing material. Brilliant support too. 5 Stars!
                </p>
              </div>
              <div className="review-container__client-details">
                <h5>Jacob Baker</h5>
                <p>JMGB Accountacy Services</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
