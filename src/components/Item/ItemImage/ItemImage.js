import React, { Component } from "react";
import "./ItemImage.css";

class ItemImage extends Component {
  render() {
    return (
      <div id="image" className={this.props.className}>
        <img src={this.props.robot} className="robot" />
      </div>
    );
  }
}

export default ItemImage;
