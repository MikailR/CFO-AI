import React, { Component } from "react";
import "./CFOAIJumbo.css";

import Modal from "../../../components/Modal/Modal.js";
import BulletPoint from "../../../components/BulletPoint/BulletPoint.js";

import Popup from "reactjs-popup";

import robotCFO from "../../../assets/features/robot-cfo.png";

import CFOAIJumboContent from "../../../assets/jumbos/CFOAIJumboContent.js";

export class CFOAIJumbo extends Component {
  textGenerator(e, m) {
    return this.props.textGenerator(e, m);
  }

  render() {
    return (
      <div className="cfo-ai-jumbo flex-center-row">
        <div className="container-fluid">
          <div className="row">
            <div id="cfo-ai-text" className="col-lg">
              <h1 className="header">
                {this.textGenerator("Introducing CFO AI", "CFOai简介")}
              </h1>
              <p className="paragraph-normal">
                {this.textGenerator(
                  "It uses key statistics from our restaurant community to create a virtual set of representative restaurants. This virtual set can then benchmark your most recent business metrics to generate actionable insights that:",
                  "它使用我们全球合作餐厅的数据来创建一组具有代表性的指标，这些指标可以对您最近的经营进行基准测试，以产生建设性意见。"
                )}
              </p>

              <div className="bullet-container">
                {CFOAIJumboContent.map((detail, index) => {
                  return (
                    <BulletPoint text={detail[this.props.lang]} key={index} />
                  );
                })}
              </div>

              <div className="button-container">
                <a href="https://onboarding.cfo-ai.com/" className="demo-link" target="_blank">
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
