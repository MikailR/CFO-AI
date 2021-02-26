import React, { Component } from "react";
import "./Navbar.css";
import DropDownArrow from "../../assets/arrows/DropDownArrow.js";

import Modal from "../Modal/Modal.js";
import MenuItems from "./MenuItems.js";
import MenuItem from "./MenuItem/MenuItem.js";

import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    isHamburgerClicked: false,
    isDropDownOpen: false,
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
        return {
          isHamburgerClicked: false,
        };
      }
    });
  };

  onDropDownClick = () => {
    this.setState((prevState) => ({
      isDropDownOpen: !prevState.isDropDownOpen,
    }));
  };

  closeFullMenu = () => {
    this.setState({
      isDropDownOpen: false,
    });
    this.closeHamburgerMenu();
  };

  render() {
    return (
      <div className="nav-wrap">
        <nav
          className={
            this.state.isScrolled
              ? "nav scrolled flex-center-row"
              : "nav flex-center-row"
          }
        >
          <Link to="/cfo-ai" className="navbar-link logo-link">
            <img src={this.props.logo} className="logo" />
          </Link>

          <ul
            className={
              this.state.isHamburgerClicked ? "nav-menu active" : "nav-menu"
            }
          >
            {MenuItems.map((item, index) => {
              return (
                <MenuItem
                  item={item}
                  key={index}
                  className="link-wrapper"
                  isDropDownOpen={this.state.isDropDownOpen}
                  onDropDownClick={this.onDropDownClick}
                  closeFullMenu={this.closeFullMenu}
                />
              );
            })}

            <a href="https://demo.cfo-ai.com/" className="navbar-menu-item demo-link-resp">View Demo</a>

            {/* For hamburger menu */}
            <Popup
              modal 
              trigger={<a className="register-button">Pre-Register</a>}
            >
              {(close) => <Modal close={close} />}
            </Popup>
          </ul>

          <div className="hamburger-icon" onClick={this.onHamburgerClick}>
            <i
              className={
                this.state.isHamburgerClicked ? "fa fa-times" : "fa fa-bars"
              }
              aria-hidden="true"
            ></i>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
