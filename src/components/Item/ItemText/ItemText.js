import React, { Component } from "react";
import "./ItemText.css";

const stringify = require("json-stringify");

class ItemText extends Component {
  render() {
    return (
      <div id="text" className={this.props.className}>
        <h1 className="header">{this.props.headline}</h1>

        <p className="paragraph-normal">
          {this.props.paragraph1}
        </p>

        <p className="paragraph-bold">
        {this.props.paragraph2}
        </p>

        <a className="register-button" href="/">
        {this.props.button}
        </a>
      </div>
    );
  }
}

export default ItemText;
