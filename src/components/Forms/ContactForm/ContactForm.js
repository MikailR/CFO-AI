import React, { Component } from "react";
import "./ContactForm.css";

import logo from "../../../assets/logos/logo-img.png";

// Possibly move to back-end when created
const SubmitGS = (e) => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw84Z8ACNwugufKe6NPv3niQ_BT6W5gEXvYSKHLu_LD0BPRGzg/exec";
  const form = document.forms["contact-form"];

  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
};

export class ContactForm extends Component {
  textGenerator(e, m) {
    return this.props.textGenerator(e, m);
  }

  render() {
    return (
      <React.Fragment>
        <form
          className="contact-form flex-center-column"
          name="contact-form"
          onSubmit={SubmitGS}
        >
          <div id="contact-form-logo">
            <img className="contact-form-logo" src={logo} alt="logo" />
          </div>
          <p className="contact-form-disclaimer">
            {this.textGenerator(
              "Feel free to ask us anything below",
              "将您的问题告诉我们"
            )}
          </p>
          <input
            className="name-input"
            type="text"
            id="contact-name"
            name="contact-name"
            placeholder={this.textGenerator("Full name", "您的名字")}
            required
          />

          <input
            className="email-input"
            type="text"
            id="contact-email"
            name="contact-email"
            placeholder={this.textGenerator("What's your email?", "您的邮箱")}
            required
          />

          <textarea
            className="question-input"
            name="contact-question"
            placeholder={this.textGenerator("Your questions ...", "描述问题")}
            rows="5"
            required
          />

          <input
            className="submit-input"
            type="submit"
            value={this.textGenerator("Send Message", "发送消息")}
          ></input>
        </form>
      </React.Fragment>
    );
  }
}

export default ContactForm;
