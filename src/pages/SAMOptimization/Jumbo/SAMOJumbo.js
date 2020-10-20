import React, { Component } from "react";
import "./SAMOJumbo.css";

import Modal from "../../../components/Modal/Modal.js";

import Popup from "reactjs-popup";

import employeeOptimization from "../../../assets/features/employee-optimization.png";

export class SAMOJumbo extends Component {
  render() {
    return (
      <div className="samo-jumbo flex-center-row">
        <div className="container-fluid">
          <div className="row">
            <div id="samo-text" className="col-lg">
              <h1 className="header">Staff And Menu Optimization</h1>
              <p className="paragraph-normal">
                A partner in our 600+ restaurant community found that servers
                spend around 14 minutes with guests. From these 14 minutes, only
                2 are spent entertaining your guests. The rest occupied with the
                boring, dreary stuff. CFO AI’s hospitality tech takes care of
                the routine stuff by having each customer order directly from
                the kitchen.
              </p>

              <p className="paragraph-normal">
                Now your staff can focus near 100% of time on providing a warm
                customer experience that keeps your seats filled.
              </p>

              <Popup
                modal
                trigger={<a className="register-button">Pre-Register</a>}
              >
                {(close) => <Modal close={close} />}
              </Popup>
            </div>
            <div id="samo-image" className="col-lg flex-center-row">
              <img src={employeeOptimization} className="samo-image" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SAMOJumbo;
