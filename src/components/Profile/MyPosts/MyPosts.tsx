import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsType, profilePageType} from "../../../redux/Store";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    profilePage: profilePageType
    updateNewPostText: (text: string) => void
    addPost: () => void
    // test
}


export const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.profilePage.postsData.map((t) => {
        return (
            <Post message={t.text} likeCount={t.likeCount} key={t.id}/>
        )
    });


    const addPost = () => {
        props.addPost()
    };

    const onPostChane = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    };


    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChane}
                        value={props.profilePage.newPostText}
                    />
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