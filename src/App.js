import React, { Component } from "react";
import "./App.css";

import logo from "./assets/logo.png";
import SliderContent from "./assets/SliderContent.js";
import FeatureContent from "./assets/FeatureContent.js";

import Navbar from "./components/Navbar/Navbar.js";
import Slide from "./components/Slide/Slide.js";
import Arrow from "./components/Slide/Arrow/Arrow.js";
import Features from "./components/Features/Features.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class App extends Component {
  state = {
    textInput: "",
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

  onChangeText = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClickButton = () => {
    this.setState({
      textInput: "",
    });
  };

  hamburgerOnClick = () => {
    this.setState((prevState) => ({
      isMobileActive: !prevState.isMobileActive
    }))
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
      customPaging: i => {
        return (
          <div
            className="custom-dots"
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "5px",
              backgroundColor: "transparent",
              boxShadow: "0 0 0 2px #fff",
              marginTop: "50px"
            }}
          ></div>
        );
      },
    };

    if (!this.state.mounted) return null;

    return (
      <div>
        <Navbar logo={logo}></Navbar>

        <div className="slider-background">
          <Slider {...sliderSettings} className="slider">
            {this.state.sliderContent.map((slide) => {
              return <Slide {...slide} key={slide.id} />;
            })}
          </Slider>
        </div>

        <div className="explore">
          <h1 className="explore-head">Explore the best features of CFO AI</h1>
          <Features features={this.state.featureContent} className="features" />
        </div>

        <div className="footer flex-center-column">
          <h1 className="footer-head">The possibilities are endless!</h1>
          <p>Pre-register today to watch your restaurant grow on autopilot</p>
          <form action="Submit">
            <div className="form-container flex-center-row">
              <input
                type="text"
                name="textInput"
                value={this.state.textInput}
                onChange={this.onChangeText}
                style={{ flex: 9 }}
                className="input-text"
              />
              <input
                type="submit"
                onClick={this.onClickButton}
                style={{ flex: 1 }}
                className="input-button"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
