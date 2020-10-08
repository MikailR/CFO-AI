import React, { Component } from "react";
import "./SAMOptimization.css";

import SAMOJumbo from "./Jumbo/SAMOJumbo.js";
import SAMOQuoteCarousel from "./QuoteCarousel/SAMOQuoteCarousel.js";
import SAMODetails from "./Details/SAMODetails.js";
import Footer from "../../components/Footer/Footer.js";

export class SAMOptimization extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="cfo-ai">
          <SAMOJumbo />
          <SAMOQuoteCarousel />
          <SAMODetails />
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default SAMOptimization;
