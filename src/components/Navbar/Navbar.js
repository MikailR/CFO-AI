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
    isScrolled: false,

    isFeatureDropdownOpen: false,
    isLangDropdownOpen: false,
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

  onDropDownClick = (dropdownId) => {
    if (dropdownId === "features") {
      this.setState((prevState) => ({
        isFeatureDropdownOpen: !prevState.isFeatureDropdownOpen,
      }));
    } else if (dropdownId === "lang") {
      this.setState((prevState) => ({
        isLangDropdownOpen: !prevState.isLangDropdownOpen,
      }));
    }
  };

  closeFullMenu = () => {
    this.setState({
      isFeatureDropdownOpen: false,
      isLangDropdownOpen: false,
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
                  isDropDownOpen={() => {
                    if (item.dropdownId === "features") {
                      return this.state.isFeatureDropdownOpen;
                    } else if (item.dropdownId === "lang") {
                      return this.state.isLangDropdownOpen;
                    } else {
                      return false;
                    }
                  }}
                  onDropDownClick={this.onDropDownClick}
                  closeFullMenu={this.closeFullMenu}
                  handleLangChange={this.props.handleLangChange}
                  lang={this.props.lang}
                />
              );
            })}

            {/* For hamburger menu */}
            <a
              href="https://demo.cfo-ai.com/"
              className="navbar-menu-item demo-link-resp"
            >
              {this.props.textGenerator("Try Demo", "演示")}
            </a>

            {/* For hamburger menu */}
            <Popup
              modal
              trigger={
                <a className="register-button">
                  {this.props.textGenerator("Pre-Register", "抢先注册")}
                </a>
              }
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
