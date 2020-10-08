import React, { Component } from "react";
import "./BankruptcyProtection.css";

import BPJumbo from "./Jumbo/BPJumbo.js";
import BPDetails from "./Details/BPDetails.js";
import Footer from "../../components/Footer/Footer.js";

export class BankruptcyProtection extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bankruptcy-protection">
          <BPJumbo />
          <BPDetails />
        </div>

        <Footer color={"#c1d0da"} />
      </React.Fragment>
    );
  }
}

export default BankruptcyProtection;
