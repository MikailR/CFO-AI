import React, { Component } from "react";
import "./Home.css";

import SliderContent from "../../assets/slider/SliderContent.js";
import FeatureContent from "../../assets/features/FeatureContent.js";

import Slide from "../../components/Slide/Slide.js";
import Arrow from "../../components/Slide/Arrow/Arrow.js";
import Dot from "../../components/Slide/Dot/Dot.js"
import Features from "../../components/Features/Features.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class Home extends Component {
  state = {
    mounted: false,
    sliderContent: [],
    featureContent: [],
  };

  componentDidMount() {
    this.setState({
      sliderContent: SliderContent,
      featureContent: FeatureContent,
      mounted: true,
    });
  }

  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <Arrow isReverse={false} />,
      prevArrow: <Arrow isReverse />,
      customPaging: Dot,
    };

    return (
      <div className="home">
        <div className="slider-background">
          <Slider {...sliderSettings} className="slider">
            {this.state.sliderContent.map((slide, index) => {
              return <Slide {...slide} key={index} />;
            })}
          </Slider>
        </div>

        <div className="explore">
          <h1 className="explore-head">Explore the Best Features</h1>
          <div className="explore-separator" />

          <Features features={this.state.featureContent} className="features" />
        </div>
      </div>
    );
  }
}

export default Home;
