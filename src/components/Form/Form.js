import React, { Component } from "react";
import "./Form.css";

import logo from "../../assets/logo-img.png";

export class Form extends Component {
  render() {
    return (
      <div className="mask flex-center-column">
        <form className="form-container flex-center-column">
          <button
            className="close-button flex-center-column"
            onClick={this.props.close}
          >
            &times;
          </button>

          <img src={logo} className="form-logo" />

          <h1 className="form-header">BE THE FIRST TO KNOW</h1>
          <p className="form-paragraph">when we launch</p>

          <div className="name-container">
            <label className="name-label" for="name">
              Full Name *
            </label>
            <input className="name-input" type="text" id="email" name="email" />
          </div>

          <div className="contact-info-container">
            <div className="email-container">
              <label className="email-label" for="email">
                Email *
              </label>
              <input
                className="email-input"
                type="text"
                id="email"
                name="email"
              />
            </div>

            <div className="phone-container">
              <label className="phone-label" for="phone">
                Phone *
              </label>
              <input
                className="phone-input"
                type="text"
                id="phone"
                name="phone"
              />
            </div>
          </div>

          <input className="submit-input" type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Form;
