import React, { Component } from "react";

import FeatureText from "./FeatureText.js";
import FeatureImage from "./FeatureImage.js";

export class Feature extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="container-fluid">
          <div className="row">
            {this.props.feature.reverse ? (
              <React.Fragment>
                <FeatureImage
                  image={this.props.feature.image}
                  className="col-lg-auto"
                />
                <FeatureText
                  text={this.props.feature.text}
                  className="col-lg"
                  lang={this.props.lang}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <FeatureText
                  text={this.props.feature.text}
                  className="col-lg order-2 order-lg-1"
                  lang={this.props.lang}
                />
                <FeatureImage
                  image={this.props.feature.image}
                  className="col-lg-auto order-1 order-lg-2"
                />
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
