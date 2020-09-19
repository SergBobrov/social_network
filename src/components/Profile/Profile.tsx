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
    addPostToUI: () => void
    addPostToState: (s: string) => void
}


export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData} addPostToUI={props.addPostToUI} addPostToState = {props.addPostToState}  />
        </div>
    )
};

