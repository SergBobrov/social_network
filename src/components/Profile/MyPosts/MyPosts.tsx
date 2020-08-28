import React from "react";
import logo from "../../images/main-img.png";
import classes from './MyPosts.module.css';
import avatar from "../../../images/avatar.png"
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.post}>
                <Post message='Hi, how a u?' likeCount={15}/>
                <Post message="Its my first post" likeCount={10}/>
            </div>
        </div>
    );
};