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
                  className="col-auto"
                />
                <FeatureText text={this.props.feature.text} className="col" />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <FeatureText text={this.props.feature.text} className="col" />
                <FeatureImage
                  image={this.props.feature.image}
                  className="col"
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
