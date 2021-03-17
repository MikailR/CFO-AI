import React, { Component } from "react";
import "./Contact.css";

import robotCFOContact from "../../assets/contact/robot-cfo-contact.png";

import ContactForm from "../../components/Forms/ContactForm/ContactForm.js";

export class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="contact flex-center-column">
          <div className="contact-form-container container">
            <h1 className="form-header">
            {this.props.textGenerator("GOT A QUESTION?", "还有疑问吗？")}
            
            </h1>
            <p className="form-paragraph">
            {this.props.textGenerator("Then we'd love to talk with you!", "我们很乐意解答您的疑惑！")}
            
            </p>

            <div className="row">
              <div className="col-lg flex-center-column">
                <img src={robotCFOContact} className="contact-image" />
              </div>
              <div className="col-lg flex-center-column">
                <ContactForm textGenerator={this.props.textGenerator}/>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
