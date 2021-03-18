import React from "react";
import "./Slide.css";

import BulletPoint from "../BulletPoint/BulletPoint.js";
import Modal from "../Modal/Modal.js";

import Popup from "reactjs-popup";

function Slide(props) {
  return (
    <div className="container-fluid slide">
      <div className="row">
        <div id="slide-text" className="col-xl">
          <h1 className="header">{props.text.headline}</h1>
          <p className="paragraph-normal">{props.text.paragraph1}</p>


          {!props.text.bullets ? null : (
            <div className="bullet-container">
              {props.text.bullets.map((bullet, index) => {
                return <BulletPoint text={bullet} key={index} color="blue" textColor="white" />
              })}
            </div>
          )}

          {props.text.paragraph2 ? <p className="paragraph-bold">{props.text.paragraph2}</p>: null}

          <Popup
            modal
            trigger={<a className="register-button">{props.text.button1}</a>}
          >
            {(close) => <Modal close={close} textGenerator={props.textGenerator} />}
          </Popup>
        </div>

        <div id="slide-image" className="col-xl-auto flex-center-column">
          <img src={props.image} className="slide-image" />
        </div>
      </div>
    </div>
  );
}

export default Slide;
