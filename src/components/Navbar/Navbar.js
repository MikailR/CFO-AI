import React, { Component } from "react";
import "./Navbar.css";

import MenuItems from "./MenuItems.js";

class Navbar extends Component {
  state = {
    isHamburgerClicked: false,
    isScrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 10) {
      if (!this.state.isScrolled) {
        this.setState({ isScrolled: true });
      }
    } else {
      if (this.state.isScrolled) {
        this.setState({ isScrolled: false });
      }
    }
  };

  onHamburgerClick = () => {
    this.setState((prevState) => ({
      isHamburgerClicked: !prevState.isHamburgerClicked,
    }));
  };

  render() {
    return (
      <nav
        className={
          this.state.isScrolled
            ? "nav scrolled flex-center-row"
            : "nav flex-center-row"
        }
      >
        <a href="#" className="navbar-link logo-link">
          <img src={this.props.logo} className="logo" />
        </a>

        <ul
          className={
            this.state.isHamburgerClicked ? "nav-menu active" : "nav-menu"
          }
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hamburger-icon" onClick={this.onHamburgerClick}>
          <i
            class={this.state.isHamburgerClicked ? "fa fa-times" : "fa fa-bars"}
            aria-hidden="true"
          ></i>
        </div>
      </nav>
    );
  }
}

export default Navbar;
