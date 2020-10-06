import React, { Component } from "react";
import "./Contact.css";

import robotCFOContact from "../../assets/contact/robot-cfo-contact.png";

import ContactForm from "../../components/Forms/ContactForm/ContactForm.js";

export class Contact extends Component {
  render() {
    return (
      <div className="contact flex-center-column">
        <div className="contact-form-container container">
          <h1 className="form-header">GOT A QUESTION?</h1>
          <p className="form-paragraph">
            Then we'd love to talk with you!
          </p>

          <div className="row">
            <div className="col-lg flex-center-column">
              <img src={robotCFOContact} className="contact-image" />
            </div>
            <div className="col-lg flex-center-column">
                <ContactForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
