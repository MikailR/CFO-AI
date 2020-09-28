import React from "react";
import "./Slide.css";

function Slide(props) {
  return (
    <div className="container-fluid slide">
      <div className="row">
        <div id="slide-text" className="col-sm-12 col-lg">
          <h1 className="header">{props.text.headline}</h1>
          <p className="paragraph-normal">{props.text.paragraph1}</p>

          <p className="paragraph-bold">{props.text.paragraph2}</p>

          <a className="register-button" href="/">
            {props.text.button}
          </a>
        </div>

        <div
          id="slide-image"
          className="col-sm-12 col-lg-auto flex-center-column"
        >
          <img src={props.image} className="slide-image" />
        </div>
      </div>
    </div>
  );
}

export default Slide;
