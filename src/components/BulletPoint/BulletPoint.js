import React from "react";
import "./BulletPoint.css";

import checkBulletGold from "../../assets/bullets/check-bullet-gold.svg";
import checkBulletBlue from "../../assets/bullets/check-bullet-blue.svg";

const BulletPoint = ({ text, color, className }) => {
  return (
    <div className={"bullet-point" + " " + className}>
      <img className="check-bullet" src={checkBullet(color)} alt="check-style bullet point"/>
      <p className="bullet-text">
        {text}
      </p>
    </div>
  );
};

const checkBullet = (color) => {
  switch (color) {
    case "gold":
      return checkBulletGold;
    case "blue":
      return checkBulletBlue;
    default:
      return checkBulletGold;
  }
};

export default BulletPoint;
