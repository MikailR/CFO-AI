import React, { Component } from "react";
import "./BPJumbo.css";

import Modal from "../../../components/Modal/Modal.js";

import Popup from "reactjs-popup";

import bankruptcyProtection from "../../../assets/features/bankruptcy-protection.png";

export class BPJumbo extends Component {
  textGenerator(e, m) {
    return this.props.textGenerator(e, m);
  }

  render() {
    return (
      <div className="bankruptcy-protection-jumbo flex-center-row">
        <div className="container-fluid">
          <div className="row">
            <div id="bankruptcy-protection-text" className="col-lg">
              <h1 className="header">
                {this.textGenerator("Bankruptcy Prevention", "预防破产")}
              </h1>
              <p className="paragraph-normal">
                {this.textGenerator(
                  "CFOai introduces a new type financial management service designed to steer your restaurant back onto the path of success when times get rough.",
                  "CFOai推出了一种新型的财务管理服务，旨在帮助您的餐厅在困难时期东山再起。"
                )}
              </p>
              <p className="paragraph-normal">
                {this.textGenerator(
                  "Instead of you unknowingly falling into a bankruptcy, CFOai is continuously monitoring whether your restaurant has started trending towards financial ruin. Once a dangerous trend is spotted, CFOai automatically determines corrective action and qualifies you for micro-financing with the funds to redress the situation.",
                  "与其让您在不知不觉中陷入破产困局，不如让CFOai实时监测您的餐厅是否开始出现财务破产危机。一旦发现危机，CFOai会自动开启纠正措施，并使您获得小额融资的资格，提供资金来帮助您度过难关。"
                )}
              </p>

              <div className="button-container">
                <a href="https://demo.cfo-ai.com/" className="demo-link">
                  {this.textGenerator("Try Demo", "演示")}
                </a>
                <Popup
                  modal
                  trigger={
                    <a className="register-button">
                      {this.textGenerator("Pre-Register", "抢先注册")}
                    </a>
                  }
                >
                  {(close) => <Modal close={close} textGenerator={this.props.textGenerator} />}
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
