import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav flex-center-row">
        <a href="#" className="logo-link">
          <img src={this.props.logo} className="logo" />
        </a>

        <ul className="flex-center-row">
          <li>
            <a href="#" className="home-link">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="contact-link">
              Contact
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hamburger-link"
            >
              <i class="fa fa-bars" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
