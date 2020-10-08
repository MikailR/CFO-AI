import React from "react";
import "./BPDetails.css";

import BulletPoint from "../../../components/BulletPoint/BulletPoint.js";

import BPDetailContent from "../../../assets/details/BPDetailContent.js";

const BPDetails = () => {
  return (
    <div className="bankruptcy-protection-details">
      <h2 className="header">Here's how it works</h2>

      <div className="bullet-container">
        {BPDetailContent.map((detail, index) => {
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

export default BPDetails;
