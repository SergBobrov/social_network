import React from "react";
import logo from "../../images/main-img.png";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div className={classes.content}>
            <img
                src={logo}
                alt=""/>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
};