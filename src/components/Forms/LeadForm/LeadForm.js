import React from "react";
import "./LeadForm.css";

import logo from "../../../assets/logos/logo-img.png";

// Possibly move to back-end when created
const SubmitGS = (e) =>{
  const scriptURL = "https://script.google.com/macros/s/AKfycbwRzBvxsDbyNl9mMn9q9s-v7abp5YxIKsFwvhfXHRASfAxCKnM/exec"
  const form = document.forms['lead-form']

    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
}

const LeadForm = () => {
  return (
    <React.Fragment>
      <form className="lead-form flex-center-column" name="lead-form" onSubmit={SubmitGS}>
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
    </React.Fragment>
  );
};

export default LeadForm;
