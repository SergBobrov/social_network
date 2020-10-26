import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {profileType} from "../../redux/profile-reducer";


type ProfilePropsType = {
    profile: profileType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
};

