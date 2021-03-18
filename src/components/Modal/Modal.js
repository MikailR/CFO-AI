import React from "react";
import "./Modal.css";

import LeadForm from "../Forms/LeadForm/LeadForm.js";

function Modal({ close, textGenerator }) {
  return (
    <React.Fragment>
      <div className="mask" onClick={close} />

      <div className="lead-form-container flex-center-column">
        <button className="close-button flex-center-column" onClick={close}>
          &times;
        </button>

        <LeadForm textGenerator={textGenerator} />
      </div>
    </React.Fragment>
  );
}

export default Modal;
