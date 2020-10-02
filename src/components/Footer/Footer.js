import React from "react";
import "./Footer.css";

import wave from "../../assets/footer/wave.svg";
import { ReactComponent as Wave } from "../../assets/footer/wave.svg";
import Modal from "../Modal/Modal.js";

import Popup from "reactjs-popup";

const Footer = () => {
  return (
    <React.Fragment>
      <svg
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

      <div className="footer flex-center-column">
        <h1 className="footer-head">The possibilities are endless!</h1>
        <p>Sign up today and watch your restaurant grow on autopilot</p>

        <Popup
          modal
          trigger={<a className="register-button">Pre-Register Now</a>}
        >
          {(close) => <Modal close={close} />}
        </Popup>
      </div>
    </React.Fragment>
  );
};

export default Footer;
