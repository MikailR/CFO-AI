import React, { Component } from "react";
import "./WMJumbo.css";

import Modal from "../../../components/Modal/Modal.js";
import BulletPoint from "../../../components/BulletPoint/BulletPoint.js";

import Popup from "reactjs-popup";

import wasteManagement from "../../../assets/features/waste-management.png";

export class WMJumbo extends Component {
  textGenerator(e, m) {
    return this.props.textGenerator(e, m);
  }

  render() {
    return (
      <div className="waste-management-jumbo flex-center-row">
        <div className="container-fluid">
          <div className="row">
            <div id="waste-management-text" className="col-lg">
              <h1 className="header">
                {this.textGenerator("Waste Management", "损耗管理")}
              </h1>
              <p className="paragraph-normal">
                {this.textGenerator(
                  "Food waste greatly impacts profitability. So, we have made minimizing the food wastage in your restaurant a top priority. From your menu, POS system reports and inventory order records, we identify where your wastage can be reduced.",
                  "食材损耗极大影响了餐厅利润。因此，我们把减少餐厅的食材损耗作为首要任务。从您的菜单、POS系统报告和库存订单记录中，我们会找出可以减少损耗的地方。"
                )}
              </p>

              <p className="paragraph-normal">
                {this.textGenerator(
                  "We may also introduce you to waste management tech designed to pinpoint specific foods that are being wasted in the kitchen and by your customers. A simple camera and scale installed on your bins will generate insights for reducing inventory orders and menu item recipe changes.",
                  "我们的损耗管理技术可以发现损耗是在厨房还是经营的其他环节。在您的餐厨垃圾桶上安装一个简单的摄像头和秤，将有助于找到优化库存订单和材料搭配的方式。找到如何减少库存订单和菜品配方变化的灵感。"
                )}
              </p>

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
