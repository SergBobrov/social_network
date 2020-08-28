import React from "react";
import logo from "../../images/main-img.png";
import classes from './Post.module.css';
import avatar from "../../../../images/avatar.png"

type postType = {
    message : string
    likeCount: number
}

export const Post = (props: postType ) => {
    return (
        <div className={classes.item}>
            <img src={avatar} alt=""/>
            {props.message}
            <br/>
            <div>
                <span>like </span>
                <span>{props.likeCount}</span>
            </div>

            <input value='' />
            <input value='' />
        </div>


);
};
