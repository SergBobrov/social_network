import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";


type MyPostsPropsType = {
    postsData: Array<{
        id: number
        text: string
        likeCount: number
    }>
    addPostToUI: () => void
    addPostToState: (s: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.postsData.map((t) => {
        return (
            <Post message={t.text} likeCount={t.likeCount} key={t.id}/>
        )
    });


    const addPostToUI = () => {
        props.addPostToUI();
        if (textValueRef.current) {
            textValueRef.current.value = "";
        }
    };

    const addPostToState = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.addPostToState(e.currentTarget.value);
    };

    const textValueRef = React.createRef<HTMLTextAreaElement>();

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={textValueRef}
                              onChange={addPostToState}></textarea>

                </div>
                <div>
                    <button

                        onClick={addPostToUI}>Add post
                    </button>
                </div>
            </div>
            <div className={classes.post}>
                {postsElement}
            </div>
        </div>
    );
};