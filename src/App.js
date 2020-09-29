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
      isMobileActive: !prevState.isMobileActive,
    }));
  };

  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <Arrow isReverse={false} />,
      prevArrow: <Arrow isReverse />,
      customPaging: (i) => {
        return (
          <div
            className="custom-dots"
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "5px",
              backgroundColor: "transparent",
              boxShadow: "0 0 0 2px #fff",
              marginTop: "50px",
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
          <h1 className="explore-head">Explore the Best Features</h1>
          <div className="explore-separator" />

          <Features features={this.state.featureContent} className="features" />

          <svg
            id="footer-pattern"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
	              c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
	              c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
            ></path>
          </svg>
        </div>

        <div className="footer flex-center-column">
          <h1 className="footer-head">The possibilities are endless!</h1>
          <p>Pre-register today to watch your restaurant grow on autopilot</p>
          <a className="register-button" href="/">
            Pre-Register Now
          </a>

          {/* <form action="Submit">
            <div className="form-container flex-center-row">
              <input
                type="text"
                name="textInput"
                value={this.state.textInput}
                onChange={this.onChangeText}
                className="input-text"
              />
              <input
                type="submit"
                onClick={this.onClickButton}
                className="input-button"
              />
            </div>
          </form> */}
        </div>
      </div>
    );
  }
}

export default App;
