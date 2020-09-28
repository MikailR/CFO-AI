import React, { Component } from "react";
import "./FeatureText.css";

export class FeatureText extends Component {
  getStyle() {
    return {
        color: '#313438'
    }
  }

  render() {
    return (
      <div id="feature-text" className={this.props.className}>
        <h1 style={this.getStyle()} className="header">
          {this.props.text.headline}
        </h1>
        <p style={this.getStyle()} className="paragraph-normal">{this.props.text.paragraph1}</p>

        <p style={this.getStyle()} className="paragraph-bold">{this.props.text.paragraph2}</p>

        <a className="demo-button" href="/">
          {this.props.text.button}
        </a>
      </div>
    );
  }
}

export default FeatureText;
