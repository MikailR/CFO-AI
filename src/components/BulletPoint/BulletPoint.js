import React from "react";
import "./BulletPoint.css";

import test from "../../assets/bullets/check-bullet.svg";

const BulletPoint = ({ text }) => {
  return (
    <div className="bullet-point flex-center-row">
      <img className="check-bullet" src={test} alt="check-style bullet point"/>
      <p className="bullet-text">
        {text}
      </p>
    </div>
  );
};

export default BulletPoint;
