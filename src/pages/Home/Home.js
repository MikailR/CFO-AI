import React, { Component } from "react";
import "./Home.css";

import SliderContent from "../../assets/slider/SliderContent.js";
import FeatureContent from "../../assets/features/FeatureContent.js";

import Slide from "../../components/Slide/Slide.js";
import Arrow from "../../components/Slide/Arrow/Arrow.js";
import Dot from "../../components/Slide/Dot/Dot.js";
import Features from "../../components/Features/Features.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class Home extends Component {
  state = {
    mounted: false,
    sliderContent: {},
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
      nextArrow: <Arrow isLight size={"35px"} />,
      prevArrow: <Arrow isReverse isLight size={"35px"} />,
      customPaging: Dot,
    };

    const exploreHead = () => {
      if (this.props.lang === "en") {
        return "Explore the Best Features";
      } else if (this.props.lang === "ma") {
        return "探索最新的功能";
      }
    };

    return (
      <React.Fragment>
        <div className="home">
          <div className="slider-background">
            <Slider {...sliderSettings} className="slider">
              {this.state.sliderContent[this.props.lang] &&
                this.state.sliderContent[this.props.lang].map(
                  (slide, index) => {
                    return <Slide {...slide} key={index} textGenerator={this.props.textGenerator} />;
                  }
                )}
            </Slider>
          </div>

          <div className="explore">
            <h1 className="explore-head">{exploreHead()}</h1>
            <div className="explore-separator" />

            <Features
              features={this.state.featureContent}
              className="features"
              lang={this.props.lang}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
