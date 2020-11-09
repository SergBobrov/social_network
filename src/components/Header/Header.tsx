import React from 'react';
import logo from '../../images/logo.jpg'
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


type HeaderType = {
    isAuth: boolean
    login: string | null
}

export const Header: React.FC<HeaderType> = ({isAuth, login}) => {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo"/>

            <div className={classes.loginBlock}>
                {isAuth ? login : <NavLink to={'/login'}> Login </NavLink>}

            </div>
        </header>
    )
};