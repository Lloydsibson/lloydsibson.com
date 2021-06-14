import React from "react";
import Slider from "react-slick";
import "./Testimonials.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonials = () => {
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
                src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1579535402/img/carla-review.jpg"
                alt="Reviewer"
              />
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
            <div className="review-container__text-container">
              <p>
                He is exceptional at using HTML, CSS, And JavaScript to deliver
                pixel perfect and responsive pages from our UI/UX designs.
                {/* I worked with Lloyd on the same Agile team at WOS Group. He is
                  a very passionate and knowledgeable Front-End Developer. Also
                  exceptional at using HTML, CSS, And JavaScript to deliver
                  pixel perfect user interfaces and responsive content pages
                  from our UI/UX designs. A natural problem solver, creative and
                  easily approachable. Lloyd is a great asset to any company and
                  he has my full recommendation. */}
              </p>
            </div>
            <div className="review-container__client-details">
              <h5>Carla Cabeça</h5>
              <p>FARFETCH</p>
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
                src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1579535402/img/livia-review.jpg"
                alt="Reviewer"
              />
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
            <div className="review-container__text-container">
              <p>
                Lloyd has looked at processes and devised more functional and
                seamless ways for customers to have a pleasant journey.
                {/* Lloyd has joined the team as a front end developer and has
                  showed focus and commitment, he has been proactive, always
                  holding customer experience in mind. He has looked at
                  processes and devised more functional and seamless ways for
                  customers to either have a pleasant browsing journey or get
                  the product they are looking for, all while being a great team
                  member. */}
              </p>
            </div>
            <div className="review-container__client-details">
              <h5>Livia Nestianu</h5>
              <p>Watches of Switzerland</p>
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
                A great guy to work with. He did a fantastic job on my new logo
                and marketing material. Brilliant support too. 5 Stars!
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
};
