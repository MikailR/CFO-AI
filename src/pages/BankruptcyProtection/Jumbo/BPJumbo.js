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
                CFO AI introduces a new type financial management service
                designed to steer your restaurant back onto the path of success
                when times get rough.
              </p>
              <p className="paragraph-normal">
                Instead of you unknowingly falling into a bankruptcy, CFO AI is
                continuously monitoring whether your restaurant has started
                trending towards financial ruin. Once a dangerous trend is
                spotted, CFO AI automatically determines corrective action and
                qualifies you for micro-financing with the funds to redress the
                situation.
              </p>

              <div className="button-container">
                <a href="https://demo.cfo-ai.com/" className="demo-link">
                  Try Demo
                </a>
                <Popup
                  modal
                  trigger={<a className="register-button">Pre-Register</a>}
                >
                  {(close) => <Modal close={close} />}
                </Popup>
              </div>
            </div>
            <div
              id="bankruptcy-protection-image"
              className="col-lg flex-center-row"
            >
              <img
                src={bankruptcyProtection}
                className="bankruptcy-protection-image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BPJumbo;
