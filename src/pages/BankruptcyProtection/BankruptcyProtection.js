import React, { Component } from "react";
import "./BankruptcyProtection.css";

import BPJumbo from "./Jumbo/BPJumbo.js";
import BPDetails from "./Details/BPDetails.js";
import DemoVideo from "../../components/DemoVideo/DemoVideo.js";
import Footer from "../../components/Footer/Footer.js";

export class BankruptcyProtection extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bankruptcy-protection">
          <BPJumbo />
          <BPDetails />
          <DemoVideo />
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default BankruptcyProtection;
