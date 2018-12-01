import React from 'react';
import './Button.css';

const NumberButton = props => {
    return(
         <button className={`numberButtonStyle ${props.extraStyle}`}>{props.text}</button>
    )
}

export default NumberButton;