import React, { Component } from "react";
import "./CFOAIQuoteCarousel.css";

import Arrow from "../../../components/Slide/Arrow/Arrow.js";
import Dot from "../../../components/Slide/Dot/Dot.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import CFOAIQuoteContent from "../../../assets/quotes/CFOAIQuoteContent.js";

export class CFOAIQuoteCarousel extends Component {
  textGenerator(e, m) {
    return this.props.textGenerator(e, m);
  }

  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <Arrow size={"25px"} />,
      prevArrow: <Arrow isReverse={true} size={"25px"} />,
      customPaging: Dot,
    };

    return (
      <div className="quote-container">
        <h1 className="header">
          {this.props.textGenerator(
            "BDO 2019 Report Highlights",
            "BDO 2019年报告要点"
          )}
        </h1>
        <Slider {...sliderSettings} className="quote-slider">
          {CFOAIQuoteContent.map((quote, index) => {
            return <div className="quote-content" key={index}>{quote[this.props.lang]}</div>;
          })}
        </Slider>
      </div>
    );
  }
}

export default CFOAIQuoteCarousel;
