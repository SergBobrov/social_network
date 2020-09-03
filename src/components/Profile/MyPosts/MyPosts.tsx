import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";


type MyPostsPropsType = {
    postsData: Array<{
        id: number
        text: string
        likeCount: number
    }>
}

export const MyPosts = (props: MyPostsPropsType) => {


    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.post}>
                {props.postsData.map((t) => {
                    return (
                        <Post message={t.text} likeCount={t.likeCount} key={t.id}/>
                    )
                })}
            </div>
        </div>
    );
};