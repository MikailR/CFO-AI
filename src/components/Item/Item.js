import React, { Component } from "react";
import "./Item.css";

import ItemText from "./ItemText/ItemText.js";
import ItemImage from "./ItemImage/ItemImage.js";

const stringify = require("json-stringify");

class Item extends Component {
  static Text = ItemText;
  static Image = ItemImage;

  render() {
    return (
      <div id="item" className={this.props.className}>
        <Item.Text {...this.props.text} className="col-lg"></Item.Text>
        <Item.Image
          robot={this.props.image}
          className="col-lg-auto"
        ></Item.Image>
      </div>
    );
  }
}

export default Item;
