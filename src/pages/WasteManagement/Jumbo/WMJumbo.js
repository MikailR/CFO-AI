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
                We’ve made it a top priority to minimize the food wastage in
                your restaurant. Our modern waste management tech has been
                designed to pinpoint specific foods that are being wasted in the
                kitchen and by customers.
              </p>

              <p className="paragraph-normal">
                Our camera-scale device can be paired with any bin and can
                generate another dimension of data which can be fed into CFO AI
                so that even more powerful insights can be generated.
              </p>

              <Popup
                modal
                trigger={<a className="register-button">Pre-Register</a>}
              >
                {(close) => <Modal close={close} />}
              </Popup>
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
