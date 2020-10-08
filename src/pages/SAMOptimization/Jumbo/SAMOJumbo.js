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
                Great hospitality skyrockets your customer retention, but a
                Swedish time in motion study found that restaurant employees
                spend less than 15% of their time entertaining and engaging with
                customers.
              </p>

              <p className="paragraph-normal">
                To combat this inefficiency and maximize your employee
                productivity, CFO AI tracks both your sales data and your
                employee performance while on shift. It predicts when your
                restaurant will be busiest and suggests the best employees and
                staff-to-table ratios to put on those shifts for amplified
                profits.
              </p>

              <Popup
                modal
                trigger={<a className="register-button">Pre-Register</a>}
              >
                {(close) => <Modal close={close} />}
              </Popup>
            </div>
            <div
              id="samo-image"
              className="col-lg flex-center-row"
            >
              <img
                src={employeeOptimization}
                className="samo-image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SAMOJumbo;
