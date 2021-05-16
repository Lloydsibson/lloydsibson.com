import React, { useState } from "react";
import "./EmailForm.scss";
import Recaptcha from "react-google-recaptcha";

export const EmailForm = () => {
  // STATE FOR FORMS
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");
  // const [formContactType, setFormContactType] = useState("Who You Are?");
  // const [formInterestedIn, setFormInterestedIn] = useState(
  //   "Interested In? (Optional)"
  // );

  // GOOGLE CAPTCHA - KEY IN NETLIFY ENVIRONMENT VARIBLE
  const RECAPTCHA_KEY = "";
  const [buttonDisabled, setButtonDisabled] = useState(true);
  //
  const checkCheckBox = (e) => {
    const contactFormPrivacyPolicy = document.getElementById("form-pp");
    const formPPContainer = document.querySelector(".form-pp-container");
    if (e.currentTarget.checked === true) {
      console.log("true");
      contactFormPrivacyPolicy.value += "Accepted";
      formPPContainer.classList.remove("error");
    } else {
      console.log("false");
      contactFormPrivacyPolicy.value = "";
    }
  };
  const onSubmitCheckForm = (e) => {
    const contactFormPrivacyPolicy = document.getElementById("form-pp");
    const formPPContainer = document.querySelector(".form-pp-container");

    if (contactFormPrivacyPolicy.value === "Accepted") {
      // DO NOTHING...
    } else {
      formPPContainer.classList.add("error");
      e.preventDefault();
    }
  };

  const resetForm = () => {
    // RESETS FORM FIELDS - UPDATES STATE
    const formPPCheckbox = document.querySelector(".form-pp-container input");
    setFormName("");
    setFormEmail("");
    setFormSubject("");
    // setFormContactType("Who You Are?");
    // setFormInterestedIn("Interested In? (Optional)");
    setFormMessage("");
    formPPCheckbox.checked = false;
  };

  const handleNameChange = (e) => {
    setFormName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setFormEmail(e.target.value);
  };
  // const handleContactTypeChange = (e) => {
  //   setFormContactType(e.target.value);
  // };

  // const handleInterestedInChange = (e) => {
  //   setFormInterestedIn(e.target.value);
  // };

  const handleSubjectChange = (e) => {
    setFormSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setFormMessage(e.target.value);
  };
  return (
    <div className="email-form-container">
      <form
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-recaptcha="true"
        onSubmit={(e) => onSubmitCheckForm(e)}
        // action="https://formspree.io/f/mrgorgwn"
      >
        {/* NETLIFY FORM */}
        <input type="hidden" name="form-name" value="contact-form" />
        {/* ---- */}
        <div className="fs-contact-form-container__inner-container">
          <div className="contact-info-container">
            <label>
              Name:
              <input
                required
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={(e) => handleNameChange(e)}
                value={formName}
              />
            </label>

            <label>
              Email:
              <input
                required
                type="email"
                name="email"
                // name="_replyto"
                placeholder="Email Address"
                onChange={(e) => handleEmailChange(e)}
                value={formEmail}
              />
            </label>

            {/* <select
            name="contact-type"
            required
            onChange={(e) => handleContactTypeChange(e)}
            value={formContactType}
          >
            <option disabled>Who You Are?</option>
            <option value="New Client">New Client</option>
            <option value="Existing Client">Existing Client</option>
            <option value="Recruiter">Recruiter</option>
            <option value="Other">Other</option>
          </select> */}

            {/* <select
            name="interested-in"
            onChange={(e) => handleInterestedInChange(e)}
            value={formInterestedIn}
          >
            <option disabled>Interested In? (Optional)</option>
            <option value="Web Development">Web Development</option>
            <option value="Web Design">Web Design</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Other">Other</option>
          </select> */}

            {/* <label>
      Budget:
      <input
        type="text"
        name="budget"
        placeholder="Budget (Optional)"
      ></input>
    </label> */}
            <label>
              Subject:
              <input
                required
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={(e) => handleSubjectChange(e)}
                value={formSubject}
              />
            </label>
          </div>
          <input type="text" name="privacy-policy" id="form-pp" hidden />
          {/* <input type="text" name="_gotcha" hidden /> */}

          <div className="contact-message-container">
            <label>
              Message:
              <textarea
                required
                name="message"
                placeholder="Message"
                onChange={(e) => handleMessageChange(e)}
                value={formMessage}
              />
            </label>
          </div>
        </div>

        <div className="v-container">
          <Recaptcha
            sitekey={RECAPTCHA_KEY}
            size="normal"
            theme="dark"
            tabindex
            id="recaptcha-google"
            onChange={() => setButtonDisabled(false)}
            // callback={}
            onExpired={() => setButtonDisabled(true)}
            onErrored={() => setButtonDisabled(true)}
          />

          {/* CUSTOM CHECKBOX FOR PP */}
          <div className="form-pp-container">
            <label className="control checkbox">
              <input type="checkbox" onChange={(e) => checkCheckBox(e)} />
              <span className="control-indicator"></span>
              <p>
                I understand that Monocode will securely hold my data in
                accordance with their privacy policy.
              </p>
            </label>
          </div>
        </div>

        <div className="submit-container">
          <button
            className="btn-primary-two"
            type="submit"
            disabled={buttonDisabled}
          >
            Send Message
          </button>
          <div
            className="reset-form"
            role="button"
            tabIndex="0"
            onKeyDown={resetForm}
            onClick={resetForm}
          >
            Clear Form
          </div>
        </div>
      </form>
    </div>
  );
};
