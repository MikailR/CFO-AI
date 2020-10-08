import React, { Component } from "react";
import "./CFOAI.css";

import CFOAIJumbo from "./Jumbo/CFOAIJumbo.js";
import CFOAIQuoteCarousel from "./QuoteCarousel/CFOAIQuoteCarousel.js";
import CFOAIDetails from "./Details/CFOAIDetails.js"
import Footer from "../../components/Footer/Footer.js";


export class CFOAI extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="cfo-ai">
          <CFOAIJumbo />
          <CFOAIQuoteCarousel />
          <CFOAIDetails />
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default CFOAI;
