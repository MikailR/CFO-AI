import React, { Component } from "react";
import Feature from "./Feature.js";

import './Features.css';

export class Features extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.features.map((feature) => (
          <Feature feature={feature} className="feature"/>
        ))}
      </div>
    );
  }
}

export default Features;