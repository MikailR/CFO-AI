import React, { Component } from "react";
import "./BPJumbo.css";

import Modal from "../../../components/Modal/Modal.js";

import Popup from "reactjs-popup";

import bankruptcyProtection from "../../../assets/features/bankruptcy-protection.png";

export class BPJumbo extends Component {
  render() {
    return (
      <div className="bankruptcy-protection-jumbo flex-center-row">
        <div className="container-fluid">
          <div className="row">
            <div id="bankruptcy-protection-text" className="col-lg">
              <h1 className="header">Bankruptcy Prevention</h1>
              <p className="paragraph-normal">
                CFO AI introduces a new type of insurance, designed to steer
                your restaurant back onto the path of success when times get
                rough. Instead of waiting for a crisis to happen, CFO AI
                predicts when your restaurant is about to go under and
                automatically qualifies you for micro-financing to ensure that
                you stay afloat.
              </p>

              <Popup
                modal
                trigger={<a className="register-button">Pre-Register</a>}
              >
                {(close) => <Modal close={close} />}
              </Popup>
            </div>
            <div id="bankruptcy-protection-image" className="col-lg flex-center-row">
              <img src={bankruptcyProtection} className="bankruptcy-protection-image" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BPJumbo;
