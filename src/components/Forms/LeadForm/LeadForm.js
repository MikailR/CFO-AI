import React from "react";
import "./LeadForm.css";

import logo from "../../../assets/logos/logo-img.png";

const LeadForm = () => {
  return (
    <React.Fragment>
      <form className="lead-form flex-center-column">
        <img src={logo} className="form-logo" />

        <h1 className="form-header">BE THE FIRST TO KNOW</h1>
        <p className="form-paragraph">when we launch</p>

        <div className="name-container">
          <input
            className="name-input"
            type="text"
            id="lead-name"
            name="lead-name"
            placeholder="Full Name"
            required
          />
        </div>

        <div className="contact-info-container">
          <div className="email-container">
            <input
              className="email-input"
              type="text"
              id="lead-email"
              name="lead-email"
              placeholder="Email"
              required
            />
          </div>

          <div className="phone-container">
            <input
              className="phone-input"
              type="text"
              id="lead-phone"
              name="lead-phone"
              placeholder="Phone Number"
              required
            />
          </div>
        </div>

        <input className="submit-input" type="submit" value="Submit"></input>
      </form>

      {/* Embed Google Sheets Script */}
    </React.Fragment>
  );
};

export default LeadForm;
