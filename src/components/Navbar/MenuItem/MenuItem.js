import React, { Component } from "react";
import "./MenuItem.css";
import DropDownArrow from "../../../assets/arrows/DropDownArrow.js";

import { NavLink } from "react-router-dom";

export class MenuItem extends Component {
  render() {
    const isDropdown = this.props.item.isDropdown;
    const isExternal = this.props.item.isExternal;

    return (
      <li className={this.props.className}>
        {isExternal ? (
          <a href={this.props.item.path} className={this.props.item.cName}>
            {this.props.item.title}
          </a>
        ) : (
          <NavLink
            exact
            to={this.props.item.path}
            className={this.props.item.cName}
            activeClassName={"nav-link-active"}
            onClick={
              isDropdown ? this.props.onDropDownClick : this.props.closeFullMenu
            }
          >
            {this.props.item.title}
            {isDropdown ? (
              <DropDownArrow
                className={
                  this.props.isDropDownOpen
                    ? "drop-down-arrow active"
                    : "drop-down-arrow"
                }
              />
            ) : null}
          </NavLink>
        )}

        {isDropdown ? (
          <ul
            className={
              this.props.isDropDownOpen
                ? "drop-down-menu active"
                : "drop-down-menu"
            }
          >
            {this.props.item.subItems.map((subItem, index) => {
              return (
                <MenuItem
                  item={subItem}
                  key={index}
                  closeFullMenu={this.props.closeFullMenu}
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
