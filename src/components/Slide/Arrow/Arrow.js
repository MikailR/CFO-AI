import React from "react";
import "./Arrow.css";

import forwardLight from "../../../assets/arrows/forward.svg";
import forwardDark from "../../../assets/arrows/forward-dark.svg";
import reverseLight from "../../../assets/arrows/reverse.svg";
import reverseDark from "../../../assets/arrows/reverse-dark.svg";

export default function Arrow(props) {
  const { isReverse, onClick, isLight, size } = props;

  const forward = isLight ? forwardLight : forwardDark;
  const reverse = isLight ? reverseLight : reverseDark;
  
  return (
    <div
      style={getArrowStyle(isReverse, size)}
      className="arrow-container flex-center-column"
      onClick={onClick}
    >
      <img className="arrow" src={isReverse ? reverse : forward} />
    </div>
  );
}

const getArrowStyle = (isReverse, size) => {
  return {
    position: "absolute",
    top: "50%",
    right: isReverse ? "undefined" : "-50px",
    left: isReverse ? "-50px" : "undefined",
    transform: isReverse ? "translate(-30%, -50%)" : "translate(30%, -50%)",
    height: size,
    width: size,
  };
};
