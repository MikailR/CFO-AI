import React, { Component } from 'react'
import './FeatureImage.css'

export class FeatureImage extends Component {
    render() {
        return (
            <div id="feature-image" className={"flex-center-column" + " " + this.props.className}>
                <img src={this.props.image} className="feature-image"/>
            </div>
        )
    }
}

export default FeatureImage
