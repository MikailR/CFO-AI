import React, { Component } from "react";
import "./CFOAI.css";

import Modal from "../../components/Modal/Modal.js";
import Footer from "../../components/Footer/Footer.js";
import BulletPoint from "../../components/BulletPoint/BulletPoint.js";

import Popup from "reactjs-popup";

export class CFOAI extends Component {
  getColor = () => ({
    color: "#313438",
  });

  render() {
    return (
      <React.Fragment>
        <div className="cfo-ai">
          <div className="jumbo flex-center-row">
            <div className="container-fluid this">
              <div className="row">
                <div id="cfo-ai-text" className="col-lg">
                  <h1 className="header">Introducing CFO AI</h1>
                  <p className="paragraph-normal">
                    The one stop software for your restaurant’s financial health
                    and management.
                  </p>

                  <p className="paragraph-normal">
                    It effortlessly integrates with your POS to generate
                    actionable insights, automate your routine tasks, rank you
                    against your competitors, and bring you to peak operational
                    efficiency.
                  </p>

                  <div className="bullet-container">
                    <BulletPoint text="Generate actionable insights" />
                    <BulletPoint text="Automate your routine tasks" />
                    <BulletPoint text="Rank you against your competitors" />
                    <BulletPoint text="Bring you to peak efficiency" />

                  </div>

                  <Popup
                    modal
                    trigger={<a className="register-button">Pre-Register</a>}
                  >
                    {(close) => <Modal close={close} />}
                  </Popup>
                </div>
                <div id="cfo-ai-image" className="col-lg"></div>
              </div>
            </div>
          </div>
          <div className="quote-container"></div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default CFOAI;
