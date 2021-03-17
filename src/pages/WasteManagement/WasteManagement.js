import React, { Component } from "react";
import "./WasteManagement.css";

import WMJumbo from "./Jumbo/WMJumbo.js"
import WMQuoteCarousel from "./QuoteCarousel/WMQuoteCarousel.js"
import WMDetails from "./Details/WMDetails.js"
import DemoVideo from "../../components/DemoVideo/DemoVideo.js";

export class WasteManagement extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="cfo-ai">
          <WMJumbo textGenerator={this.props.textGenerator} />
          <WMQuoteCarousel textGenerator={this.props.textGenerator} />
          <WMDetails textGenerator={this.props.textGenerator} />
          <DemoVideo />
        </div>
      </React.Fragment>
    );
  }
}

export default WasteManagement;
