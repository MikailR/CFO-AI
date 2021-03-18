import React from "react";
import "./Footer.css";

import Modal from "../Modal/Modal.js";

import Popup from "reactjs-popup";

const Footer = ({ color, lang, textGenerator }) => {
  const header = () => {
    if (lang === "en") {
      return "The possibilities are endless!";
    } else if (lang === "ma") {
      return "无限的可能性!";
    }
  };

  const text = () => {
    if (lang === "en") {
      return "Sign up today and watch your restaurant profit on autopilot";
    } else if (lang === "ma") {
      return "今天就注册吧，让您的餐厅在自动化中盈利。";
    }
  };

  const register = () => {
    if (lang === "en") {
      return "Pre-Register Now";
    } else if (lang === "ma") {
      return "立即抢先注册";
    }
  };

  return (
    <React.Fragment>
      <div
        style={{ position: "relative", zIndex: "-999", backgroundColor: color }}
      >
        <svg
          style={{ backgroundColor: color }}
          id="footer-pattern"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
	              c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
	              c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
          ></path>
        </svg>
      </div>

      <div className="footer flex-center-column">
        <h1 className="footer-head">{header()}</h1>
        <p>{text()}</p>

        <Popup
          modal
          trigger={<a className="register-button">{register()}</a>}
        >
          {(close) => <Modal close={close} textGenerator={textGenerator} />}
        </Popup>
      </div>
    </React.Fragment>
  );
};

export default Footer;
