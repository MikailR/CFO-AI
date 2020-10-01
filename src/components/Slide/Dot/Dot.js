import React from "react";
import "./Dot.css";

const Dot = () => {
  return (
    <div
      className="custom-dot"
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        backgroundColor: "transparent",
        boxShadow: "0 0 0 2px #fff",
        marginTop: "50px",
      }}
    ></div>
  );
};

export default Dot;
