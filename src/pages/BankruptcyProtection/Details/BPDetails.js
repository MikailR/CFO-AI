import React from "react";
import "./BPDetails.css";

import BulletPoint from "../../../components/BulletPoint/BulletPoint.js";

import BPDetailContent from "../../../assets/details/BPDetailContent.js";

const BPDetails = ({ lang, textGenerator }) => {
  return (
    <div className="bankruptcy-protection-details">
      <h2 className="header">
        {textGenerator("Here's how it works", "这是它的工作原理")}
      </h2>

      <div className="bullet-container">
        {BPDetailContent.map((detail, index) => {
          return (
            <BulletPoint
              text={detail[lang]}
              color={"blue"}
              className="cfo-ai-bullet-point"
              key={index}
            />
          );
        })}
      </div>

      <p className="paragraph">
        {textGenerator(
          "And of course, if you ever decide to opt out of this optional feature, you’ll get back the full amount of your total contributions.",
          "当然，如果您决定不使用这一可选功能，将返还您全部的存入资金。"
        )}
      </p>
    </div>
  );
};

export default BPDetails;
