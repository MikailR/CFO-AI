import React, { Component } from "react";
import "./FeatureText.css";

import { Link } from "react-router-dom";

export class FeatureText extends Component {
  render() {
    return (
      <div id="feature-text" className={this.props.className}>
        <h1 className="header">
          {this.props.text[this.props.lang].headline}
        </h1>
        <p className="paragraph-normal">
          {this.props.text[this.props.lang].paragraph1}
        </p>

        <p className="paragraph-bold">
          {this.props.text[this.props.lang].paragraph2}
        </p>

        <Link to={this.props.text.buttonPath} className="demo-button">
          {this.props.text[this.props.lang].button}
        </Link>
      </div>
    );
  }
}

export default FeatureText;
