import React from "react";
import "./WMDetails.css";

import BulletPoint from "../../../components/BulletPoint/BulletPoint.js";

import WMDetailContent from "../../../assets/details/WMDetailContent.js";

const WMDetails = () => {
  return (
    <div className="waste-management-details">
      <h2 className="header">Here's how it works</h2>

      <div className="bullet-container">
        {WMDetailContent.map((detail, index) => {
          return (
            <BulletPoint
              text={detail.text}
              color={"blue"}
              className="cfo-ai-bullet-point"
              key={index}
            />
          );
        })}
      </div>

      <p className="paragraph">
        We’ve partnered with KTIRO to help restaurants like yours become more
        profitable and sustainable. By reducing your food wastage, you’ll be
        increasing your profits and saving the planet at the same time!
      </p>
    </div>
  );
};

export default WMDetails;
