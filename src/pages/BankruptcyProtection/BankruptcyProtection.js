import React, { Component } from "react";
import "./BankruptcyProtection.css";

import BPJumbo from "./Jumbo/BPJumbo.js";
import BPDetails from "./Details/BPDetails.js";
import DemoVideo from "../../components/DemoVideo/DemoVideo.js";

export class BankruptcyProtection extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bankruptcy-protection">
          <BPJumbo />
          <BPDetails />
          <DemoVideo />
        </div>
      </React.Fragment>
    );
  }
}

export default BankruptcyProtection;
