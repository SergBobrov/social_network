import React from "react";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";


type MyPostsPropsType = {
    store: any
}


export const MyPostsContainer = (props: MyPostsPropsType) => {
    let state = props.store.getState()


    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    };

    const onPostChane = (text: string) => {
        props.store.dispatch(UpdateNewPostTextActionCreator(text))

    };


    return (
        <MyPosts profilePage={state.profilePage} addPost={addPost} updateNewPostText={onPostChane}
                 newPostText={state.profilePage.newPostText}/>
    );
};