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
        And of course, if you ever decide to opt out of this optional feature,
        you’ll get back the full amount of your total contributions.
      </p>
    </div>
  );
};

export default WMDetails;
