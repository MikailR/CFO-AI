import React, { Component } from "react";
import "./MenuItem.css";
import DropDownArrow from "../../../assets/arrows/DropDownArrow.js";

import { Link } from "react-router-dom";

export class MenuItem extends Component {
  state = {
    isDropDownOpen: false,
  };

  onDropDownClick = () => {
    this.setState((prevState) => ({
      isDropDownOpen: !prevState.isDropDownOpen,
    }));
  };

  render() {
    const isDropdown = this.props.item.isDropdown;

    return (
      <li className="link-wrapper">
        <Link
          to={this.props.item.path}
          className={this.props.item.cName}
          onClick={
            isDropdown ? this.onDropDownClick : this.props.closeHamburgerMenu
          }
        >
          {this.props.item.title}
          {isDropdown ? (
            <DropDownArrow
              className={
                this.state.isDropDownOpen
                  ? "drop-down-arrow active"
                  : "drop-down-arrow"
              }
            />
          ) : null}
        </Link>

        {isDropdown ? (
          <ul
            className={
              this.state.isDropDownOpen
                ? "drop-down-menu active"
                : "drop-down-menu"
            }
          >
            {this.props.item.subItems.map((subItem, index) => {
              return (
                <MenuItem
                  item={subItem}
                  key={index}
                  closeHamburgerMenu={this.props.closeHamburgerMenu}
                />
              );
            })}
          </ul>
        ) : null}

        {this.props.item.isSubItem ? null : <div className="separator"></div>}
      </li>
    );
  }
}

export default MenuItem;
