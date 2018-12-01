import React from 'react';
import './Button.css';

const ActionButton = props =>{
    return(
        <button className={`actionButtonStyle ${props.extraStyle}`}>{props.text}</button>
    )
}

export default ActionButton;