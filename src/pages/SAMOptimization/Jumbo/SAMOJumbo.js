import React, { Component } from "react";
import "./SAMOJumbo.css";

import Modal from "../../../components/Modal/Modal.js";

import Popup from "reactjs-popup";

import employeeOptimization from "../../../assets/features/employee-optimization.png";

export class SAMOJumbo extends Component {
  textGenerator(e, m) {
    return this.props.textGenerator(e, m);
  }

  // {this.textGenerator("", "")}

  render() {
    return (
      <div className="samo-jumbo flex-center-row">
        <div className="container-fluid">
          <div className="row">
            <div id="samo-text" className="col-lg">
              <h1 className="header">
                {this.textGenerator("Hospitality Tech", "服务管理技术")}
              </h1>
              <p className="paragraph-normal">
                {this.textGenerator(
                  "A partner in our 600+ restaurant community found that servers spend around 14 minutes with guests. From these 14 minutes, only 2 are spent entertaining your guests. The rest occupied with the boring, dreary stuff. CFO AI’s hospitality tech takes care of the routine stuff by having each customer order directly from the kitchen.",
                  "一位来自于我们600多家全球餐厅网络的合作伙伴发现，服务员与客户相处的时间大约为14分钟。在这14分钟里，只有2分钟是直接为客户提供服务，其余的时间却被琐碎的事情所占据。CFOai的服务管理技术通过让每位顾客直接在系统点单，提高整个流程的效率。"
                )}
              </p>

              <p className="paragraph-normal">
                {this.textGenerator(
                  "Now your staff can focus nearly 100% of time on providing a warm customer experience to keep your seats filled.",
                  "现在，您的员工可以将100%的时间集中在提供服务，提高客户体验上，让您的餐厅座无虚席。"
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
