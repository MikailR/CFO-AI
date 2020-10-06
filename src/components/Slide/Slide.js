import React from "react";
import "./Slide.css";

import Modal from "../Modal/Modal.js";

import Popup from "reactjs-popup";

function Slide(props) {
  return (
    <div className="container-fluid slide">
      <div className="row">
        <div id="slide-text" className="col-xl">
          <h1 className="header">{props.text.headline}</h1>
          <p className="paragraph-normal">{props.text.paragraph1}</p>

          <p className="paragraph-bold">{props.text.paragraph2}</p>

          {/* <div className="button-container"> */}
            <Popup
              modal
              trigger={<a className="register-button">{props.text.button1}</a>}
            >
              {(close) => <Modal close={close} />}
            </Popup>

            {/* <a href="#" className="view-demo-button">{props.text.button2}</a> */}
          {/* </div> */}
        </div>

        {/* TODO: Add the Staff and Menu Optimizations slide to carousel */}

        <div
          id="slide-image"
          className="col-xl-auto flex-center-column"
        >
          <img src={props.image} className="slide-image" />
        </div>
      </div>
    </div>
  );
}

export default Slide;
