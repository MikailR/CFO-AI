import React, { Component } from "react";
import "./WasteManagement.css";

import WMJumbo from "./Jumbo/WMJumbo.js"
import WMQuoteCarousel from "./QuoteCarousel/WMQuoteCarousel.js"
import WMDetails from "./Details/WMDetails.js"
import Footer from "../../components/Footer/Footer.js";

export class WasteManagement extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="cfo-ai">
          <WMJumbo />
          <WMQuoteCarousel />
          <WMDetails />
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default WasteManagement;
