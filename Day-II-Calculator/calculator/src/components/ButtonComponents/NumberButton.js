import React from 'react';
import './Button.css';

const NumberButton = props => {
    return(
         <button className={`numberButtonStyle ${props.extraStyle}`} onClick={props.handleClick} value={props.text}>{props.text}</button>
    )
}

export default NumberButton;