import React from "react";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";


type MyPostsPropsType = {
    store: any
}


export const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState()


                    const addPost = () => {
                        store.dispatch(addPostActionCreator())
                    };

                    const onPostChane = (text: string) => {
                        store.dispatch(UpdateNewPostTextActionCreator(text))

                    };

                    return (<MyPosts profilePage={state.profilePage} addPost={addPost} updateNewPostText={onPostChane}
                                     newPostText={state.profilePage.newPostText}/>)
                }
            }
        </StoreContext.Consumer>

    );
};