import React, { Component } from "react";
import "./CFOAIJumbo.css";

import Modal from "../../../components/Modal/Modal.js";
import BulletPoint from "../../../components/BulletPoint/BulletPoint.js";

import Popup from "reactjs-popup";

import robotCFO from "../../../assets/features/robot-cfo.png";

export class CFOAIJumbo extends Component {
  render() {
    return (
      <div className="cfo-ai-jumbo flex-center-row">
        <div className="container-fluid">
          <div className="row">
            <div id="cfo-ai-text" className="col-lg">
              <h1 className="header">Introducing CFO AI</h1>
              {/* <p className="paragraph-normal">
                The one stop software for your restaurant’s financial health and
                management.
              </p> */}

              <p className="paragraph-normal">
                It benchmarks only your most recent business metrics against a virtual set of representative restaurants, created using the key statistics from our restaurant community, to generate data-driven, actionable insights to:
              </p>

              <div className="bullet-container">
                <BulletPoint text="Maximize your profits" />
                <BulletPoint text="Minimize costly wastage" />
                <BulletPoint text="Improve key metrics" />
                <BulletPoint text="Bring you to peak efficiency" />

              </div>

              <Popup
                modal
                trigger={<a className="register-button">Pre-Register</a>}
              >
                {(close) => <Modal close={close} />}
              </Popup>
            </div>
            <div id="cfo-ai-image" className="col-lg flex-center-row">
              <img src={robotCFO} className="cfo-ai-image" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CFOAIJumbo;
