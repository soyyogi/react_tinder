import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            <img 
                className="header_logo"
                src="https://tinder.com/static/apple-touch-icon.png" 
                alt=""
            />            
        </div>
    )
}

export default Header