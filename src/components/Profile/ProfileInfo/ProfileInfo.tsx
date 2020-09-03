import logo from "../../../images/main-img.png";
import React from "react";
import classes from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <img
                src={logo}
                alt=""/>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>

    )
}