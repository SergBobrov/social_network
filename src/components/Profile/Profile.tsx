import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/State";


type ProfilePropsType = {
    postsData: Array<{
        id: number
        text: string
        likeCount: number
    }>
    addPost: (s: string) => void
}


export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData} addPost={addPost}/>
        </div>
    )
};

