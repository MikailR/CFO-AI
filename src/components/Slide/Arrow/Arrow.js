import React from 'react'
import './Arrow.css'

import forward from '../../../assets/arrows/forward.svg';
import reverse from '../../../assets/arrows/reverse.svg';

export default function Arrow(props) {
    const { isReverse, onClick } = props;

    return (
        <div style={getArrowStyle(isReverse)} className="arrow-container flex-center-column" onClick={onClick}>
             <img className="arrow" src={ isReverse ? reverse : forward } />
        </div>
    )
}

const getArrowStyle = (isReverse) => {
    return {
        position: "absolute",
        top: "50%",
        right: isReverse ? "undefined" : "-50px",
        left: isReverse ? "-50px" : "undefined",
        transform: isReverse?  "translate(-30%, -50%)" : "translate(30%, -50%)",
    }
}
