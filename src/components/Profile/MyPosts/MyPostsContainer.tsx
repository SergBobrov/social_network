import React from "react";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {ActionsType} from "../../../redux/Store";


const MapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profilePage
    }
};

const DispatchStateToProps = (dispatch: (actions: ActionsType) => void) => {
    return {
        addPost: () => {
            // test
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(UpdateNewPostTextActionCreator(text))
        },
    }
};


export const MyPostsContainer = connect(MapStateToProps, DispatchStateToProps)(MyPosts)