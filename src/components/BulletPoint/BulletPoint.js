import React from "react";
import "./BulletPoint.css";

import CheckBullet from "../../assets/CheckBullet/CheckBullet.js";

const BulletPoint = ({ text }) => {
  return (
    <div className="bullet-point flex-center-row">
      <CheckBullet />
      <div className="bullet-text">
        {text}
      </div>
    </div>
  );
};

export default BulletPoint;
