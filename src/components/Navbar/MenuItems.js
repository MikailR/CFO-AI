import React from "react";
import { ReactComponent as English } from "../../assets/flags/united-kingdom.svg";
import { ReactComponent as Mandarin } from "../../assets/flags/china.svg";

const MenuItems = [
  {
    title: "Lang",
    path: "#",
    cName: "navbar-menu-item lang-link",
    isDropdown: true,
    isLangPicker: true,
    dropdownId: "lang",
    subItems: [
      {
        title: "English",
        flag: <English />,
        path: "#",
        cName: "drop-down-menu-item",
        isSubItem: true,
        isDropdown: false,
        isExternal: true,
      },
      {
        title: "Mandarin",
        flag: <Mandarin />,
        path: "#",
        cName: "drop-down-menu-item",
        isSubItem: true,
        isDropdown: false,
        isExternal: true,
      },
    ],
  },
  {
    title: "Home",
    path: "/",
    cName: "navbar-menu-item home-link",
    isDropdown: false,
  },
  {
    title: "Features",
    path: "#",
    cName: "navbar-menu-item features-link",
    isDropdown: true,
    dropdownId: "features",
    subItems: [
      {
        title: "CFO AI",
        path: "/cfo-ai",
        cName: "feature-link feature-menu-item drop-down-menu-item",
        isSubItem: true,
        isDropdown: false,
      },
      {
        title: "Hospitality Tech",
        path: "/staff-and-menu-optimization",
        cName: "feature-link feature-menu-item drop-down-menu-item",
        isSubItem: true,
        isDropdown: false,
      },
      {
        title: "Waste Management",
        path: "/waste-management",
        cName: "feature-link feature-menu-item drop-down-menu-item",
        isSubItem: true,
        isDropdown: false,
      },
      {
        title: "Bankruptcy Protection",
        path: "/bankruptcy-protection",
        cName: "feature-link feature-menu-item drop-down-menu-item",
        isSubItem: true,
        isDropdown: false,
      },
    ],
  },
  {
    title: "Try Demo",
    path: "https://demo.cfo-ai.com/",
    cName: "navbar-menu-item demo-link",
    isDropdown: false,
    isExternal: true,
  },
  {
    title: "Contact Us",
    path: "/contact",
    cName: "navbar-menu-item contact-link",
    isDropdown: false,
  },
];

export default MenuItems;
