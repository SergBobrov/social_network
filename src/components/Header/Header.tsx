import React from 'react';
import logo from '../../images/logo.jpg'
import classes from './Header.module.css';

export const Header = () => {
    return(
        <header className={classes.header}>
            <img src={logo} alt="logo"/>
        </header>
    )
};