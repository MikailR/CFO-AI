import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar.js";
import Carousel, { consts } from "react-elastic-carousel";
import Item from "./components/Item/Item.js";
import CarouselContent from "./assets/CarouselContent.js";

class App extends Component {
  state = {
    carouselContent: [],
  };

  componentDidMount() {
    this.setState({ carouselContent: CarouselContent });
  }

  myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? "👈" : "👉";
    return (
      <a className="pointer flex-center-column" onClick={onClick}>
        {pointer}
      </a>
    );
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>

        {/* <Carousel
          className="carousel-background flex-center-column"
          renderPagination={(e) => <div></div>}
          renderArrow={this.myArrow}
        >
          {this.state.carouselContent.map((slide) => {
            return <Item {...slide} className="row item"></Item>;
          })}
        </Carousel> */}

        <div className="features flex-center-column">
          <h1 className="features-head">Explore the best features of CFO AI</h1>
          {/* <Item></Item> */}
          <div className="dummy-content"></div>
        </div>
      </div>
    );
  }
}

export default App;

// renderPagination={(e) => <div></div>}
