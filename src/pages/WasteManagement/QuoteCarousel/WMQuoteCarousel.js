import React, { Component } from "react";
import "./WMQuoteCarousel.css";

import Arrow from "../../../components/Slide/Arrow/Arrow.js";
import Dot from "../../../components/Slide/Dot/Dot.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class WMQuoteCarousel extends Component {
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
      <div className="wm-quote-container">
        <h1 className="header">
          {this.props.textGenerator(
            "BDO 2019 Report Highlights",
            "BDO 2019年报告要点"
          )}
        </h1>
        <div className="quote-content">
          {this.props.textGenerator(
            '"We asked restaurant owners their top 3 goals from a randomized list of reasons: 58% Improving the efficiency of operation, 51% Increasing annual net sales, 48% staff productivity, 37% more menu items"',
            '"我们从随机列表中调研了餐厅老板的三大目标占比，回答：提高经营效率的占58%； 提高年净销售额的占51%；提高员工生产力的占 48%；增加更多菜品的占 37%。"'
          )}
        </div>
      </div>
    );
  }
}

export default WMQuoteCarousel;
