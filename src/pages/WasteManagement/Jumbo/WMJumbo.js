import React, { Component } from "react";
import "./WMJumbo.css";

import Modal from "../../../components/Modal/Modal.js";
import BulletPoint from "../../../components/BulletPoint/BulletPoint.js";

import Popup from "reactjs-popup";

import wasteManagement from "../../../assets/features/waste-management.png";

export class WMJumbo extends Component {
  render() {
    return (
      <div className="waste-management-jumbo flex-center-row">
        <div className="container-fluid">
          <div className="row">
            <div id="waste-management-text" className="col-lg">
              <h1 className="header">Waste Management</h1>
              <p className="paragraph-normal">
                Food waste greatly impacts profitability. So, we have made
                minimizing the food wastage in your restaurant a top priority.
                From your menu, POS system reports and inventory order records,
                we identify where your wastage can be reduced.
              </p>

              <p className="paragraph-normal">
                We may also introduce you to waste management tech designed to
                pinpoint specific foods that are being wasted in the kitchen and
                by your customers. A simple camera and scale installed on your
                bins will generate insights for reducing inventory orders and
                menu item recipe changes.
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
            <div id="waste-management-image" className="col-lg flex-center-row">
              <img src={wasteManagement} className="waste-management-image" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WMJumbo;
