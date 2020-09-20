import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";


type MyPostsPropsType = {
    postsData: Array<{
        id: number
        text: string
        likeCount: number
    }>
    addPost: () => void
    newPostText: string
    updateNewPostText: (s: string) => void

}


export const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.postsData.map((t) => {
        return (
            <Post message={t.text} likeCount={t.likeCount} key={t.id}/>
        )
    });


    const addPost = () => {
        console.log("onClick");
        props.addPost()
    };

    const onPostChane = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log("onChange");
        props.updateNewPostText(e.currentTarget.value)
    };



    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea
                              value={props.newPostText}
                              onChange={onPostChane}
                    ></textarea>

                </div>
                <div>
                    <button

                        onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            <div className={classes.post}>
                {postsElement}
            </div>
        </div>
    );
};