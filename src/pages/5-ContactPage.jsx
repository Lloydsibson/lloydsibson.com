import React from "react";
import "./5-ContactPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { EmailForm } from "../components/EmailForm";
import { Testimonials } from "../components/Testimonials";

export const ContactPage = () => {
  return (
    <>
      <div className="page-title-container">
        <h1>Contact</h1>
        <p>Lets Chat</p>
      </div>
      <Testimonials />
      <div className="content-container">
        <div className="content-container__contact-details-container">
          <div className="contact-cta-container">
            <div className="contact-cta-container__icon">
              <a href="https://api.whatsapp.com/send?phone=447462944899">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
            <div className="contact-cta-container__text">
              <h5>WhatsApp</h5>
              <p>
                Need help fast? Click
                <a href="https://api.whatsapp.com/send?phone=447462944899">
                  here
                </a>
                to message me on WhatsApp (faster response time).
              </p>
            </div>
          </div>
          <div className="contact-cta-container">
            <div className="contact-cta-container__icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="contact-cta-container__text">
              <h5>Leicester, UK</h5>
              <p>
                Located in the East Midlands. Open to projects and remote roles
                - UK wide.
              </p>
            </div>
          </div>
          <div className="contact-cta-container">
            <div className="contact-cta-container__icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="contact-cta-container__text">
              <h5>Email</h5>
              <p>
                Just fill out the email form. I aim to respond to all enquiries
                within 3 working days.
              </p>
            </div>
          </div>
        </div>

        <div
          className="content-container__message-container"
          onClick={methodDoesNotExist}
        >
          <h2>How Can I Help You?</h2>
          <EmailForm />
        </div>
      </div>
    </>
  );
};
