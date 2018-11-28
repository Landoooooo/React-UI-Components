import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderBody from './HeaderBody';

const HeaderContainer = () => {
    return (
        <div className="header-container">
             <ImageThumbnail />
             <HeaderBody />
        </div>
    )
}

export default HeaderContainer;