import React from "react";
import "./CFOAIDetails.css";

import BulletPoint from "../../../components/BulletPoint/BulletPoint.js";

import CFOAIDetailContent from "../../../assets/details/CFOAIDetailContent.js";

const CFOAIDetails = () => {
  return (
    <div className="cfo-ai-details">
      <h2 className="header">
        Here's how CFO AI helps you to profit and grow on autopilot
      </h2>

      <div className="bullet-container">
        {CFOAIDetailContent.general.map((detail, index) => {
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
        The best part is that CFO AI gives you a global and a local ranking by
        benchmarking your restaurant across our international network of
        restaurants. It uses this to:
      </p>

      <div className="bullet-container">
        {CFOAIDetailContent.ranking.map((detail, index) => {
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
        In other words, CFO AI does the complex math so you don’t have to. It
        crunches the numbers in real time and on autopilot to give you
        profitable metrics and suggestions on menu changes, staff scheduling,
        food wastage, and more. You simply decide whether or not to implement
        them by clicking a button.
      </p>
    </div>
  );
};

export default CFOAIDetails;
