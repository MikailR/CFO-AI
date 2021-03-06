import React, { Component } from "react";
import "./CFOAI.css";

import CFOAIJumbo from "./Jumbo/CFOAIJumbo.js";
import CFOAIQuoteCarousel from "./QuoteCarousel/CFOAIQuoteCarousel.js";
import CFOAIDetails from "./Details/CFOAIDetails.js";
import DemoVideo from "../../components/DemoVideo/DemoVideo.js";

import Popup from "reactjs-popup";

export class CFOAI extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="cfo-ai">
          <CFOAIJumbo lang={this.props.lang} textGenerator={this.props.textGenerator} />
          <CFOAIQuoteCarousel lang={this.props.lang} textGenerator={this.props.textGenerator} />
          <CFOAIDetails lang={this.props.lang} textGenerator={this.props.textGenerator} />
          <DemoVideo />
        </div>
      </React.Fragment>
    );
  }
}

export default CFOAI;
