import React, { Component } from "react";
import "./ContactForm.css";

import robotCFO from "../../../assets/features/robot-cfo.png";

export class ContactForm extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="contact-form flex-center-column">
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
      </React.Fragment>
    );
  }
}

export default ContactForm;
