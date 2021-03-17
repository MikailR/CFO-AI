import React, { Component } from "react";
import "./SAMOptimization.css";

import SAMOJumbo from "./Jumbo/SAMOJumbo.js";
import SAMOQuoteCarousel from "./QuoteCarousel/SAMOQuoteCarousel.js";
import SAMODetails from "./Details/SAMODetails.js";
import DemoVideo from "../../components/DemoVideo/DemoVideo.js";

export class SAMOptimization extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="cfo-ai">
          <SAMOJumbo lang={this.props.lang} textGenerator={this.props.textGenerator} />
          <SAMOQuoteCarousel lang={this.props.lang} textGenerator={this.props.textGenerator} />
          <SAMODetails lang={this.props.lang} textGenerator={this.props.textGenerator} />
          <DemoVideo />
        </div>
      </React.Fragment>
    );
  }
}

export default SAMOptimization;
