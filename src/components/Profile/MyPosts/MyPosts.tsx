import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";



type MyPostsPropsType = {
    postsData: Array<{
        id: number
        text: string
        likeCount: number
            }>
    addPost: (s: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.postsData.map((t) => {
        return (
            <Post message={t.text} likeCount={t.likeCount} key={t.id}/>
        )
    });

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
//        newPostElement.current && props.addPost(newPostElement.current.value);
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value);
            newPostElement.current.value = ""
        }
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.post}>
                {postsElement}
            </div>
        </div>
    );
};