import React, { Component } from "react";
import "./Navbar.css";

import MenuItems from "./MenuItems.js";

import { Link } from "react-router-dom";

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
        <Link to="/" className="navbar-link logo-link">
          <img src={this.props.logo} className="logo" />
        </Link>

        <ul
          className={
            this.state.isHamburgerClicked ? "nav-menu active" : "nav-menu"
          }
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path} className={item.cName}>
                  {item.title}
                </Link>
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
