import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


type ProfilePropsType = {
    postsData: Array<{
        id: number
        text: string
        likeCount: number
    }>
    addPost: () => void
    newPostText: string
    updateNewPostText: (s: string) => void

}


export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     addPost = {props.addPost}
                     newPostText = {props.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
};

