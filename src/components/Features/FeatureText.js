import React, { Component } from "react";
import "./FeatureText.css";

import { Link } from "react-router-dom";

export class FeatureText extends Component {
  render() {
    return (
      <div id="feature-text" className={this.props.className}>
        <h1 className="header">
          {this.props.text.headline}
        </h1>
        <p className="paragraph-normal">
          {this.props.text.paragraph1}
        </p>

        <p className="paragraph-bold">
          {this.props.text.paragraph2}
        </p>

        {/* TODO: Design and add copy to these pages */}
        <Link to={this.props.text.buttonPath} className="demo-button">
          {this.props.text.button}
        </Link>
      </div>
    );
  }
}

export default FeatureText;
