import React from 'react';
import logo from '../../images/logo.jpg'
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo"/>

            <div className={classes.loginBlock}>

                <NavLink to={'/login'}> Login </NavLink>
            </div>
        </header>
    )
};