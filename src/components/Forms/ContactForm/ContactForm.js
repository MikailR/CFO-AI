import React, { Component } from "react";
import "./ContactForm.css";

import logo from "../../../assets/logos/logo-img.png";

export class ContactForm extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="contact-form flex-center-column">
          <div id="contact-form-logo">
            <img className="contact-form-logo" src={logo} alt="logo"/>
          </div>
          <p className="contact-form-disclaimer">
            Feel free to ask us anything below
          </p>
          <input
            className="name-input"
            type="text"
            id="contact-name"
            name="contact-name"
            placeholder="Full Name"
            required
          />

          <input
            className="email-input"
            type="text"
            id="contact-email"
            name="contact-email"
            placeholder="What's your email?"
            required
          />

          <textarea
            className="question-input"
            name="contact-question"
            placeholder="Your questions ..."
            rows="5"
          />

          <input
            className="submit-input"
            type="submit"
            value="Send Message"
          ></input>
        </form>

        {/* Embed Google Sheets Script */}
      </React.Fragment>
    );
  }
}

export default ContactForm;
