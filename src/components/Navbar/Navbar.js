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

  closeHamburgerMenu = () => {
    this.setState((prevState) => {
      if (prevState.isHamburgerClicked) {
        return ({
          isHamburgerClicked: false,
        })
      }
    })
  }

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
                {/* TODO: Add a dropdown menu for features */}
                <Link to={item.path} className={item.cName} onClick={this.closeHamburgerMenu} >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hamburger-icon" onClick={this.onHamburgerClick}>
          <i
            className={this.state.isHamburgerClicked ? "fa fa-times" : "fa fa-bars"}
            aria-hidden="true"
          ></i>
        </div>
      </nav>
    );
  }
}

export default Navbar;
