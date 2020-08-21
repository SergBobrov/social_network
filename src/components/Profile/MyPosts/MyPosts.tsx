import React from "react";
import logo from "../../images/main-img.png";
import classes from './MyPosts.module.css';
import avatar from "../../../images/avatar.png"


export const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.post}>
                <div className={classes.item}>
                    <img src={avatar} alt=""/>
                    post 1
                </div>
                <div className={classes.item}>
                    post 2
                </div>
            </div>
        </div>
    );
};