import React, { Component } from "react";
import "./MenuItem.css";
import DropDownArrow from "../../../assets/arrows/DropDownArrow.js";

import { NavLink } from "react-router-dom";

export class MenuItem extends Component {
  handleLangChange(title) {
    if (title === "English") {
      this.props.handleLangChange("en");
    } else if (title === "Mandarin") {
      this.props.handleLangChange("ma");
    }

    this.props.closeFullMenu();
  }

  getFlag() {
    if (this.props.lang === "en") {
      return this.props.item.subItems[0].flag;
    } else if (this.props.lang === "ma") {
      return this.props.item.subItems[1].flag;
    }
  }

  render() {
    const isDropdown = this.props.item.isDropdown;
    const isExternal = this.props.item.isExternal;

    return (
      <li className={this.props.className}>
        {isExternal ? (
          <a
            href={this.props.item.path}
            target="_blank"
            className={this.props.item.cName}
            onClick={() => this.handleLangChange(this.props.item.id)}
          >
            {this.props.item.flag}
            <span>{this.props.item.title[this.props.lang]}</span>
          </a>
        ) : (
          <NavLink
            exact
            to={this.props.item.path}
            className={this.props.item.cName}
            activeClassName={"nav-link-active"}
            onClick={
              isDropdown
                ? () => this.props.onDropDownClick(this.props.item.dropdownId)
                : this.props.closeFullMenu
            }
          >
            {this.props.item.isLangPicker
              ? this.getFlag()
              : this.props.item.title[this.props.lang]}

            {isDropdown ? (
              <DropDownArrow
                className={
                  this.props.isDropDownOpen()
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
              this.props.isDropDownOpen()
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
                  handleLangChange={this.props.handleLangChange}
                  lang={this.props.lang}
                />
              );
            })}
          </ul>
        ) : null}

        {this.props.item.isSubItem || isExternal ? null : (
          <div className="separator"></div>
        )}
      </li>
    );
  }
}

export default MenuItem;
