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
                We’ve made it a top priority to minimize the wastage in your
                restaurant. Our partnership with KITRO allows CFO AI to keep
                track of all foods wasted in your kitchen and by your customers.
              </p>

              <p className="paragraph-normal">
                By combining this data with all other metrics and predictions,
                CFO AI lets you know the ingredients that customers are throwing
                away and presents the most profitable and sustainable menu
                changes. It also optimizes the efficiency of your inventory by
                predicting when certain menu items will be in higher demand and
                ordering exactly what’s needed to avoid wastage.
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
