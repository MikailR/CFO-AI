import React from "react";
import { ReactComponent as English } from "../../assets/flags/united-kingdom.svg";
import { ReactComponent as Mandarin } from "../../assets/flags/china.svg";

const MenuItems = [
  {
    // title: "Lang",
    path: "#",
    cName: "navbar-menu-item lang-link",
    isDropdown: true,
    isLangPicker: true,
    dropdownId: "lang",
    subItems: [
      {
        title: {
          en: "English",
          ma: "English",
        },
        id: "English",
        flag: <English />,
        path: "#",
        cName: "drop-down-menu-item",
        isSubItem: true,
        isDropdown: false,
        isExternal: true,
      },
      {
        title: {
          en: "中文",
          ma: "中文",
        },
        id: "Mandarin",
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
    title: {
      en: "Home",
      ma: "主页",
    },
    path: "/",
    cName: "navbar-menu-item home-link",
    isDropdown: false,
  },
  {
    title: {
      en: "Features",
      ma: "功能",
    },
    path: "#",
    cName: "navbar-menu-item features-link",
    isDropdown: true,
    dropdownId: "features",
    subItems: [
      {
        title: {
          en: "CFO AI",
          ma: "CFO AI",
        },
        path: "/cfo-ai",
        cName: "feature-link feature-menu-item drop-down-menu-item",
        isSubItem: true,
        isDropdown: false,
      },
      {
        title: {
          en: "Hospitality Tech",
          ma: "服务管理技术",
        },
        path: "/staff-and-menu-optimization",
        cName: "feature-link feature-menu-item drop-down-menu-item",
        isSubItem: true,
        isDropdown: false,
      },
      {
        title: {
          en: "Waste Management",
          ma: "损耗管理",
        },
        path: "/waste-management",
        cName: "feature-link feature-menu-item drop-down-menu-item",
        isSubItem: true,
        isDropdown: false,
      },
      {
        title: {
          en: "Bankruptcy Protection",
          ma: "破产保护",
        },
        path: "/bankruptcy-protection",
        cName: "feature-link feature-menu-item drop-down-menu-item",
        isSubItem: true,
        isDropdown: false,
      },
    ],
  },
  {
    title: {
      en: "Try Demo",
      ma: "演示",
    },
    path: "https://demo.cfo-ai.com/",
    cName: "navbar-menu-item demo-link",
    isDropdown: false,
    isExternal: true,
  },
  {
    title: {
      en: "Contact Us",
      ma: "联系我们",
    },
    path: "/contact",
    cName: "navbar-menu-item contact-link",
    isDropdown: false,
  },
];

export default MenuItems;
